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

function daterangepicker_external_script() {
    wp_enqueue_script(
        'daterangepicker-script', // Eindeutiger Name für das externe Skript
        'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js', // URL zum externen Skript
        array(), // Keine Abhängigkeiten für das externe Skript
        '1.0.0', // Versionsnummer
        false // Im Header laden
    );
}

add_action('wp_enqueue_scripts', 'daterangepicker_external_script');

function buchungsmask_script() {
    wp_enqueue_script(
        'buchungsmask-script', // Eindeutiger Name für dein Skript
        plugin_dir_url(__FILE__) . 'js/buchungsmask.js', // Pfad zur JavaScript-Datei
        array('jquery'), // Abhängigkeiten
        '1.0.0', // Versionsnummer
        true // Im Footer laden
    );
}

add_action('wp_enqueue_scripts', 'buchungsmask_script');

add_action( 'wp_head', function () { ?>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<style>
		.form-label {
			color: #f8f9fa !important;
		}

		.displaynone{
			display: none;
		}

		.btn-searchbox {
			display: none;
		}
		
		.form-control:focus {
			color: unset;
		}

		.searchBox input, .searchBox select{
			background-color: unset;
		}
	</style>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
<?php } ); ?>
