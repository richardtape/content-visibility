<?php
/**
 * Content Visibility
 *
 * @package     ContentVisibility
 * @author      Richard Tape
 * @copyright   2019 Richard Tape
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Content Visibility
 * Plugin URI:  https://richardtape.com/content-visibility/
 * Description: Decide when, where, and to whom your blocks are visible.
 * Version:     0.1.0
 * Author:      Rich Tape
 * Author URI:  https://richardtape.com/
 * Text Domain: content-visibility
 * License:     GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/content-visibility.php';