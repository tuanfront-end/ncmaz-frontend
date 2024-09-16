<?php

add_action('init', 'ncmazFrontend_reCaptchaV3');

function ncmazFrontend_reCaptchaV3()
{
    add_action('login_enqueue_scripts',  function () {

        global $ncmaz_redux_demo;

        if (!empty($ncmaz_redux_demo) && !empty($ncmaz_redux_demo['nc-general-settings--recaptcha-login--enable-on-wplogin'])) {

            $recaptcha_site_key = $ncmaz_redux_demo['nc-general-settings--recaptcha-login--recaptcha_site_key'];
            $recaptcha_secret_key = $ncmaz_redux_demo['nc-general-settings--recaptcha-login-recaptcha_secret_key'];

            wp_enqueue_script('ncFe-recaptchav3',  'https://www.google.com/recaptcha/api.js?render=' . $recaptcha_site_key);
            // 
            wp_register_script('ncFe-custom-recaptcha', _NCMAZ_FRONTEND_DIR_URL . 'dist/js/recaptcha.js');
            wp_localize_script('ncFe-custom-recaptcha', 'recaptcha_script_vars', array(
                'recaptcha_site_key'  => $recaptcha_site_key,
            ));
            wp_enqueue_script('ncFe-custom-recaptcha');
        }
    });
}
