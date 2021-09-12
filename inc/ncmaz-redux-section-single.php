<?php

// =====================================single SETTING ==================================================
$section = array(
    'title'  => esc_html__('Single page settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'     => 'nc-single-page-settings',
    'desc'   => esc_html__('All single page settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'icon'   => 'el el-home',
    'fields' => array(),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('General settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'desc'       => esc_html__('General settings for single page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'         => 'nc-single-page-settings--general',
    'subsection' => true,
    'fields'     => array(),
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('Related posts', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'desc'       => esc_html__('Related posts section', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'         => 'nc-single-page-settings--related',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-single-page-settings--related-active',
            'type'     => 'switch',
            'title'    => __('Enable/Disable related posts section', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Disable will hide related posts section on single page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => true,
        ],
        [
            'id'        => 'nc-single-page-settings--related-postPerPage',
            'type'      => 'slider',
            'title'     => __('Post per page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle'  => __('Number of post will show on section.', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'desc'      => __('Slider description. Min: 1, max: 20, step: 1, default value: 4', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            "default"   => 4,
            "min"       => 1,
            "step"      => 1,
            "max"       => 20,
            'display_value' => 'label'
        ]
    ),
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('More From author posts', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'desc'       => esc_html__('More From author posts section', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'         => 'nc-single-page-settings--moreFromAuthor',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-single-page-settings--moreFromAuthor-active',
            'type'     => 'switch',
            'title'    => __('Enable/Disable More-From-Author posts section', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Disable will hide More-From-Author posts section on single page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => true,
        ],
        [
            'id'        => 'nc-single-page-settings--moreFromAuthor-postPerPage',
            'type'      => 'slider',
            'title'     => __('Post per page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle'  => __('Number of post will show on section.', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'desc'      => __('Slider description. Min: 1, max: 20, step: 1, default value: 4', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            "default"   => 4,
            "min"       => 1,
            "step"      => 1,
            "max"       => 20,
            'display_value' => 'label'
        ]
    ),
);
Redux::set_section($opt_name, $section);
