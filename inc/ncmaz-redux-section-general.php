<?php


// =====================================GENERAL SETTING ==================================================
$section = array(
    'title'  => esc_html__('General settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'     => 'nc-general-settings',
    'desc'   => esc_html__('All general settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'icon'   => 'el el-home',
    'fields' => array(),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('Header', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'desc'       => esc_html__('Desc for header settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'         => 'nc-general-settings--header',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--header-media-logo',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('Logo image', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'desc'     => __('Main logo for theme', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Upload any media using the WordPress native uploader', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => array(
                'url' => 'https://s.wordpress.org/style/images/codeispoetry.png'
            ),
        ],
        [
            'id'       => 'nc-general-settings--header-media-logo-darkmode',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('Logo darkmode', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'desc'     => __('Logo image will show on darkmode instead for default logo', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Upload any media using the WordPress native uploader', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => array(
                'url' => 'https://s.wordpress.org/style/images/codeispoetry.png'
            ),
        ],
        [
            'id'       => 'nc-general-settings--header-switch-enableDarkmode',
            'type'     => 'switch',
            'title'    => __('Show/Hide darkmode switch', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Disable will hide button switch darkmode on header', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => true,
        ],
    ),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB2 SOCIALS ========================
$section = array(
    'title'      => esc_html__('Mobile sidebar menu', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'desc'       => esc_html__('All setting for Mobile sidebar menu', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'         => 'nc-general-settings--mobile-menu',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--mobile-menu-btn-foot-text',
            'type'     => 'text',
            'title'    => esc_html__('Button footer', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle'    => esc_html__('Enter text for button on footer menu', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => 'Default Text',
        ],
        [
            'id'       => 'nc-general-settings--mobile-menu-btn-foot-link',
            'type'     => 'text',
            'title'    => esc_html__('Button footer link', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => '#',
        ],

    ),
);
Redux::set_section($opt_name, $section);
