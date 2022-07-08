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
        global $ncmaz_redux_demo;
        if (!function_exists('ncmazFe_getIDBySlug') || empty($ncmaz_redux_demo)) {
            return $states;
        }

        if ('page' === get_post_type($post->ID)) {
            if (intval($ncmaz_redux_demo['adv-global-variable--pageNcmazAccountUrl']) === $post->ID) {
                $states[] = __('Ncmaz Edit Account Page');
            } else if (empty(get_permalink($ncmaz_redux_demo['adv-global-variable--pageNcmazAccountUrl']))) {
                if (ncmazFe_getIDBySlug('ncmaz-account') ===  $post->ID) {
                    $states[] = __('Ncmaz Edit Account Page');
                }
            }

            if (intval($ncmaz_redux_demo['adv-global-variable--pagePostSubmissionEditorUrl']) === $post->ID) {
                $states[] = __('Ncmaz Post Submission Page');
            } else if (empty(get_permalink($ncmaz_redux_demo['adv-global-variable--pagePostSubmissionEditorUrl']))) {
                if (ncmazFe_getIDBySlug('ncmaz-submission-post-editor') ===  $post->ID) {
                    $states[] = __('Ncmaz Post Submission Page');
                }
            }
        }
        return $states;
    }
}
// 
