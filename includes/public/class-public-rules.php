<?php
/**
 * Loader for the Content Visibility Public-facing components.
 *
 * @package ContentVisibility
 */

namespace RichardTape\ContentVisibility;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main class for the public-facing components for Content Visibility.
 */
class Public_Rules {

	/**
	 * We store the rule types - such as 'userAuthenticated' - and their
	 * associated callback so we can determine if a block should be removed.
	 *
	 * @var array
	 */
	public $rule_types_and_callbacks = array();

	/**
	 * Initialize ourselves.
	 *
	 * @since 0.1.0
	 * @return void
	 */
	public function init() {

		$this->set_rule_types_and_callbacks();

		$this->add_hooks();

	}//end init()


	/**
	 * Set the rule types and their associated callbacks. Run through a filter
	 * so external plugins can register a rule type and a callback.
	 *
	 * @since 0.1.0
	 * @return void
	 */
	public function set_rule_types_and_callbacks() {

		// Register the user authentication callback. This is how add-ons will do it.
		add_filter( 'content_visibility_rule_types_and_callbacks', array( $this, 'add_user_authenticated_callback' ), 5, 1 );

		// Register our special pages callback. This is for the widgets screen, but should also apply to full site editing.
		add_filter( 'content_visibility_rule_types_and_callbacks', array( $this, 'add_special_pages_callback' ), 5, 1 );

		/**
		 * Filter all of our registered rules and callbacks..
		 *
		 * This is where add-ons (and this core plugin above) register the rule callbacks which determine whether a
		 * block should be shown or not. It is an associative array where the key is the name of the rule and the value
		 * is the full path to the callback function which will be called when a block is being checked to see if it
		 * should be removed from display or not.
		 *
		 * @since 0.1.0
		 *
		 * @param array $rule_types_and_callbacks An associative array [ruleName] => 'function name including namespace'
		 */
		$rule_types_and_callbacks = apply_filters( 'content_visibility_rule_types_and_callbacks', array() );

		$this->rule_types_and_callbacks = $rule_types_and_callbacks;

	}//end set_rule_types_and_callbacks()

	/**
	 * Callback which adds our user auth function to the list of rules.
	 *
	 * @param array $rule_types_and_callbacks Existing rules and callbacks.
	 *
	 * @return array modified rule types and callbacks with ours added.
	 */
	public function add_user_authenticated_callback( $rule_types_and_callbacks ) {

		require_once plugin_dir_path( __FILE__ ) . 'user-authentication/rule-logic-user-authenticated.php';

		$rule_types_and_callbacks['userAuthenticated'] = 'RichardTape\ContentVisibility\rule_logic_user_authenticated';

		return $rule_types_and_callbacks;

	}//end add_user_authenticated_callback()


	/**
	 * Callback which adds our special pages function to the list of rules.
	 *
	 * @param array $rule_types_and_callbacks Existing rules and callbacks.
	 *
	 * @return array modified rule types and callbacks with ours added.
	 */
	public function add_special_pages_callback( $rule_types_and_callbacks ) {

		require_once plugin_dir_path( __FILE__ ) . 'special-page/rule-logic-special-page.php';

		$rule_types_and_callbacks['specialPage'] = 'RichardTape\ContentVisibility\rule_logic_special_page';

		return $rule_types_and_callbacks;

	}//end add_special_pages_callback()

	/**
	 * Register hooks
	 *
	 * @since 0.1.0
	 * @return void
	 */
	public function add_hooks() {

		add_filter( 'pre_render_block', array( $this, 'pre_render_block__test_and_remove_block' ), 5, 2 );

		add_filter( 'render_block', array( $this, 'render_block__test_and_remove_block' ), 5, 2 );

	}//end add_hooks()


	/**
	 * Determine if the passed block should be removed. This is based on
	 * the rules set in the block attributes and what that means in the current
	 * page load/context/user etc.
	 *
	 * @param array $block The block to test to see if it should be removed.
	 *
	 * @since 0.1.0
	 * @return bool True if this block should be removed. False otherwise.
	 */
	public function this_block_should_be_removed( $block ) {

		// Ensure we have attributes.
		if ( ! is_array( $block ) || empty( $block ) || ! isset( $block['attrs'] ) ) {
			return false;
		}

		// Ensure we have rules.
		if ( ! is_array( $block['attrs'] ) || empty( $block['attrs'] ) || ! isset( $block['attrs']['contentVisibilityRules'] ) ) {
			return false;
		}

		if ( ! is_array( $block['attrs']['contentVisibilityRules'] ) || empty( $block['attrs']['contentVisibilityRules'] ) ) {
			return false;
		}

		// Ensure we have rules enabled.
		if ( ! isset( $block['attrs']['contentVisibilityRules']['contentVisibilityRulesEnabled'] ) ) {
			return false;
		}

		if ( 1 !== absint( $block['attrs']['contentVisibilityRules']['contentVisibilityRulesEnabled'] ) ) {
			return false;
		}

		// Ensure we have a shown or hidden.
		if ( ! isset( $block['attrs']['contentVisibilityRules'] ) || empty( $block['attrs']['contentVisibilityRules'] ) ) {
			return false;
		}

		// OK this block has rules and the rules are enabled.
		// Allow add-ons to set a block to be removed. Short circuit.
		$remove = apply_filters( 'content_visibility_block_should_be_removed', null, $block );
		if ( null !== $remove && is_bool( $remove ) ) {
			return $remove;
		}

		// We now run this block through the rules for this plugin.
		$rules = $block['attrs']['contentVisibilityRules'];

		// Create a copy of the rules, remove the 'contentVisibilityRulesEnabled' (as we already know
		// they are enabled) and then loop over each rule that is set calling the callback for that
		// rule.
		$block_rules = $rules;
		unset( $block_rules['contentVisibilityRulesEnabled'] );

		if ( ! isset( $block['attrs']['contentVisibility'] ) ) {
			return false;
		}

		// shown or hidden.
		$block_visibility = $block['attrs']['contentVisibility'];

		if ( empty( $block_rules ) ) {
			return false;
		}

		$rules_and_callbacks = $this->rule_types_and_callbacks;

		// If for some reason we don't have rules/rulesets, bail and don't remove.
		if ( ! is_array( $rules_and_callbacks ) || empty( $rules_and_callbacks ) ) {
			return false;
		}

		// Loop over each rule and bail as soon as we find a rule that
		// would prohibit this block from being shown.
		foreach ( $block_rules as $rule_type => $rule_value ) {

			// If the return of the callback is 'true' then the block is to be kept.
			$keep_block = call_user_func( $rules_and_callbacks[ $rule_type ], $rule_value, $block_visibility, $block );

			// If $keep_block is false then we need to REMOVE this block. Bail as early as pos.
			if ( false === $keep_block ) {
				return true;
			}
		}

		return false;

	}//end this_block_should_be_removed()

	/**
	 * We hook in before blocks are rendered to deal with top-level blocks. i.e. non-nested blocks.
	 * This is the most efficient method to remove blocks if we need to.
	 *
	 * @param string|null $null         The pre-rendered content. Default null.
	 * @param array       $parsed_block The block being rendered.
	 *
	 * @since 0.1.0
	 * @return mixed null if block is not to be removed. Not null otherwise.
	 */
	public function pre_render_block__test_and_remove_block( $null, $parsed_block ) {

		// We don't want to change anything in the admin.
		if ( is_admin() ) {
			return $null;
		}

		// Or a REST request.
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return $null;
		}

		if ( ! isset( $parsed_block['blockName'] ) || empty( $parsed_block['blockName'] ) ) {
			return $null;
		}

		$remove = $this->this_block_should_be_removed( $parsed_block );

		if ( ! $remove ) {
			return $null;
		}

		/**
		 * Filter what a block being 'removed' is replaced with.
		 *
		 * By default, to 'remove' a block, we replace what it would normally output with false. This short-
		 * circuits the block renderer. However as long as that value is non-null, it will output that.
		 * This filter allows external sources to adjust that; perhaps adding a message of some sort.
		 *
		 * @since 0.1.2
		 *
		 * @param bool  $show_block Should this block be shown. False by default. If non-null, will replace block.
		 * @param array $parsed_block The parsed block with all its properties.
		 */
		return apply_filters( 'content_visibility_replace_block_content', false, $parsed_block );

	}//end pre_render_block__test_and_remove_block()


	/**
	 * In addition to pre_render_block__test_and_remove_block() we also hook in on
	 * render_block which allows us to handle nested blocks.
	 *
	 * @param string $block_content The current block's content.
	 * @param array  $block The block being rendered.
	 *
	 * @since 0.1.0
	 * @return string Either an empty string if this block is being removed, or the original block content if it is staying.
	 */
	public function render_block__test_and_remove_block( $block_content, $block ) {

		// We don't want to change anything in the admin.
		if ( is_admin() ) {
			return $block_content;
		}

		// Or a REST request.
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return $block_content;
		}

		$remove = $this->this_block_should_be_removed( $block );

		if ( $remove ) {
			/**
			 * Filter what a nested block being 'removed' is replaced with.
			 *
			 * By default, to 'remove' a block, we replace what it would normally output with an empty string.
			 * This filter allows external sources to adjust that; perhaps adding a message of some sort.
			 *
			 * @since 0.1.2
			 *
			 * @param string $content What the content of the block will be replaced by.
			 * @param string $block_content The original content for the block.
			 * @param array  $block The full block with all its properties.
			 */
			return wp_kses_post( apply_filters( 'content_visibility_replace_nested_block_content', '', $block_content, $block ) );
		}

		return $block_content;

	}//end render_block__test_and_remove_block()

}//end class
