<?php

// =====================================single SETTING ==================================================
$section = array(
    'title'  => esc_html__('Archive page settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'     => 'nc-archive-page-settings',
    'desc'   => esc_html__('All Archive page settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'icon'   => 'el el-home',
    'fields' => array(),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('General settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'desc'       => esc_html__('General settings for Archive page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'         => 'nc-archive-page-settings--general',
    'subsection' => true,
    'fields'     => array(),
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('Section Trending Categories', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'desc'       => esc_html__('Section grid categories bellow posts', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'         => 'nc-archive-page-settings--section-top10-categories',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-switch-toggle',
            'type'     => 'switch',
            'title'    => __('Show/Hide section', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Look, it\'s on!', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => true,
        ],
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-only-category-page',
            'type'     => 'switch',
            'title'    => __('Show only category page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Only show on category page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'desc'      => __('If enable then other archive pages (eg: tag, author, date ...) will hidden this section', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => true,
        ],
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-select-orderby',
            'type'     => 'select',
            'title'    => __('Select OrderBy', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Select OrderBy filter for section', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'desc'      => __('Is categories child only for category archive page, more archive page will default orderBy Count', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'options'  => array(
                'count'         => 'OrderBy Count',
                'term_order'    => 'OrderBy Term order',
                'is_child'      => 'Is categories child of this category (only for category page)'
            ),
            'default'  => 'count',
        ],
        [
            'id'        => 'nc-archive-page-settings--section-top10-categories-number-items',
            'type'      => 'slider',
            'title'     => __('Number categories', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            "default"   => 10,
            "min"       => 1,
            "step"      => 1,
            "max"       => 20,
            'display_value' => 'label'
        ],
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-heading',
            'type'     => 'text',
            'title'    => __('Heading', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => 'Top trending topics',
        ],
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-sub-heading',
            'type'     => 'text',
            'title'    => __('Heading', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'default'  => 'Discover over 100 topics',
        ]

    ),
);
Redux::set_section($opt_name, $section);

// 
// 
//
$section = array(
    'title'      => esc_html__('Search page settings', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'desc'       => esc_html__('Settings for search page', _NCMAZ_FRONTEND_TEXT_DOMAIN),
    'id'         => 'nc-search-page-settings',
    'subsection' => true,
    'fields'     => array(
        [
            'id' => 'nc-search-page-settings--multi-text-suggestions',
            'type' => 'multi_text',
            'title' => __('Multi Text Option - Lists Suggestions', _NCMAZ_FRONTEND_TEXT_DOMAIN),
            'subtitle' => __('Enter Lists Suggestions text for search page', _NCMAZ_FRONTEND_TEXT_DOMAIN),

        ]
    ),
);
Redux::set_section($opt_name, $section);
