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
