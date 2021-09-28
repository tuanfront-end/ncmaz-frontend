<?php


// =====================================GENERAL SETTING ==================================================
$section = array(
    'title'  => esc_html__('General settings', 'ncmaz-frontend'),
    'id'     => 'nc-general-settings',
    'desc'   => esc_html__('All general settings', 'ncmaz-frontend'),
    'icon'   => 'el el-home',
    'fields' => array(),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('General settings', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting general setting', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--general',
    'subsection' => true,
    'fields'     => array(),
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('Header', 'ncmaz-frontend'),
    'desc'       => esc_html__('Desc for header settings', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--header',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--header-media-logo',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('Logo image', 'ncmaz-frontend'),
            'desc'     => __('Main logo for theme', 'ncmaz-frontend'),
            'subtitle' => __('Upload any media using the WordPress native uploader', 'ncmaz-frontend'),
            'default'  => array(
                'url' => 'https://s.wordpress.org/style/images/codeispoetry.png'
            ),
        ],
        [
            'id'       => 'nc-general-settings--header-media-logo-darkmode',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('Logo darkmode', 'ncmaz-frontend'),
            'desc'     => __('Logo image will show on darkmode instead for default logo', 'ncmaz-frontend'),
            'subtitle' => __('Upload any media using the WordPress native uploader', 'ncmaz-frontend'),
            'default'  => array(
                'url' => 'https://s.wordpress.org/style/images/codeispoetry.png'
            ),
        ],
        [
            'id'       => 'nc-general-settings--header-switch-enableDarkmode',
            'type'     => 'switch',
            'title'    => __('Show/Hide darkmode switch', 'ncmaz-frontend'),
            'subtitle' => __('Disable will hide button switch darkmode on header', 'ncmaz-frontend'),
            'default'  => true,
        ],
    ),
);
Redux::set_section($opt_name, $section);

// ===========================SOCIALS SETTING__SUB2 SOCIALS ========================
$section = array(
    'title'      => esc_html__('Social Login', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for socials login setting', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--nextend-social-login',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--nextend-social-login-facebook',
            'type'     => 'text',
            'title'    => esc_html__('Facebook Login Url', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter facebook login url on usage nextend settings', 'ncmaz-frontend'),
            'default'  => '#',
        ],
        [
            'id'       => 'nc-general-settings--nextend-social-login-google',
            'type'     => 'text',
            'title'    => esc_html__('Google Login Url', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter Google login url on usage nextend settings', 'ncmaz-frontend'),
            'default'  => '#',
        ],
        [
            'id'       => 'nc-general-settings--nextend-social-login-twitter',
            'type'     => 'text',
            'title'    => esc_html__('Twitter Login Url', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter twitter login url on usage nextend settings', 'ncmaz-frontend'),
            'default'  => '#',
        ],


    ),
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Frontend translate', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting translate for frontend', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--translate',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--translate-js-editor',
            'type'     => 'ace_editor',
            'title'    => __('Translate JS code', 'ncmaz-frontend'),
            'subtitle' => __('Change your translate text', 'ncmaz-frontend'),
            'mode'     => 'javascript',
            'theme'    => 'monokai',
            'desc'     => 'Possible modes can be found at https://ace.c9.io/.',
            'options'   => [
                'minLines' => 22,
                'maxLines' => 50
            ],
            'default'  => "{
                \"nothingWeFound\": \"Nothing we found!\",
                \"all\": \"All\",
                \"viewAll\": \"View All\",
                \"articles\": \"Articles\",
                \"showMeMore\": \"Show me more\",
                \"showAllPhotos\": \"Show all photos\"
            }"
        ],
    ),
);
Redux::set_section($opt_name, $section);
