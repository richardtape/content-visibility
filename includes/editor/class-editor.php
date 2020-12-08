<?php
/**
 * Loader for the Block Visibility Editor components.
 *
 * @package BlockVisbility
 */

namespace RichardTape\BlockVisibility;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main class for the editor components for Block Visibility.
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

		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ), 1 );

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

		$block_visibility_args = array( 'template' => esc_js( 'some_value' ) );

		wp_localize_script( 'block-visibility', 'BlockVisibility', $block_visibility_args );

		wp_enqueue_script( 'block-visibility' );

		wp_enqueue_style( 'block-visibility-panel', plugins_url( 'build/editor.css', dirname( dirname( __FILE__ ) ) ) );

	}//end enqueue_editor_assets()

}//end class
