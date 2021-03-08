<?php
/**
 * Loader for the Content Visibility admin settings.
 *
 * @package ContentVisibility
 */

namespace RichardTape\ContentVisibility;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main class for the admin settings for Content Visibility.
 */
class Settings {


	/**
	 * On which screen are we putting our settings?
	 * Accessible in add-ons via \RichardTape\ContentVisibility\Settings::$screen
	 *
	 * @var string
	 */
	public static $screen = 'writing';

	/**
	 * The main settings key for content visibility site settings.
	 * Accessible in add-ons via \RichardTape\ContentVisibility\Settings::$settings_key
	 *
	 * @var string
	 */
	public static $settings_key = 'content_visibility_site_settings';

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
	 * @since 0.2.0
	 * @return void
	 */
	public function add_hooks() {

		// Register our settings.
		add_action( 'admin_init', array( $this, 'admin_init__register_settings' ) );

	}//end add_hooks()


	/**
	 * Register our settings
	 *
	 * @return void
	 */
	public function admin_init__register_settings() {

		register_setting( static::$screen, static::$settings_key );

		// The core plugin (right now at least) doesn't require any settings. So we'll default to NOT having one (which is very much my preference)
		// Add-ons can override this if they wish.
		$settings_section_required = apply_filters( 'content_visibility_settings_section_is_required', false );

		if ( false === $settings_section_required ) {
			return;
		}

		add_settings_section( 'content_visibility_site_settings', 'Content Visibility', array( $this, 'settings_section_markup' ), static::$screen );

	}//end admin_init__register_settings()


	/**
	 * Echos out content at the top of the section (between heading and fields).
	 *
	 * @param array $args Display arguments.
	 * @return void
	 */
	public function settings_section_markup( $args ) {

		do_action( 'content_visibility_settings_section', $args );

	}//end settings_section_markup()

}//end class
