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

	// $rule_value is an array that contains a list of the different types of special pages, i.e. specialPages, pages, posts etc.

	// Test if all of the rules are empty.
	$rules_copy = $rule_value;
	$empty_test = array_filter( $rules_copy );

	// If all of the specialPage rules are empty, return true to allow other rules to determine visibility.
	if ( empty( $empty_test ) ) {
		return true;
	}

	// The logic here is if ANY of the items in ANY of the specialPages returns true, then this block should be kept.
	$matches_any_special_page_rule = false;

	foreach ( $rule_value as $rule => $value ) {

		// Don't need to load our content if this block doesn't have rules for this type of special page.
		if ( empty( $rule_value[ $rule ] ) ) {
			continue;
		}

		// Each of the specialPage types (specialPages, pages, posts, etc.) have their own function to determine
		// whether this specific block on this specific URL is in the list selected by the user.
		switch ( $rule ) {

			case 'specialPages':
				// If we have already returned true from any of these switch statements, bail, as we don't need to do more tests.
				if ( true === $matches_any_special_page_rule ) {
					break;
				}

				$matches_any_special_page_rule = (bool) rule_logic_special_page_special_pages( $rule_value[ $rule ], $block );
				break;

			case 'pages':
				// If we have already returned true from any of these switch statements, bail, as we don't need to do more tests.
				if ( true === $matches_any_special_page_rule ) {
					break;
				}

				$matches_any_special_page_rule = (bool) rule_logic_special_page_pages( $rule_value[ $rule ], $block );
				break;

			case 'posts':
				// If we have already returned true from any of these switch statements, bail, as we don't need to do more tests.
				if ( true === $matches_any_special_page_rule ) {
					break;
				}

				$matches_any_special_page_rule = (bool) rule_logic_special_page_posts( $rule_value[ $rule ], $block );
				break;

			case 'categories':
				// If we have already returned true from any of these switch statements, bail, as we don't need to do more tests.
				if ( true === $matches_any_special_page_rule ) {
					break;
				}

				$matches_any_special_page_rule = (bool) rule_logic_special_page_categories( $rule_value[ $rule ], $block );
				break;

			case 'tags':
				// If we have already returned true from any of these switch statements, bail, as we don't need to do more tests.
				if ( true === $matches_any_special_page_rule ) {
					break;
				}

				$matches_any_special_page_rule = (bool) rule_logic_special_page_tags( $rule_value[ $rule ], $block );
				break;

			default:
				break;
		}
	}

	// if $matches_any_special_page_rule is true then the current URL has been matched with this block's specialPages somewhere.
	switch ( $block_visibility ) {
		case 'shown':
			return $matches_any_special_page_rule;
		case 'hidden':
			return ! $matches_any_special_page_rule;
	}

}//end rule_logic_special_page()

/**
 * Determine if the current URL is in the passed specialPages (in $rule_value_selections).
 *
 * @param array $rule_value_selections The specific selections for this block for this type of specialPage.
 * @param array $block The current block being evaluated.
 *
 * @return bool True If the current URL is found in $rule_value_selections. False otherwise.
 */
function rule_logic_special_page_special_pages( $rule_value_selections, $block ) {

	// If there's no rules, then this URL is not in this block selection.
	if ( empty( $rule_value_selections ) ) {
		return false;
	}

	// if ANY of the pages selected in $rule_value_selections are this page, then this function returns true immediately.
	// So default to false here and if we get past this foreach statement, we return true.
	$this_url_is_in_passed_selections = false;

	// Special pages (such as 404, search, date archive etc.) are stored here.
	$special_page_rules = \RichardTape\ContentVisibility\get_special_pages();

	foreach ( $rule_value_selections as $id => $page ) {

		if ( ! isset( $page['value'] ) ) {
			continue;
		}

		// This is a key for one of the sub-arrays found in $special_page_rules and within that sub-array will be the
		// appropriate callback function to determine if this block's settings match the current URL.
		$special_page_type = esc_attr( $page['value'] );

		$callback_function_for_this_page_type = $special_page_rules[ $special_page_type ]['callback'][0];
		$arguments_for_callback_function      = ( isset( $special_page_rules[ $special_page_type ]['callback'][1] ) && is_array( $special_page_rules[ $special_page_type ]['callback'][1] ) ) ? $special_page_rules[ $special_page_type ]['callback'][1] : array();

		$value_from_callback = (bool) ( is_callable( $callback_function_for_this_page_type ) ) ? rest_sanitize_boolean( call_user_func_array( $callback_function_for_this_page_type, $arguments_for_callback_function ) ) : false;

		if ( true === $value_from_callback ) {
			$this_url_is_in_passed_selections = true;
			break;
		}
	}

	return $this_url_is_in_passed_selections;

}//end rule_logic_special_page_special_pages()


/**
 * Determine if the current URL is in the passed specialPages (in $rule_value_selections).
 * $rule_value_selections is an array of arrays. Each subarray has a 'value' key which is the pageID selected for this block.
 *
 * @param array $rule_value_selections The specific selections for this block for this type of specialPage.
 * @param array $block The current block being evaluated.
 *
 * @return bool True If the current URL is found in $rule_value_selections. False otherwise.
 */
function rule_logic_special_page_pages( $rule_value_selections, $block ) {

	// If there's no rules, then this URL is not in this block selection.
	if ( empty( $rule_value_selections ) ) {
		return false;
	}

	// if ANY of the pages selected in $rule_value_selections are this page, then this function returns true immediately.
	// So default to false here and if we get past this foreach statement, we return true.
	$this_url_is_in_passed_selections = false;

	foreach ( $rule_value_selections as $id => $page ) {

		if ( ! isset( $page['value'] ) ) {
			continue;
		}

		$page_id = absint( $page['value'] );

		if ( is_page( $page_id ) ) {
			return true;
		}
	}

	return $this_url_is_in_passed_selections;

}//end rule_logic_special_page_pages()


/**
 * Callbackfunction for special page.
 *
 * @param array $rule_value_selections The specific selections for this block for this type of specialPage.
 * @param array $block The current block being evaluated.
 *
 * @return bool True If the current URL is found in $rule_value_selections. False otherwise.
 */
function rule_logic_special_page_posts( $rule_value_selections, $block ) {

	// If there's no rules, then this URL is not in this block selection.
	if ( empty( $rule_value_selections ) ) {
		return false;
	}

	// if ANY of the pages selected in $rule_value_selections are this page, then this function returns true immediately.
	// So default to false here and if we get past this foreach statement, we return true.
	$this_url_is_in_passed_selections = false;

	foreach ( $rule_value_selections as $id => $page ) {

		if ( ! isset( $page['value'] ) ) {
			continue;
		}

		$post_id = absint( $page['value'] );

		if ( is_single( $post_id ) ) {
			return true;
		}
	}

	return $this_url_is_in_passed_selections;

}//end rule_logic_special_page_posts()


/**
 * Callbackfunction for special page categories.
 * Test if the current post being shown is in the chosen category list.
 *
 * @param array $rule_value_selections The specific selections for this block for this type of specialPage.
 * @param array $block The current block being evaluated.
 *
 * @return bool True If the current URL is found in $rule_value_selections. False otherwise.
 */
function rule_logic_special_page_categories( $rule_value_selections, $block ) {

	// If there's no rules, then this URL is not in this block selection.
	if ( empty( $rule_value_selections ) ) {
		return false;
	}

	// if ANY of the pages selected in $rule_value_selections are this page, then this function returns true immediately.
	// So default to false here and if we get past this foreach statement, we return true.
	$this_url_is_in_passed_selections = false;

	foreach ( $rule_value_selections as $id => $page ) {

		if ( ! isset( $page['value'] ) ) {
			continue;
		}

		$category_id = absint( $page['value'] );

		if ( in_category( $category_id ) ) {
			return true;
		}
	}

	return $this_url_is_in_passed_selections;

}//end rule_logic_special_page_categories()


/**
 * Callbackfunction for special page tags.
 * Test if the current post being shown is in the chosen tags list.
 *
 * @param array $rule_value_selections The specific selections for this block for this type of specialPage.
 * @param array $block The current block being evaluated.
 *
 * @return bool True If the current URL is found in $rule_value_selections. False otherwise.
 */
function rule_logic_special_page_tags( $rule_value_selections, $block ) {

	// If there's no rules, then this URL is not in this block selection.
	if ( empty( $rule_value_selections ) ) {
		return false;
	}

	// if ANY of the pages selected in $rule_value_selections are this page, then this function returns true immediately.
	// So default to false here and if we get past this foreach statement, we return true.
	$this_url_is_in_passed_selections = false;

	foreach ( $rule_value_selections as $id => $page ) {

		if ( ! isset( $page['value'] ) ) {
			continue;
		}

		$tag_id = absint( $page['value'] );

		if ( has_tag( $tag_id ) ) {
			return true;
		}
	}

	return $this_url_is_in_passed_selections;

}//end rule_logic_special_page_tags()

function rule_logic_special_page_generic( $rule_value_selections, $callback ) {

}//end rule_logic_special_page_generic()
