<?php

// =====================================single SETTING ==================================================
$section = array(
    'title'  => esc_html__('Single page settings', 'ncmaz-frontend'),
    'id'     => 'nc-single-page-settings',
    'desc'   => esc_html__('All single page settings', 'ncmaz-frontend'),
    'icon'   => 'el el-home',
    'fields' => array(),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('General settings', 'ncmaz-frontend'),
    'desc'       => esc_html__('General settings for single page', 'ncmaz-frontend'),
    'id'         => 'nc-single-page-settings--general',
    'subsection' => true,
    'fields'     => [
        [
            'id'       => 'nc-single-page-settings--general-single-widget-opt',
            'type'     => 'radio',
            'title'    => esc_html__('Sidebar on single pages', 'ncmaz-frontend'),
            'data'  => array(
                'enable'    => 'Enable sidebar in all single pages',
                'disable'   => 'Disable sidebar in all single pages',
                'default'   => 'Default - Customization inside every single page'
            ),
            'default' => 'default'
        ],
        [
            'id'       => 'nc-single-page-settings--general-single-stype-opt',
            'type'     => 'radio',
            'title'    => esc_html__('Single page stype', 'ncmaz-frontend'),
            'data'  => array(
                '1'         => 'Style 1',
                '2'         => 'Style 2',
                '3'         => 'Style 3',
                '1_required'         => 'Style 1 - Required (Apply to all posts, and custom fields in each post will not work)',
                '2_required'         => 'Style 2 - Required (Apply to all posts, and custom fields in each post will not work)',
                '3_required'         => 'Style 3 - Required (Apply to all posts, and custom fields in each post will not work)',
            ),
            'default' => '1'
        ],
        [
            'id'       => 'nc-single-page-settings--general-switch-count-views',
            'type'     => 'switch',
            'title'    => esc_html__('Post view count feature', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Enable/Disable the post view count feature', 'ncmaz-frontend'),
            'default'  => true,
        ],
        [
            'id'       => 'nc-single-page-settings--general-switch-video-autoPlay',
            'type'     => 'switch',
            'title'    => esc_html__('Auto play video on post type video', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Enable/Disable auto play on post type video', 'ncmaz-frontend'),
            'default'  => true,
        ],
    ],
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('Related posts', 'ncmaz-frontend'),
    'desc'       => esc_html__('Related posts section', 'ncmaz-frontend'),
    'id'         => 'nc-single-page-settings--related',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-single-page-settings--related-active',
            'type'     => 'switch',
            'title'    => __('Enable/Disable related posts section', 'ncmaz-frontend'),
            'subtitle' => __('Disable will hide related posts section on single page', 'ncmaz-frontend'),
            'default'  => true,
        ],
        [
            'id'        => 'nc-single-page-settings--related-postPerPage',
            'type'      => 'slider',
            'title'     => __('Post per page', 'ncmaz-frontend'),
            'subtitle'  => __('Number of post will show on section.', 'ncmaz-frontend'),
            'desc'      => __('Slider description. Min: 1, max: 20, step: 1, default value: 4', 'ncmaz-frontend'),
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
    'title'      => esc_html__('More From author posts', 'ncmaz-frontend'),
    'desc'       => esc_html__('More From author posts section', 'ncmaz-frontend'),
    'id'         => 'nc-single-page-settings--moreFromAuthor',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-single-page-settings--moreFromAuthor-active',
            'type'     => 'switch',
            'title'    => __('Enable/Disable More-From-Author posts section', 'ncmaz-frontend'),
            'subtitle' => __('Disable will hide More-From-Author posts section on single page', 'ncmaz-frontend'),
            'default'  => true,
        ],
        [
            'id'        => 'nc-single-page-settings--moreFromAuthor-postPerPage',
            'type'      => 'slider',
            'title'     => __('Post per page', 'ncmaz-frontend'),
            'subtitle'  => __('Number of post will show on section.', 'ncmaz-frontend'),
            'desc'      => __('Slider description. Min: 1, max: 20, step: 1, default value: 4', 'ncmaz-frontend'),
            "default"   => 4,
            "min"       => 1,
            "step"      => 1,
            "max"       => 20,
            'display_value' => 'label'
        ]
    ),
);
Redux::set_section($opt_name, $section);
