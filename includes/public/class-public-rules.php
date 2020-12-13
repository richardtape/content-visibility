<?php
/**
 * Loader for the Block Visibility Public-facing components.
 *
 * @package BlockVisbility
 */

namespace RichardTape\BlockVisibility;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main class for the public-facing components for Block Visibility.
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
	 * We have to handle reusable blocks separately. If we detect we need to remove a
	 * reusable block in remove_blocks_from_content() then the ref attribute for that
	 * block is added to $reusable_blocks_to_remove. We then hook into the pre_render_block
	 * filter in handle_removing_reusable_blocks() to remove the reusable blocks based on
	 * the ref IDs stored in this property.
	 *
	 * @var array
	 */
	public $reusable_blocks_to_remove = array();


	/**
	 * Initialize ourselves.
	 *
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
	 * @return void
	 */
	public function set_rule_types_and_callbacks() {

		add_filter( 'block_visibility_rule_types_and_callbacks', array( $this, 'add_user_authenticated_callback' ), 5, 1 );

		$rule_types_and_callbacks = apply_filters( 'block_visibility_rule_types_and_callbacks', array() );

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

		$rule_types_and_callbacks['userAuthenticated'] = 'RichardTape\BlockVisibility\rule_logic_user_authenticated';

		return $rule_types_and_callbacks;

	}//end add_user_authenticated_callback()

	/**
	 * Register hooks
	 *
	 * @return void
	 */
	public function add_hooks() {

		// Determine if we have BV Rules.
		add_filter( 'the_content', array( $this, 'the_content__determine_blocks' ), 7, 1 );

		// Handle Reusable block removal.
		add_filter( 'pre_render_block', array( $this, 'handle_removing_reusable_blocks' ), 5, 2 );

	}//end add_hooks()


	/**
	 * Parses dynamic blocks out of `post_content` and re-renders them.
	 * Removes any block that shouldn't be shown now. Runs on the_content
	 * filter at priority 7 because Gutenberg runs `do_blocks()` at priority 9.
	 *
	 * @param string $content The current post's content.
	 * @return string         Updated post content.
	 */
	public function the_content__determine_blocks( $content ) {

		// We don't want to change anything in the admin.
		if ( is_admin() ) {
			return $content;
		}

		// if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
		// 	return $content;
		// }

		// No blocks? Then we don't need to do anything.
		if ( ! has_blocks( $content ) ) {
			return $content;
		}

		// Check this post has some bv rules.
		if ( ! $this->post_contains_blocks_with_rules( $content ) ) {
			return $content;
		}

		// Extract blocks from the content to determine if we have any blocks with BV rules.
		$blocks = $this->extract_blocks_from_content( $content );

		// Couldn't find any blocks? Bail.
		if ( ! is_array( $blocks ) || empty( $blocks ) ) {
			return $content;
		}

		$blocks_to_remove = $this->determine_blocks_to_remove( $blocks );

		$content = $this->remove_blocks_from_content( $blocks_to_remove, $content, $blocks );

		return $content;

	}//end the_content__determine_blocks()


	/**
	 * Determine if the post contains any blocks with rules. This is
	 * an opening gambit for rule checking. We look at the whole post_content
	 * string and see if we have the string 'blockVisibilityRules' in it.
	 *
	 * If the post is empty, or doesn't contain blockVisibilityRules then this
	 * post has no blocks containing Block Visibility Rules.
	 *
	 * @param string $content The current post's content.
	 * @return bool True if the post contains any blocks with BV rules. False otherwise.
	 */
	public function post_contains_blocks_with_rules( $content ) {

		// Bail early if we're not passed anything.
		if ( empty( $content ) ) {
			return false;
		}

		// The strings to look for.
		$bv_rule_strings = array(
			'"blockVisibilityRules":',
		);
		foreach ( $bv_rule_strings as $id => $bv_rule_string ) {
			// Bail immediately if we find a match.
			if ( strpos( $content, $bv_rule_string ) !== false ) {
				return true;
			}
		}
		// If we get here, then we didn't find a match.
		return false;

	}//end post_contains_blocks_with_rules()


	/**
	 * Parse out Gutenberg blocks from the passed content.
	 *
	 * @param string $content The current post's content.
	 * @return array The blocks in this post.
	 */
	public function extract_blocks_from_content( $content ) {

		if ( empty( $content ) ) {
			return array();
		}

		$blocks = parse_blocks( $content );

		return $blocks;

	}//end extract_blocks_from_content()

	/**
	 * Undocumented function
	 *
	 * @param array $blocks The blocks in the current post.
	 * @return array The blocks we need to remove based on the rules.
	 */
	public function determine_blocks_to_remove( $blocks ) {

		if ( ! is_array( $blocks ) || empty( $blocks ) ) {
			return array();
		}

		$blocks_to_remove = array();

		foreach ( $blocks as $block_id => $block ) {

			if ( $this->this_block_should_be_removed( $block ) ) {
				$blocks_to_remove[ $block_id ] = $block;
			}
		}

		return $blocks_to_remove;

	}//end determine_blocks_to_remove()


	/**
	 * Determine if the passed block should be removed. This is based on
	 * the rules set in the block attributes and what that means in the current
	 * page load/context/user etc.
	 *
	 * @param array $block The block to test to see if it should be removed.
	 * @return bool True if this block should be removed. False otherwise.
	 */
	public function this_block_should_be_removed( $block ) {

		// Ensure we have attributes.
		if ( ! is_array( $block ) || empty( $block ) || ! isset( $block['attrs'] ) ) {
			return false;
		}

		// Ensure we have rules.
		if ( ! is_array( $block['attrs'] ) || empty( $block['attrs'] ) || ! isset( $block['attrs']['blockVisibilityRules'] ) ) {
			return false;
		}

		if ( ! is_array( $block['attrs']['blockVisibilityRules'] ) || empty( $block['attrs']['blockVisibilityRules'] ) ) {
			return false;
		}

		// Ensure we have rules enabled.
		if ( ! isset( $block['attrs']['blockVisibilityRules']['blockVisibilityRulesEnabled'] ) ) {
			return false;
		}

		if ( 1 !== absint( $block['attrs']['blockVisibilityRules']['blockVisibilityRulesEnabled'] ) ) {
			return false;
		}

		// Ensure we have a shown or hidden.
		if ( ! isset( $block['attrs']['blockVisibilityRules'] ) || empty( $block['attrs']['blockVisibilityRules'] ) ) {
			return false;
		}

		// OK this block has rules and the rules are enabled.
		// Allow add-ons to set a block to be removed. Short circuit.
		$remove = apply_filters( 'block_visibility_block_should_be_removed', null, $block );
		if ( null !== $remove && is_bool( $remove ) ) {
			return $remove;
		}

		// We now run this block through the rules for this plugin.
		$rules = $block['attrs']['blockVisibilityRules'];

		// Create a copy of the rules, remove the 'blockVisibilityRulesEnabled' (as we already know
		// they are enabled) and then loop over each rule that is set calling the callback for that
		// rule.
		$block_rules = $rules;
		unset( $block_rules['blockVisibilityRulesEnabled'] );

		if ( ! isset( $block['attrs']['blockVisibility'] ) ) {
			return false;
		}

		// shown or hidden.
		$block_visibility = $block['attrs']['blockVisibility'];

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

			// Skip if we don't have a registered ruleset or callback for this rule type.
			if ( ! in_array( $rule_type, array_keys( $rules_and_callbacks ), true ) ) {
				continue;
			}

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
	 * Remove the passed $blocks_to_remove from the $content.
	 *
	 * @param array  $blocks_to_remove The blocks to remove.
	 * @param string $content The current post content.
	 * @param array  $blocks All the blocks in this post.
	 * @return string The modified content with the necessary blocks removed.
	 */
	public function remove_blocks_from_content( $blocks_to_remove, $content, $blocks ) {

		if ( ! is_array( $blocks_to_remove ) || empty( $blocks_to_remove ) ) {
			return $content;
		}

		if ( empty( $content ) ) {
			return $content;
		}

		foreach ( $blocks_to_remove as $id => $block_to_remove ) {

			// If this is a reusable block, we have to handle it slightly differently.
			if ( isset( $block_to_remove['attrs']['ref'] ) ) {

				$reusable_blocks_to_remove   = $this->reusable_blocks_to_remove;
				$reusable_blocks_to_remove[] = $block_to_remove['attrs']['ref'];

				$this->reusable_blocks_to_remove = $reusable_blocks_to_remove;
			}

			$html_to_remove = $block_to_remove['innerHTML'];
			$content        = str_replace( trim( $html_to_remove ), '', $content );
		}

		return $content;

	}//end remove_blocks_from_content()

	/**
	 * Remove the reusable blocks set in $this->reusable_blocks_to_remove.
	 *
	 * @param string|null $null         The pre-rendered content. Default null.
	 * @param array       $parsed_block The block being rendered.
	 *
	 * @return mixed null if block is not to be removed. Not null otherwise.
	 */
	public function handle_removing_reusable_blocks( $null, $parsed_block ) {

		if ( empty( $this->reusable_blocks_to_remove ) ) {
			return $null;
		}

		// Only do this for 'core/block' which is what reusable blocks come in as.
		if ( 'core/block' !== $parsed_block['blockName'] ) {
			return $null;
		}

		// Ensure there's a ref.
		if ( ! isset( $parsed_block['attrs']['ref'] ) ) {
			return $null;
		}

		// If THIS reusable block isn't one to remove, bail.
		if ( ! in_array( absint( $parsed_block['attrs']['ref'] ), array_values( $this->reusable_blocks_to_remove ), true ) ) {
			return $null;
		}

		// Remove this reusable block by returning a non-null value.
		return false;

	}//end handle_removing_reusable_blocks()

}//end class
