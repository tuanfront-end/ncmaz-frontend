<?php

/**
 * Plugin Name:       Ncmaz Frontend
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.5
 * Requires PHP:      7.0
 * Version:           2.0.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-frontend
 *
 */

define('_NCMAZ_FRONTEND_VERSION', '1.0.0');
define('_NCMAZ_FRONTEND_DIR_URL', plugin_dir_url(__FILE__));
define('_NCMAZ_FRONTEND_DIR_PATH', plugin_dir_path(__FILE__));
define('_NCMAZ_FRONTEND_PREFIX', 'ncmaz_frontend_prefix_');
define('_NCMAZ_FRONTEND_TEXT_DOMAIN', 'ncmaz-frontend');

// 
require plugin_dir_path(__FILE__) . 'inc/ncmaz-custom-funcs.php';
// 
require plugin_dir_path(__FILE__) . 'inc/ncmaz-enqueue-scripts.php';
// 
require plugin_dir_path(__FILE__) . 'inc/ncmaz-update-views-count.php';
//  
require plugin_dir_path(__FILE__) . 'inc/ncmaz-custom-wpgraphql.php';
//  
require plugin_dir_path(__FILE__) . 'inc/ncmaz-register-widgets.php';
//  
require plugin_dir_path(__FILE__) . 'inc/ncmaz-AFC-fields.php';
//  

add_action('plugins_loaded',  function () {
    require plugin_dir_path(__FILE__) . 'inc/ncmaz-redux-sample-config.php';
});

// 
// As you are dealing with plugin settings,
// I assume you are in admin side

add_action('wp_enqueue_scripts', function () {

    wp_register_script('rest-uploader', plugins_url('/dist/js/script.js', __FILE__), ['jquery']);
    $js_vars = [
        'endpoint' => esc_url_raw(rest_url('/wp/v2/media/')),
        'nonce'    => wp_create_nonce('wp_rest'),
    ];
    wp_localize_script('rest-uploader', 'RestVars', $js_vars);
});

add_shortcode('uploader', function () {
    wp_enqueue_script('rest-uploader');
    ob_start();
?>

    <h2><?php esc_html_e('Upload a file', 'rest-uploader'); ?></h2>
    <form method="post">
        <p>
            <label for="uploader-title">
                <?php esc_html_e('Title', 'rest-uploader'); ?>:
            </label>
            <input id="uploader-title">

        </p>
        <p>
            <label for="uploader-caption">
                <?php esc_html_e('Caption', 'rest-uploader'); ?>:
            </label>
            <input id="uploader-caption">

        </p>
        <p>
            <label for="uploader-file">
                <?php esc_html_e('File', 'rest-uploader'); ?>:
            </label>
            <input id="uploader-file" type="file">
        </p>
        <button id="uploader-send"><?php esc_html_e('Send', 'rest-uploader'); ?></button>
    </form>
<?php
    $content = ob_get_contents();
    ob_end_clean();
    return $content;
});
