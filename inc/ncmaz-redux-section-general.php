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
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--general-switch-polylang',
            'type'     => 'switch',
            'title'    => __('Active language (Polylang) in Graphql', 'ncmaz-frontend'),
            'subtitle' => __('Enable/Disable LanguageCodeEnum in Graphql. Only compatible with Polylang plugin', 'ncmaz-frontend'),
            'desc'     => __('If the theme has no need for multi-language (Polylang) then don\'t enable. <br>
             The following plugins are required to use this feature: <a href="https://vi.wordpress.org/plugins/polylang/" target="_blank" rel="noopener noreferrer">Polylang</a>, <a href="https://wordpress.org/plugins/acf-options-for-polylang/" target="_blank" rel="noopener noreferrer">ACF Options for Polylang</a> ,<a href="https://www.wpgraphql.com/extenstion-plugins/wpgraphql-polylang/" target="_blank" rel="noopener noreferrer">WP GraphQL Polylang</a> ', 'ncmaz-frontend'),
            'default'  => false,
        ],
    ),
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
    'title'      => esc_html__('Mobile Menu', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for mobile menu nav side', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--mobile-menu',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--mobile-menu-btn-foot-text',
            'type'     => 'text',
            'title'    => esc_html__('Button footer', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter text for button on footer', 'ncmaz-frontend'),
            'default'  => 'Get this theme',
        ],
        [
            'id'       => 'nc-general-settings--mobile-menu-btn-foot-href',
            'type'     => 'text',
            'title'    => esc_html__('Button footer href', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter href for button on footer', 'ncmaz-frontend'),
            'default'  => '#',
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

// ===========================SOCIALS SHARE SETTING__SUB ========================
$section = array(
    'title'      => esc_html__('Social share', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for socials share setting', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--social-share',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--multi-socials-share',
            'type'     => 'select',
            'multi'    => true,
            'title'    => __('Multi Select Socials ', 'ncmaz-frontend'),
            'subtitle' => __('Select multi Socials you want enable for share on theme', 'ncmaz-frontend'),
            'options'  => [
                'Facebook'              => 'Facebook',
                // 'Facebook-Messenger'    => 'Facebook Messenger',
                'Twitter'               => 'Twitter',
                'Telegram'              => 'Telegram',
                'Whatsapp'              => 'Whatsapp',
                'LinkedIn'              => 'LinkedIn',
                'Pinterest'              => 'Pinterest',
                'VK'              => 'VK',
                'Odnoklassniki'              => 'Odnoklassniki',
                'Reddit'              => 'Reddit',
                'Reddit'              => 'Reddit',
                'MailRu'              => 'Mail.Ru',
                'LiveJournal'              => 'LiveJournal',
                'Viber'              => 'Viber',
                'Workplace'              => 'Workplace',
                'Line'              => 'Line',
                'Weibo'              => 'Weibo',
                'Pocket'              => 'Pocket',
                'Instapaper'              => 'Instapaper',
                'Hatena'              => 'Hatena',
                'email'              => 'email',
            ],
            'default'  => array('Facebook', 'Twitter', 'Telegram', 'Whatsapp')
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
    'fields'     => array(),
);
Redux::set_section($opt_name, $section);
