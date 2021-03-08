<?php
/**
 * Loader for the Content Visibility Dashboard additions.
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
class Dashboard {

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

		// Disabled for now until the add-on readmes have been parsed and the tag search works.
		add_filter( 'plugin_row_meta', array( $this, 'plugin_row_meta__add_links_to_addons' ), 10, 4 );

		// Load our Admin Settings class.
		add_action( 'init', array( $this, 'init__load_settings_class' ) );

	}//end add_hooks()

	/**
	 * Append links to install our add-ons.
	 *
	 * @param   array  $links_array      An array of the plugin's metadata.
	 * @param   string $plugin_file_name Path to the plugin file.
	 * @param   array  $plugin_data      An array of plugin data.
	 * @param   string $status           Status of the plugin.
	 *
	 * @return  array  $links_array      Potentially modified links array.
	 */
	public function plugin_row_meta__add_links_to_addons( $links_array, $plugin_file_name, $plugin_data, $status ) {

		// Ensure this is only visible to those who can install plugins.
		if ( ! current_user_can( 'install_plugins' ) ) {
			return $links_array;
		}

		// Multisite plugins have to be added in the network admin.
		if ( is_multisite() ) {
			return $links_array;
		}

		// Make sure we only add this to our plugin.
		if ( 'content-visibility/content-visibility.php' !== $plugin_file_name ) {
			return $links_array;
		}

		// Build the link to the search.
		$slug = 'contentvisibility';
		$url  = wp_nonce_url(
			add_query_arg(
				array(
					'tab'  => 'search',
					's'    => $slug,
					'type' => 'term',
				),
				admin_url( 'plugin-install.php' )
			),
			'cv-addon-install'
		);

		$row_meta = array(
			'install-cvaddons' => '<a href="' . esc_url( $url ) . '" aria-label="' . esc_attr__( 'View Add-Ons', 'content-visibility' ) . '">' . esc_html__( 'View Add-Ons', 'content-visibility' ) . '</a>',
		);

		return array_merge( $links_array, $row_meta );

	}//end plugin_row_meta__add_links_to_addons()


	/**
	 * Load our admin settings class.
	 *
	 * @return void
	 */
	public function init__load_settings_class() {

		// Load our dashboard class, this handles things like niceties on the plugins page, plugin settings etc.
		require_once plugin_dir_path( __FILE__ ) . 'class-settings.php';

		$cv_settings = new \RichardTape\ContentVisibility\Settings();
		$cv_settings->init();

	}//end init__load_settings_class()

}//end class

