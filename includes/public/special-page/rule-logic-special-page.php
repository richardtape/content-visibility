<?php
/**
 * Ruleset callback function for Special Pages.
 *
 * @package ContentVisibility
 */

namespace RichardTape\ContentVisibility;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Callback function for when we have specialPage rules set.
 *
 * The return value determines whether the block is 'kept' or not. So if we return true
 * then the block MAY not be removed (other rules may apply). If we return false then the
 * block WILL be removed.
 *
 * Returning TRUE will mean the block will be kept.
 * Returning FALSE will mean the block will be removed.
 *
 * @param string $rule_value What the rule is set to: 'logged-in' or 'logged-out'.
 * @param string $block_visibility Whether the block should be shown or hidden if the rule is true.
 * @param array  $block The full block.
 *
 * @return bool  false if the block is to be removed. true if the block is to be potentially kept.
 */
function rule_logic_special_page( $rule_value, $block_visibility, $block ) {

	// If no pages are listed, this rule keeps the block.
	if ( empty( $rule_value ) || empty( $rule_value['pages'] ) || ! is_array( $rule_value['pages'] ) ) {
		return true;
	}

	$special_pages = $rule_value['pages'];

	$special_page_rules = \RichardTape\ContentVisibility\get_special_pages();

	// If ANY of the special page rules match for this block then we should do what is set in $block_visibility. This variable
	// keeps a record of whether any rule matches. We default to false, but if we find a rule that matches it, it's set to true
	// (and we also stop looking at other rules).
	$matches_any_special_page_rule = false;

	/**
	* This may not be the most efficient way to do this. We should likely store the result from each callback into an array
	* so that we're only testing each conditional tag once per PAGE rather than potentially repeating them for each block ON the page.
	*/
	foreach ( $special_pages as $id => $special_page ) {

		// What 'type' of special page is this rule? i.e. 'search' or 'any page' etc.
		$special_page_type = $special_page['value'];

		// Which callback function are we testing for this block? This will be an array with the 0th item being the callback function
		// and the other item being an array of arguments for the callback function.
		$callback_function_for_this_page_type = $special_page_rules[ $special_page_type ]['callback'][0];
		$arguments_for_callback_function      = ( isset( $special_page_rules[ $special_page_type ]['callback'][1] ) && is_array( $special_page_rules[ $special_page_type ]['callback'][1] ) ) ? $special_page_rules[ $special_page_type ]['callback'][1] : array();

		$value_from_callback = (bool) ( is_callable( $callback_function_for_this_page_type ) ) ? rest_sanitize_boolean( call_user_func_array( $callback_function_for_this_page_type, $arguments_for_callback_function ) ) : false;

		if ( true === $value_from_callback ) {
			$matches_any_special_page_rule = true;
			break;
		}
	}

	switch ( $block_visibility ) {
		case 'shown':
			return $matches_any_special_page_rule;
		case 'hidden':
			return ! $matches_any_special_page_rule;
	}

}//end rule_logic_special_page()
