<?php
/**
 * Main loader file for Content Visibility.
 *
 * @package ContentVisibility
 */

namespace RichardTape\ContentVisibility;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'plugins_loaded', __NAMESPACE__ . '\\plugins_loaded__bv_loader' );

/**
 * Load the required bits and pieces for Content Visibility.
 *
 * @return void
 */
function plugins_loaded__bv_loader() {

	if ( is_admin() ) {

		require_once plugin_dir_path( __FILE__ ) . 'editor/class-editor.php';

		$bv_editor = new \RichardTape\ContentVisibility\Editor();
		$bv_editor->init();

		return;
	}

	require_once plugin_dir_path( __FILE__ ) . 'public/class-public-rules.php';

	$bv_public = new \RichardTape\ContentVisibility\Public_Rules();
	$bv_public->init();

}//end plugins_loaded__bv_loader()

/**
 * An array of special pages; things like the 404, a search results page, a date archive etc. with their
 * associated callback function which determines if the current page is of this type.
 *
 * @since 0.1.6
 * @return array associative array containining a list of special pages. Keys are a slug for the special page. Values
 *               are an array containing a title, and a callback function to determine if the current page is this
 *               type of special page.
 */
function get_special_pages() {

	/**
		* Do we do a generic 'single' or do we be more specific?
		*
		* See: https://developer.wordpress.org/themes/basics/conditional-tags/
	*/

	return array(
		'404'        => array(
			'label'    => __( '404 Page Not Found', 'content-visibility' ),
			'notes'    => __( 'The error page when someone goes to a URL that does not exist on your site.', 'content-visibility' ),
			'callback' => array( 'is_404' ),
			'icon'     => 'no',
			'keyValue' => '404',
		),
		'search'     => array(
			'label'    => __( 'Search Results', 'content-visibility' ),
			'notes'    => __( 'The page shown when someone searches something on your site.', 'content-visibility' ),
			'callback' => array( 'is_search' ),
			'icon'     => 'search',
			'keyValue' => 'search',
		),
		'date'       => array(
			'label'    => __( 'Date Archive', 'content-visibility' ),
			'notes'    => __( 'When someone looks at a time, day, week, month, or year listing of the posts on your site.', 'content-visibility' ),
			'callback' => array( 'is_date' ),
			'icon'     => 'calendar-alt',
			'keyValue' => 'date',
		),
		'front-page' => array(
			'label'    => __( 'Front Page', 'content-visibility' ),
			'notes'    => __( 'When the front page of your site is being displayed, regardless of whether that is your blog (WordPress default) or a static page.', 'content-visibility' ),
			'callback' => array( 'is_front_page' ),
			'icon'     => 'slides',
			'keyValue' => 'front-page',
		),
		'home'       => array(
			'label'    => __( 'Blog Home Page', 'content-visibility' ),
			'notes'    => __( 'When the blog home page is being displayed. By default this is the home page in WordPress, but if you have your home page set to be a static page (settings > reading) then this will only be when your blog page is being shown.', 'content-visibility' ),
			'callback' => array( 'is_home' ),
			'icon'     => 'admin-home',
			'keyValue' => 'home',
		),
		'page'       => array(
			'label'    => __( 'Any Page', 'content-visibility' ),
			'notes'    => __( 'Any content that is a Page (not a post or custom post type)', 'content-visibility' ),
			'callback' => array( 'is_page' ),
			'icon'     => 'admin-page',
			'keyValue' => 'page',
		),
		'post'       => array(
			'label'    => __( 'Any Post', 'content-visibility' ),
			'notes'    => __( 'Any content that is a Post', 'content-visibility' ),
			'callback' => array( 'is_singular', array( 'post' ) ),
			'icon'     => 'admin-post',
			'keyValue' => 'post',
		),
		'category'   => array(
			'label'    => __( 'Category Archive', 'content-visibility' ),
			'notes'    => __( 'When someone looks at a list of posts that are in a certain category.', 'content-visibility' ),
			'callback' => array( 'is_category' ),
			'icon'     => 'category',
			'keyValue' => 'category',
		),
		'tag'        => array(
			'label'    => __( 'Tag Archive', 'content-visibility' ),
			'notes'    => __( 'When someone looks at a list of posts that are have a tag.', 'content-visibility' ),
			'callback' => array( 'is_tag' ),
			'icon'     => 'tag',
			'keyValue' => 'tag',
		),
	);

}//end get_special_pages()
