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

		$default_rule_types_and_callbacks = array(
			'userAuthenticated' => array( $this, 'rule_logic_user_authenticated' ),
		);

		$rule_types_and_callbacks = apply_filters( 'block_visibility_rule_types_and_callbacks', $default_rule_types_and_callbacks );

		$this->rule_types_and_callbacks = $rule_types_and_callbacks;

	}//end set_rule_types_and_callbacks()


	/**
	 * Register hooks
	 *
	 * @return void
	 */
	public function add_hooks() {

		// Determine if we have BV Rules.
		add_filter( 'the_content', array( $this, 'the_content__determine_blocks' ), 7, 1 );

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
			$html_to_remove = $block_to_remove['innerHTML'];
			$content        = str_replace( trim( $html_to_remove ), '', $content );
		}

		return $content;

	}//end remove_blocks_from_content()


	/**
	 * Callback function for when we have some userAuthenticated rules set.
	 *
	 * If block_visibility is set to 'shown' for this block:
	 *     if $rule_value is 'logged-in' then a user needs to be logged in to see this block
	 *     if $rule_value is 'logged-out' then a user must NOT be logged in to see this block
	 * If block_visibility is set to 'hidden':
	 *     if $rule_value is 'logged-in' then a logged-in user will NOT see this block
	 *     if $rule_value is 'logged-out' then a logged out user will NOT see this block.
	 *
	 * The return value determines whether the block is 'kept' or not. So if we return true
	 * then the block MAY not be removed (other rules may apply). If we return false then the
	 * block WILL be removed.
	 *
	 * @param string $rule_value What the rule is set to: 'logged-in' or 'logged-out'.
	 * @param string $block_visibility Whether the block should be shown or hidden if the rule is true.
	 * @param array  $block The full block.
	 * @return bool  false if the block is to be removed. true if the block is to be potentially kept.
	 */
	public function rule_logic_user_authenticated( $rule_value, $block_visibility, $block ) {

		$authenticated_user = is_user_logged_in();

		switch ( $block_visibility ) {
			case 'shown':
				return $authenticated_user;

			case 'hidden':
				return ! $authenticated_user;
		}

	}//end rule_logic_user_authenticated()

}//end class
