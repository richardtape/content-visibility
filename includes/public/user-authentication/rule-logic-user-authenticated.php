<?php
/**
 * Ruleset callback function for User Authentication.
 *
 * @package ContentVisibility
 */

namespace RichardTape\ContentVisibility;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

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
 * Returning TRUE will mean the block will be kept.
 * Returning FALSE will mean the block will be removed.
 *
 * @param string $rule_value What the rule is set to: 'logged-in' or 'logged-out'.
 * @param string $block_visibility Whether the block should be shown or hidden if the rule is true.
 * @param array  $block The full block.
 *
 * @return bool  false if the block is to be removed. true if the block is to be potentially kept.
 */
function rule_logic_user_authenticated( $rule_value, $block_visibility, $block ) {

	// If user authenticated rules aren't set for this block, keep this block to let others decide.
	if ( empty( $rule_value ) ) {
		return true;
	}

	// Do we have someone signed in?
	$authenticated_user = ( is_user_logged_in() ) ? 'logged-in' : 'logged-out';

	switch ( $block_visibility ) {
		case 'shown':
			return (bool) ( $authenticated_user === $rule_value );
		case 'hidden':
			return (bool) ( $authenticated_user !== $rule_value );
	}

}//end rule_logic_user_authenticated()
