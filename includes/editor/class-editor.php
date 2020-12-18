<?php
/**
 * Loader for the Content Visibility Editor components.
 *
 * @package ContentVisibility
 */

namespace RichardTape\ContentVisibility;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main class for the editor components for Content Visibility.
 */
class Editor {

	/**
	 * Initialize ourselves.
	 *
	 * @return void
	 */
	public function init() {
		$this->add_hooks();
	}//end init()

	/**
	 * Register hooks
	 *
	 * @return void
	 */
	public function add_hooks() {

		// Add our controls to the content block editor.
		//
		// NOTE!
		// -----
		//
		// Normally, traditionally, and ideally, we would use enqueue_blocked_editor_assets in order to register our assets. However:
		// https://github.com/WordPress/gutenberg/issues/9757
		// means that due to the order in which some plugins can register, we need to add our filters suuuuper early, otherwise horrible breakage occurs.
		// So that means we need to use current_screen at the time being. (could use init but we need to use get_current_screen() later)
		// Thanks so much to Chris van Patten for helping dig through this with me.
		// add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ), 1 ); //.

		// See note above as to why we're on init here.
		add_action( 'current_screen', array( $this, 'enqueue_editor_assets' ), 1 );

		// Handle the Gutenberg widgets screen.
		if ( ! function_exists( 'gutenberg_use_widgets_block_editor' ) ) {
			return;
		}

		if ( gutenberg_use_widgets_block_editor() ) {
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_editor_assets' ) );
		}

	}//end add_hooks()

	/**
	 * Enqueue script and style assets used in the editor.
	 *
	 * @since 0.1.0
	 * @return void
	 */
	function enqueue_editor_assets() { // phpcs:ignore

		if ( ! is_admin() ) {
			return;
		}

		$screens = array(
			'post',
			'page',
			'appearance_page_gutenberg-widgets',
		);

		$screens = apply_filters( 'content_visibility_enqueue_editor_assets_screens', $screens );

		if ( ! in_array( get_current_screen()->id, array_values( $screens ), true ) ) {
			return;
		}

		// Custom action so add-ons can hook in here regardless of when this core plugin does it's bits and pieces and
		// know for sure that they are loading in the right place and don't need to look at screen names etc.
		do_action( 'content_visibility_enqueue_editor_assets' );

		wp_register_script(
			'content-visibility',
			plugins_url( '/build/index.js', dirname( dirname( __FILE__ ) ) ),
			array(
				'wp-blocks',
				'wp-i18n',
				'wp-element',
				'wp-editor',
				'wp-plugins',
				'wp-edit-post',
				'wp-dom-ready',
			),
			filemtime( plugin_dir_path( dirname( __DIR__ ) ) . 'build/index.js' ),
			false
		);

		$content_visibility_args = array( 'screen' => esc_js( get_current_screen()->id ) );

		wp_localize_script( 'content-visibility', 'ContentVisibility', $content_visibility_args );

		wp_enqueue_script( 'content-visibility' );

		wp_enqueue_style( 'content-visibility-panel', plugins_url( 'build/index.css', dirname( dirname( __FILE__ ) ) ) );

	}//end enqueue_editor_assets()

}//end class
