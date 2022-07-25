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

// An issue has been reported that any blocks registered with PHP and renders to the
// editor using the ServerSideRender component will fail due to validation error from rest API endpoint.
// 
// This is due to the default attributes were originally added on the client side only. And the server does not know they are/should exist.
// 
// The solution is to make sure that any blocks registered through PHP does also have the required attributes on the server side by override the block attributes
// when blocks are registered with PHP. The WordPress core blocks are excluded.
add_filter( 'register_block_type_args', __NAMESPACE__ . '\\add_block_default_attributes', 10, 2 );

/**
 * Fires when new blocks are registered
 * 
 * @param array $args an array of block settings
 * @param string $name the name of the block
 * 
 * @return array $args an array of modified block settings
 *
 * @since 0.2.8
 */
function add_block_default_attributes( $args, $name ) {

	$args['attributes']['contentVisibilityRules'] = array(
		'type' => 'object',
		'default' => array(
			'contentVisibilityRulesEnabled' => false,
			'userAuthenticated' => '',
		)
	);

	return $args;
}//end add_block_default_attributes()

/**
 * Load the required bits and pieces for Content Visibility.
 *
 * @return void
 */
function plugins_loaded__bv_loader() {

	if ( is_admin() ) {

		// Load our editor assets which are the main bulk of this plugin.
		require_once plugin_dir_path( __FILE__ ) . 'editor/class-editor.php';

		$bv_editor = new \RichardTape\ContentVisibility\Editor();
		$bv_editor->init();

		// Load our dashboard class, this handles things like niceties on the plugins page, plugin settings etc.
		require_once plugin_dir_path( __FILE__ ) . 'dashboard/class-dashboard.php';

		$cv_dashboard = new \RichardTape\ContentVisibility\Dashboard();
		$cv_dashboard->init();

		return;
	}

	// We're not in the admin so we load the public side of things which is the content rules parsing for the most part.
	require_once plugin_dir_path( __FILE__ ) . 'public/class-public-rules.php';

	$bv_public = new \RichardTape\ContentVisibility\Public_Rules();
	$bv_public->init();

	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\wp_enqueue_scripts__load_public_css' );

}//end plugins_loaded__bv_loader()

/**
 * Load the public css file.
 *
 * @since 0.1.7
 * @return void
 */
function wp_enqueue_scripts__load_public_css() {

	/**
	 * Filter whether to load the public rules CSS file or not.
	 *
	 * At least as of right now, this file is literally for one line of CSS and theme authors may want to include it
	 * in their own theme to prevent loading a whole file just for one little rule.
	 *
	 * @since 0.1.7
	 *
	 * @param bool  $load_public_css Should this file be loaded. Enqueued only if boolean true.
	 */
	$load_public_css = (bool) apply_filters( 'content_visibility_load_public_css', true );

	if ( true !== $load_public_css ) {
		return;
	}

	wp_enqueue_style( 'content-visibility-public', plugins_url( 'includes/public/content-visibility-public.css', dirname( __FILE__ ) ) );

}//end wp_enqueue_scripts__load_public_css()

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
			'label'    => __( '404 Error', 'content-visibility' ),
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

/**
 * An array of pages with their associated callback function which determines if the current page is of this type.
 *
 * @since 0.1.7
 * @return array associative array containining a list of pages. Keys are the ID for the page. Values
 *               are an array containing a title, and a callback function to determine if the current page is this
 *               page.
 */
function get_pages() {

	$pages_args = array(
		'post_status' => array( 'pending', 'draft', 'future', 'publish' ),
	);

	$pages_args = apply_filters( 'content_visibility_get_pages_args', $pages_args );

	$pages = \get_pages( $pages_args );

	if ( false === $pages || empty( $pages ) ) {
		return array();
	}

	$pages_data = array();

	foreach ( $pages as $id => $page ) {

		$page_id         = absint( $page->ID );
		$sanitized_title = sanitize_text_field( $page->post_title );

		$title = ( empty( $sanitized_title ) ) ? __( '[This page has no title]', 'content-visibility' ) : $sanitized_title;

		$pages_data[ $page_id ] = array(
			'label'    => $title,
			'id'       => $page_id,
			'callback' => array( 'is_page', array( $page_id ) ),
			'notes'    => '',
		);
	}

	return $pages_data;

}//end get_pages()

/**
 * An array of posts with their associated callback function which determines if the current page is of this type.
 *
 * @since 0.1.7
 * @return array associative array containining a list of posts. Keys are the ID for the post. Values
 *               are an array containing a title, and a callback function to determine if the current page is this
 *               page.
 */
function get_posts() {

	$posts_args = array(
		'post_status' => array( 'pending', 'draft', 'future', 'publish' ),
		'numberposts' => -1,
	);

	$posts_args = apply_filters( 'content_visibility_get_posts_args', $posts_args );

	$posts = \get_posts( $posts_args );

	if ( false === $posts || empty( $posts ) ) {
		return array();
	}

	$posts_data = array();

	foreach ( $posts as $id => $post ) {

		$post_id         = absint( $post->ID );
		$sanitized_title = sanitize_text_field( $post->post_title );

		$title = ( empty( $sanitized_title ) ) ? __( '[This post has no title]', 'content-visibility' ) : $sanitized_title;

		$posts_data[ $post_id ] = array(
			'label'    => $title,
			'id'       => $post_id,
			'callback' => array( 'is_post', array( $post_id ) ),
			'notes'    => '',
		);
	}

	return $posts_data;

}//end get_posts()


/**
 * An array of categories with their associated callback function which determines if the current post is in this particular category.
 *
 * @since 0.2.5
 * @return array associative array containing a list of categories. Keys are the ID of the term.
 */
function get_categories() {

	$categories_args = array(
		'hide_empty' => false,
		'orderby'    => 'name',
		'order'      => 'ASC',
	);

	$categories_args = apply_filters( 'content_visibility_get_categories_args', $categories_args );

	$categories = \get_categories( $categories_args );

	if ( false === $categories || empty( $categories ) ) {
		return array();
	}

	$categories_data = array();

	foreach ( $categories as $id => $category ) {

		$category_id     = absint( $category->term_id );
		$sanitized_title = sanitize_text_field( $category->name );

		$title = ( empty( $sanitized_title ) ) ? __( '[This category has no title]', 'content-visibility' ) : $sanitized_title;

		$categories_data[ $category_id ] = array(
			'label'    => $title,
			'id'       => $category_id,
			'callback' => array( 'in_category', array( $category_id ) ),
			'notes'    => '',
		);
	}

	return $categories_data;

}//end get_categories()


/**
 * An array of tags with their associated callback function which determines if the current post is in this particular tag.
 *
 * @since 0.2.5
 * @return array associative array containing a list of tags. Keys are the ID of the term.
 */
function get_tags() {

	$tags_args = array(
		'hide_empty' => false,
		'orderby'    => 'name',
		'order'      => 'ASC',
	);

	$tags_args = apply_filters( 'content_visibility_get_tags_args', $tags_args );

	$tags = \get_tags( $tags_args );

	if ( false === $tags || empty( $tags ) ) {
		return array();
	}

	$tags_data = array();

	foreach ( $tags as $id => $tag ) {

		$tag_id     = absint( $tag->term_id );
		$sanitized_title = sanitize_text_field( $tag->name );

		$title = ( empty( $sanitized_title ) ) ? __( '[This tag has no title]', 'content-visibility' ) : $sanitized_title;

		$tags_data[ $tag_id ] = array(
			'label'    => $title,
			'id'       => $tag_id,
			'callback' => array( 'has_tag', array( $tag_id ) ),
			'notes'    => '',
		);
	}

	return $tags_data;

}//end get_tags()
