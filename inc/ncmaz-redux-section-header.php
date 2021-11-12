<?php

// =====================================single SETTING ==================================================
$section = array(
    'title'  => esc_html__('Header settings', 'ncmaz-frontend'),
    'id'     => 'nc-header-settings',
    'desc'   => esc_html__('All Header settings', 'ncmaz-frontend'),
    'icon'   => 'el-icon-cogs',
    'fields' => array(),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('General settings', 'ncmaz-frontend'),
    'desc'       => esc_html__('General settings for header', 'ncmaz-frontend'),
    'id'         => 'nc-header-settings--general',
    'subsection' => true,
    'fields'     => [
        [
            'id'       => 'nc-header-settings--general--toggle-signIn-btn',
            'type'     => 'switch',
            'title'    => __('Toggle SignIn/SignUp button', 'ncmaz-frontend'),
            'subtitle' => __('Enable/Disable SignIn/SignUp button on header', 'ncmaz-frontend'),
            'default'  => true,
        ],
    ],
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('Account Dropdown', 'ncmaz-frontend'),
    'desc'       => esc_html__('Setting menus on Account Dropdown', 'ncmaz-frontend'),
    'id'         => 'nc-header-settings--account-dropdown',
    'subsection' => true,
    'fields'     => array(
        [
            'title'      => esc_html__('Menu 1', 'ncmaz-frontend'),
            'subtitle'      => esc_html__('Enter Name, Url and Icon of menu 1', 'ncmaz-frontend'),
            'id'       => 'nc-header-settings--account-dropdown--menu-1',
            'type' => 'text',
            'data' => array(
                'name' => 'Name',
                'url' => 'Url',
                'icon' => 'Icon',
            )
        ],
        [
            'title'      => esc_html__('Menu 2', 'ncmaz-frontend'),
            'subtitle'      => esc_html__('Enter Name, Url and Icon of menu 2', 'ncmaz-frontend'),
            'id'       => 'nc-header-settings--account-dropdown--menu-2',
            'type' => 'text',
            'data' => array(
                'name' => 'Name',
                'url' => 'Url',
                'icon' => 'Icon',
            )
        ],
        [
            'title'      => esc_html__('Menu 3', 'ncmaz-frontend'),
            'subtitle'      => esc_html__('Enter Name, Url and Icon of menu 3', 'ncmaz-frontend'),
            'id'       => 'nc-header-settings--account-dropdown--menu-3',
            'type' => 'text',
            'data' => array(
                'name' => 'Name',
                'url' => 'Url',
                'icon' => 'Icon',
            )
        ],
        [
            'title'      => esc_html__('Menu 4', 'ncmaz-frontend'),
            'subtitle'      => esc_html__('Enter Name, Url and Icon of menu 4', 'ncmaz-frontend'),
            'id'       => 'nc-header-settings--account-dropdown--menu-4',
            'type' => 'text',
            'data' => array(
                'name' => 'Name',
                'url' => 'Url',
                'icon' => 'Icon',
            )
        ],
        [
            'title'      => esc_html__('Menu Foot 1', 'ncmaz-frontend'),
            'subtitle'      => esc_html__('Enter Name, Url and Icon of menu foot 1', 'ncmaz-frontend'),
            'id'       => 'nc-header-settings--account-dropdown--menu-foot-1',
            'type' => 'text',
            'data' => array(
                'name' => 'Name',
                'url' => 'Url',
                'icon' => 'Icon',
            )
        ],
        [
            'title'      => esc_html__('Menu Foot 2', 'ncmaz-frontend'),
            'subtitle'      => esc_html__('Enter Name, Url and Icon of menu foot 2', 'ncmaz-frontend'),
            'id'       => 'nc-header-settings--account-dropdown--menu-foot-2',
            'type' => 'text',
            'data' => array(
                'name' => 'Name',
                'url' => 'Url',
                'icon' => 'Icon',
            )
        ],

    ),
);
Redux::set_section($opt_name, $section);
