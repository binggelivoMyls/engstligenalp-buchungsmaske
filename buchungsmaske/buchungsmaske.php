<?php
/**
 * Plugin Name:       Buchungsmaske Engstligenalp
 * Description:       WP-Plugin for Engstligenalp Buchungsmaske
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            Ivo Binggeli
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       searchbar
 *
 * @package           create-block
 */

function create_block_searchbar_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_searchbar_block_init' );

add_action( 'wp_head', function () { ?>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	
	
	
	<?php } );
?>