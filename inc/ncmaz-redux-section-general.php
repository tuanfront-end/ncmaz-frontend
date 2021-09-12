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
    'title'      => esc_html__('Text Area', 'your-textdomain-here'),
    'desc'       => esc_html__('For full documentation on this field, visit: ', 'your-textdomain-here') . '<a href="https://devs.redux.io/core-fields/textarea.html" target="_blank">https://devs.redux.io/core-fields/textarea.html</a>',
    'id'         => 'opt-textarea-subsection',
    'subsection' => true,
    'fields'     => array(
        array(
            'id'       => 'textarea-example',
            'type'     => 'textarea',
            'title'    => esc_html__('Text Area Field', 'your-textdomain-here'),
            'subtitle' => esc_html__('Subtitle', 'your-textdomain-here'),
            'desc'     => esc_html__('Field Description', 'your-textdomain-here'),
            'default'  => 'Default Text',
        ),
    ),
);
Redux::set_section($opt_name, $section);
