<?php

/**
 * Plugin Name:       Ncmaz Frontend
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.5
 * Requires PHP:      7.0
 * Version:           4.1.0
 * Author:            ChisNghiax
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-frontend
 *
 */

define('_NCMAZ_FRONTEND_VERSION', '4.1.0');
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
require plugin_dir_path(__FILE__) . 'inc/ncmaz-register-widgets.php';
//  
require plugin_dir_path(__FILE__) . 'inc/ncmaz-AFC-fields.php';
// 

add_action('plugins_loaded',  function () {
    require plugin_dir_path(__FILE__) . 'inc/ncmaz-redux-sample-config.php';
    // 
    require plugin_dir_path(__FILE__) . 'inc/ncmaz-custom-wpgraphql.php';
});

// ... 


// 
// FOR END ==========
require plugin_dir_path(__FILE__) . 'inc/ncmaz-custom-hooks.php';
