<?php

/**
 * Activate the plugin.
 */
register_activation_hook(__FILE__, 'ncmazFrontend_create_post_submission_page');
if (!function_exists('ncmazFrontend_create_post_submission_page')) {
    function ncmazFrontend_create_post_submission_page()
    {

        $oPageSubmission = get_page_by_path('ncmaz-submission-post-editor', OBJECT, 'page');
        $oPageAccount = get_page_by_path('ncmaz-account', OBJECT, 'page');

        if (empty($oPageSubmission)) {
            $my_post = array(
                'post_title'    => 'ncmaz-submission-post-editor',
                'post_status'   => 'publish',
                'post_type'     => 'page',
            );
            wp_insert_post($my_post);
        }
        if (empty($oPageAccount)) {
            $my_post = array(
                'post_title'    => 'ncmaz-account',
                'post_status'   => 'publish',
                'post_type'     => 'page',
            );
            wp_insert_post($my_post);
        }
    };
}

//  HIDE ADMIN BAR
add_action('wp', 'ncmazFrontend_maybe_hide_admin_bar');
if (!function_exists('ncmazFrontend_maybe_hide_admin_bar')) {
    function ncmazFrontend_maybe_hide_admin_bar()
    {
        if (!current_user_can('manage_options')) {
            add_filter('show_admin_bar', '__return_false');
        }
    }
}


// SHOW POST STATE FOR NCMAZ REACT-EDITOR PAGE
add_filter('display_post_states', 'ncmazFe_custom_post_states', 10, 2);
if (!function_exists('ncmazFe_custom_post_states')) {
    function ncmazFe_custom_post_states($states, $post)
    {
        $currentSpecificPage = checkPageNcmazAccountOrPostSubmissionEditor($post->ID);
        if (empty($currentSpecificPage)) {
            return $states;
        }
        if ($currentSpecificPage === "pageNcmazAccountUrl") {
            $states[] = __('Ncmaz Edit Account Page');
        }
        if ($currentSpecificPage === "pagePostSubmissionEditorUrl") {
            $states[] = __('Ncmaz Post Submission Page');
        }

        return $states;
    }
}

// NOTICES POLYLANG PLUGIN ACTIVE
add_action('admin_notices', 'ncmazFe_admin_notice_polylang_plugin_active__error');
function ncmazFe_admin_notice_polylang_plugin_active__error()
{
    if (defined('POLYLANG_VERSION') && defined('WPGRAPHQL_POLYLANG')) {
        return;
    }
    if (!defined('POLYLANG_VERSION') && !defined('WPGRAPHQL_POLYLANG')) {
        return;
    }

?>
    <div class="notice notice-error is-dismissible">
        <p><?php _e('You need to activate both plugins together to use multiple languages. If not, deactivate both', 'ncmaz-frontend'); ?></p>
        <p>
            <a href="https://wordpress.org/plugins/polylang/" target="_blank" rel="noopener noreferrer">
                Polylang
            </a> and
            <a href="https://www.wpgraphql.com/extenstion-plugins/wpgraphql-polylang/" target="_blank" rel="noopener noreferrer">
                WP GraphQL Polylang
            </a>
        </p>
    </div>
    <?php
}

// 

// ADD THEME STYLE RADIUS FOR BODY CLASS
add_filter('body_class', function ($classes) {
    global $ncmaz_redux_demo;
    if (
        empty($ncmaz_redux_demo['nc-general-settings--general-theme-radius'])
        || $ncmaz_redux_demo['nc-general-settings--general-theme-radius'] === 'DEFAULT'
    ) {
        return $classes;
    }
    $radiusClass = ' ncmaztheme-' . $ncmaz_redux_demo['nc-general-settings--general-theme-radius'] . '-radius ';
    return array_merge($classes, array($radiusClass));
});

// ADD THEME STYLE FONTS FOR HEAD
add_action('wp_head', 'ncmazFe_hook_fonts_css');
function ncmazFe_hook_fonts_css()
{
    global $ncmaz_redux_demo;
    if (empty($ncmaz_redux_demo['nc-general-settings--general-theme-font-display'])) {
    ?>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
    <?php
        // Exit here!
        return;
    }

    $themeFontDisplay = $ncmaz_redux_demo['nc-general-settings--general-theme-font-display'];
    $themeFontBody = $ncmaz_redux_demo['nc-general-settings--general-theme-font-body'];
    ?>
    <style>
        body {
            --font-display: <?php echo $themeFontDisplay['font-family']; ?>;
            --font-body: <?php echo $themeFontBody['font-family']; ?>;
        }
    </style>
    <?php
}
// ADD THEME STYLE COLOR FOR HEAD
add_action('wp_head', 'ncmazFe_hook_colors_css');
function ncmazFe_hook_colors_css()
{
    global $ncmaz_redux_demo;
    if (
        !isset($ncmaz_redux_demo['nc-general--theme-color---pre-built-mode'])
        || !function_exists('ncmazFe_hex2rgba')
    ) {
        return;
    }

    // SELECT PRE-BULD COLOR 
    if (boolval($ncmaz_redux_demo['nc-general--theme-color---pre-built-mode'])) {
        if (
            empty($ncmaz_redux_demo['nc-general--theme-color--pre-built-palette'])
            || $ncmaz_redux_demo['nc-general--theme-color--pre-built-palette'] === "DEFAULT"
        ) {
            return;
        } else {
            add_filter('body_class', function ($classes) {
                global $ncmaz_redux_demo;
                return array_merge($classes, array($ncmaz_redux_demo['nc-general--theme-color--pre-built-palette']));
            });
        }
        // CUSTOMIZE PRIMARY COLOR
    } else {
        if (empty($ncmaz_redux_demo['nc-general--theme-color--primary-hex'])) {
            return;
        }
        $rgb = ncmazFe_hex2rgba($ncmaz_redux_demo['nc-general--theme-color--primary-hex']);
    ?>
        <style>
            body {
                --c-primary-50: var(--c-neutral-50);
                --c-primary-100: var(--c-neutral-100);
                --c-primary-200: <?php echo $rgb; ?>;
                --c-primary-300: <?php echo $rgb; ?>;
                --c-primary-400: <?php echo $rgb; ?>;
                --c-primary-500: <?php echo $rgb; ?>;
                --c-primary-600: <?php echo $rgb; ?>;
                --c-primary-700: <?php echo $rgb; ?>;
                --c-primary-800: <?php echo $rgb; ?>;
                --c-primary-900: <?php echo $rgb; ?>;
                /*  */
                --c-secondary-50: var(--c-neutral-50);
                --c-secondary-100: var(--c-neutral-100);
                --c-secondary-200: <?php echo $rgb; ?>;
                --c-secondary-300: <?php echo $rgb; ?>;
                --c-secondary-400: <?php echo $rgb; ?>;
                --c-secondary-500: <?php echo $rgb; ?>;
                --c-secondary-600: <?php echo $rgb; ?>;
                --c-secondary-700: <?php echo $rgb; ?>;
                --c-secondary-800: <?php echo $rgb; ?>;
                --c-secondary-900: <?php echo $rgb; ?>;
            }
        </style>
<?php
    }
}
