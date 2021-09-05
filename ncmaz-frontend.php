<?php

/**
 * Plugin Name:       Ncmaz Frontend
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-frontend
 *
 */

define('_NCMAZ_FRONTEND_VERSION', '1.0.0');
define('_NCMAZ_FRONTEND_PREFIX', 'ncmaz_frontend_prefix_');


$script = 'script';
$tag = '_loader_tag';
add_filter(
    $script . $tag,
    'addModuleTypeForScripts',
    10,
    3
);

function addModuleTypeForScripts($tag, $handle, $src)
{
    if ('@vite-client-js' === $handle || $handle === 'ncmaz-frontend-src-main-tsx') {
        return  $tag = '<script id="' . esc_attr($handle) . '" type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}

// --------------------------------------------------------------------------------------
function ncmaz_frontend_enqueue_admin_script($hook)
{
    if ('edit.php' !== $hook && 'post.php' !== $hook && 'widgets.php' !== $hook) {
        return;
    }

    echo '<script type="module">
    import RefreshRuntime from "http://localhost:3000/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
</script>';

    wp_enqueue_script('@vite-client-js', 'http://localhost:3000/@vite/client', [], null, true);
    wp_enqueue_script('ncmaz-frontend-src-main-tsx', 'http://localhost:3000/src/main.tsx', [], null, true);
}
// add_action('admin_enqueue_scripts', 'ncmaz_frontend_enqueue_admin_script');
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
function ncmaz_frontend_enqueue_script($hook)
{
    echo '<script type="module">
    import RefreshRuntime from "http://localhost:3000/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
</script>';

    wp_enqueue_script('@vite-client-js', 'http://localhost:3000/@vite/client', [], null, true);
    wp_enqueue_script('ncmaz-frontend-src-main-tsx', 'http://localhost:3000/src/main.tsx', [], null, true);
}
add_action('wp_enqueue_scripts', 'ncmaz_frontend_enqueue_script');
// --------------------------------------------------------------------------------------


// JAVASCRIPT
wp_enqueue_script('ncmaz-frontend-js', plugin_dir_url(__FILE__) . 'dist/js/customizer.js', array(), _NCMAZ_FRONTEND_VERSION, true);
wp_localize_script(
    'ncmaz-frontend-js',
    'frontendObject',
    array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'stylesheetDirectory' => get_template_directory_uri(),
        // 'restUrl' => get_rest_url(),
        'dateFormat' => get_option('date_format'),
        'placeholderImg' => get_template_directory_uri() . '/placeholder-small.png',
        'graphQLBasePath' => get_site_url(null, '/graphql'),
        'value2' => 'value 2',
    )
);
wp_localize_script(
    'ncmaz-frontend-js',
    'ncmazFrontendVariables',
    array(
        'pluginDir' => plugin_dir_url(__FILE__),
        'emptyStatePng' => plugin_dir_url(__FILE__) . 'public/images/empty.png'
    )
);
// 

// add_action('wp_enqueue_scripts', 'registerScripts');
function registerScripts()
{
    $dirJS = [];
    // WILL ENABLE WHEN DEPLOY BUILD PRODUCT
    if (file_exists(plugin_dir_path(__FILE__) . 'dist/assets')) {
        $dirJS = new DirectoryIterator(plugin_dir_path(__FILE__) . 'dist/assets');
    }
    foreach ($dirJS as $file) {
        // if (pathinfo($file, PATHINFO_EXTENSION) === 'js' && preg_match('/^main./', pathinfo($file, PATHINFO_FILENAME))) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'js') {
            $fullName = basename($file);
            $name = _NCMAZ_FRONTEND_PREFIX . substr(basename($fullName), 0, strpos(basename($fullName), '.'));
            wp_enqueue_script($name, plugin_dir_url(__FILE__) . 'dist/assets/' . $fullName, [], _NCMAZ_FRONTEND_VERSION, true);
        }
    }
}


// add_action('wp_enqueue_scripts', 'registerStyles');
function registerStyles()
{
    $dirCSS = [];
    // WILL ENABLE WHEN DEPLOY BUILD
    if (file_exists(plugin_dir_path(__FILE__) . 'dist/assets')) {
        $dirCSS = new DirectoryIterator(plugin_dir_path(__FILE__) . 'dist/assets');
    }

    foreach ($dirCSS as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'css') {
            $fullName = basename($file);
            $name = _NCMAZ_FRONTEND_PREFIX . substr(basename($fullName), 0, strpos(basename($fullName), '.'));
            wp_enqueue_style($name, plugin_dir_url(__FILE__) . 'dist/assets/' . $fullName, [], _NCMAZ_FRONTEND_VERSION, 'all');
        }
    }
}
