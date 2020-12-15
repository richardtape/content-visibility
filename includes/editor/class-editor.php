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
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ), 1 );

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
	 * @since 1.0.0
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

		$screens = apply_filters( 'block_visibility_enqueue_editor_assets_screens', $screens );

		if ( ! in_array( get_current_screen()->id, array_values( $screens ), true ) ) {
			return;
		}

		wp_register_script(
			'block-visibility',
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
			true
		);

		$block_visibility_args = array( 'screen' => esc_js( get_current_screen()->id ) );

		wp_localize_script( 'block-visibility', 'BlockVisibility', $block_visibility_args );

		wp_enqueue_script( 'block-visibility' );

		wp_enqueue_style( 'block-visibility-panel', plugins_url( 'build/index.css', dirname( dirname( __FILE__ ) ) ) );

	}//end enqueue_editor_assets()

}//end class
