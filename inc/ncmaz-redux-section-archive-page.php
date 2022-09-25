<?php

// =====================================single SETTING ==================================================
$section = array(
    'title'  => esc_html__('Archive page settings', 'ncmaz-frontend'),
    'id'     => 'nc-archive-page-settings',
    'desc'   => esc_html__('All Archive page settings', 'ncmaz-frontend'),
    'icon'   => 'el el-home',
    'fields' => array(),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('General settings', 'ncmaz-frontend'),
    'desc'       => esc_html__('General settings for Archive page', 'ncmaz-frontend'),
    'id'         => 'nc-archive-page-settings--general',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-archive-page-settings--authorPageCoverImgDefault',
            'type'     => 'media',
            'url'      => true,
            'title'    => esc_html__('Cover image default author page', 'ncmaz-frontend'),
            'subtitle' => esc_html__('If the user\'s cover picture is not set, it will be displayed as a placeholder.', 'ncmaz-frontend'),
            'default'  => array(
                'url' => 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ),
        ],
        [
            'id'       => 'nc-archive-page-settings--archivePageCoverImgDefault',
            'type'     => 'media',
            'url'      => true,
            'title'    => esc_html__('Cover image default archive page', 'ncmaz-frontend'),
            'subtitle' => esc_html__('If the terms cover picture is not set, it will be displayed as a placeholder.', 'ncmaz-frontend'),
            'default'  => array(
                'url' => 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ),
        ],

    ),
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('Section Trending Categories', 'ncmaz-frontend'),
    'desc'       => esc_html__('Section grid categories bellow posts', 'ncmaz-frontend'),
    'id'         => 'nc-archive-page-settings--section-top10-categories',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-switch-toggle',
            'type'     => 'switch',
            'title'    => __('Show/Hide section', 'ncmaz-frontend'),
            'subtitle' => __('Look, it\'s on!', 'ncmaz-frontend'),
            'default'  => true,
        ],
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-only-category-page',
            'type'     => 'switch',
            'title'    => __('Show only category page', 'ncmaz-frontend'),
            'subtitle' => __('Only show on category page', 'ncmaz-frontend'),
            'desc'      => __('If enable then other archive pages (eg: tag, author, date ...) will hidden this section', 'ncmaz-frontend'),
            'default'  => true,
        ],
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-select-orderby',
            'type'     => 'select',
            'title'    => __('Select OrderBy', 'ncmaz-frontend'),
            'subtitle' => __('Select OrderBy filter for section', 'ncmaz-frontend'),
            'desc'      => __('Is categories child only for category archive page, more archive page will default orderBy Count', 'ncmaz-frontend'),
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
            'title'     => __('Number categories', 'ncmaz-frontend'),
            "default"   => 10,
            "min"       => 1,
            "step"      => 1,
            "max"       => 20,
            'display_value' => 'label'
        ],
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-heading',
            'type'     => 'text',
            'title'    => __('Heading', 'ncmaz-frontend'),
            'default'  => 'Top trending topics',
        ],
        [
            'id'       => 'nc-archive-page-settings--section-top10-categories-sub-heading',
            'type'     => 'text',
            'title'    => __('Sub heading', 'ncmaz-frontend'),
            'default'  => 'Discover over 100 topics',
        ]

    ),
);
Redux::set_section($opt_name, $section);

// 
// 
//
$section = array(
    'title'      => esc_html__('Search page settings', 'ncmaz-frontend'),
    'desc'       => esc_html__('Settings for search page', 'ncmaz-frontend'),
    'id'         => 'nc-search-page-settings',
    'subsection' => true,
    'fields'     => array(
        [
            'id'            => 'nc-search-page-settings--media-background',
            'type'          => 'media',
            'url'           => true,
            'title'         => __('Header Background Image', 'ncmaz-frontend'),
            'subtitle'      => __('Upload image for header background on search page', 'ncmaz-frontend'),
            'default'       => array(
                'url' => 'https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ),
        ],
        [
            'id' => 'nc-search-page-settings--multi-text-suggestions',
            'type' => 'multi_text',
            'title' => __('Multi Text Option - Lists Suggestions', 'ncmaz-frontend'),
            'subtitle' => __('Enter Lists Suggestions text for search page', 'ncmaz-frontend'),
        ]
    ),
);
Redux::set_section($opt_name, $section);
