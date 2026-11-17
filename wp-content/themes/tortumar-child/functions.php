<?php
/**
 * Tema hijo TortuMar SV.
 */

defined('ABSPATH') || exit;

add_action('wp_enqueue_scripts', function () {
    $uri = get_stylesheet_directory_uri();
    $version = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'tortumar-fonts',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Work+Sans:wght@400;500;600&display=swap',
        [],
        null
    );

    wp_enqueue_style('tortumar-styles', $uri . '/assets/css/styles.css', ['tortumar-fonts'], $version);

    wp_enqueue_script('tortumar-main', $uri . '/assets/js/main.js', [], $version, true);
});
