<?php
/**
 * Block Visibility
 *
 * @package     BlockVisibility
 * @author      Richard Tape
 * @copyright   2019 Richard Tape
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Block Visibility
 * Plugin URI:  https://richardtape.com/
 * Description: Decide when, where, and to whom your blocks are visible.
 * Version:     0.1.0
 * Author:      Rich Tape
 * Author URI:  https://richardtape.com/
 * Text Domain: block-visibility
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/block-visibility.php';
