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
    if ('@vite-client-js' === $handle || $handle === 'src-maint-js') {
        return  $tag = '<script id="' . esc_attr($handle) . '" type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
// 

function wpdocs_selectively_enqueue_admin_script($hook)
{
    if ('edit.php' !== $hook && 'post.php' !== $hook) {
        return;
    }

    echo '<script type="module">
    import RefreshRuntime from "http://localhost:3000/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
</script>';

    wp_enqueue_script('@vite-client-js', 'http://localhost:3000/@vite/client', [], null);
    wp_enqueue_script('src-maint-js', 'http://localhost:3000/src/main.tsx', [], null);
}
add_action('admin_enqueue_scripts', 'wpdocs_selectively_enqueue_admin_script');
