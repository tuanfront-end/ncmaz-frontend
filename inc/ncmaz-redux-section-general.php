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
        [
            'id'       => 'nc-general-settings--general-default-theme-mode',
            'type'     => 'button_set',
            'title'    => esc_html__('Set theme-mode default', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Select the default mode of the theme', 'ncmaz-frontend'),
            'desc'     => esc_html__('The default mode will apply to first-time visitors or old visitors who have never clicked to the switch between modes.', 'ncmaz-frontend'),
            'options' => array(
                'light' => 'Light mode',
                'dark' => 'Dark mode',
            ),
            'default' => 'light'
        ],
        [
            'id'       => 'nc-general-settings--general-theme-radius',
            'type'     => 'radio',
            'title'    => esc_html__('Select theme radius level', 'ncmaz-frontend'),
            'subtitle' => esc_html__('When choosing the radius level, then the whole theme will use the same value for all elements', 'ncmaz-frontend'),
            'data'  => array(
                'DEFAULT' => 'DEFAULT',
                'no' => 'Radius none (0)',
                'md' => 'Radius medium (0.375rem)',
                'lg' => 'Radius large (0.5rem)',
                'xl' => 'Radius xl (0.75rem)',
                '2xl' => 'Radius 2xl (1rem)',
                '3xl' => 'Radius 3xl (1.5rem)',
            ),
            'default' => 'DEFAULT'
        ],
        [
            'id'       => 'nc-general-settings--general-switch-scroll-to-top',
            'type'     => 'switch',
            'title'    => __('Show scroll to top button', 'ncmaz-frontend'),
            'subtitle' => __('Enable/Disable button Scroll to top', 'ncmaz-frontend'),
            'default'  => true,
        ],
    ),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB2 POST CARD ========================
$section = array(
    'title'      => esc_html__('Post card', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for post card', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--post-card',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--general-switch-preview-video-card',
            'type'     => 'switch',
            'title'    => __('Video preview in post card', 'ncmaz-frontend'),
            'subtitle' => __('If enabled, the video in the post card will play in preview mode when hovering the mouse over the card (or card is in view with mobile divice)', 'ncmaz-frontend'),
            'desc'     => __('Default is on', 'ncmaz-frontend'),
            'default'  => true,
        ],
        [
            'id'       => 'post-card--placeholder-for-post-has-not-featured',
            'type'     => 'switch',
            'title'    => __('Placeholder image post card', 'ncmaz-frontend'),
            'subtitle' => __('If enabled, Display placeholder images for posts without featured images (Only applicable for some main post-card types)', 'ncmaz-frontend'),
            'desc'     => __('Default is on', 'ncmaz-frontend'),
            'default'  => true,
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

// =========================== Mobile Menu SETTING__SUB2 ========================
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


// ===========================SOCIALS Login SETTING__SUB2 SOCIALS ========================
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

// ===========================reCAPTCHA Login SETTING__SUB2 SOCIALS ========================
$section = array(
    'title'      => esc_html__('reCAPTCHA v3 Login', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for reCAPTCHA login setting', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--recaptcha-login',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--recaptcha-login--enable-on-modal',
            'type'     => 'switch',
            'title'    => __('Enable reCAPTCHA v3 in form modal', 'ncmaz-frontend'),
            'subtitle' => __('Enable reCAPTCHA v3 in frontend signin/signup form modal', 'ncmaz-frontend'),
            'default'  => false,
        ],
        [
            'id'       => 'nc-general-settings--recaptcha-login--enable-on-wplogin',
            'type'     => 'switch',
            'title'    => __('Enable reCAPTCHA v3 in Wp-login', 'ncmaz-frontend'),
            'subtitle' => __('Enable reCAPTCHA v3 in Wp-login page WordPress default', 'ncmaz-frontend'),
            'default'  => false,
        ],
        [
            'id'       => 'nc-general-settings--recaptcha-login--recaptcha_site_key',
            'type'     => 'text',
            'title'    => esc_html__('Google reCAPTCHA Site Key', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('https://docs.oceanwp.org/article/536-get-your-google-recaptcha-site-key-and-secret-key', 'ncmaz-frontend'),
            'default'  => '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
        ],
        [
            'id'       => 'nc-general-settings--recaptcha-login-recaptcha_secret_key',
            'type'     => 'text',
            'title'    => esc_html__('Google reCAPTCHA Secret Key', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('https://docs.oceanwp.org/article/536-get-your-google-recaptcha-site-key-and-secret-key', 'ncmaz-frontend'),
            'default'  => '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe',
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


// =========================== MUSIC PLAYER SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Music Player', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for Music Player', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--music-player',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--music-player-opt-switch',
            'type'     => 'switch',
            'title'    => esc_html__('Switch On', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Music player on/off', 'ncmaz-frontend'),
            'desc'      => __('Choose off if your site doesn\'t want to use the music player', 'ncmaz-frontend'),
            'default'  => true,
            'disabled'  => true,
        ],
        [
            'id'       => 'nc-general-settings--music-player-media-source',
            'type'     => 'select',
            'multi'    => true,
            'title'    => __('Select Media source', 'ncmaz-frontend'),
            'subtitle' => __('Select the source for your tracks', 'ncmaz-frontend'),
            'desc'      => __('Choose your source correctly. Currently the player best supports sources from Youtube and from mp3/mp4 files.', 'ncmaz-frontend'),
            'options'  => [
                'html5'     => 'Mp3/Mp4',
                'youtube'   => 'Youtube',
                'other'     => 'Other (Beta)',
            ],
            'default'  => ['html5', 'youtube']
        ],

    ),
);
Redux::set_section($opt_name, $section);


// =========================== THEME FONTS SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Theme Fonts', 'ncmaz-frontend'),
    'desc'       => esc_html__('Customize Fonts for theme', 'ncmaz-frontend'),
    'id'         => 'nc-general--theme-fonts',
    'subsection' => true,
    'fields'     => array(
        // FONTS
        [
            'id'          => 'nc-general-settings--general-theme-font-display',
            'type'        => 'typography',
            'title'       => esc_html__('Select google font for heading', 'ncmaz-frontend'),
            'google'        => true,
            'font-style'    => false,
            'font-weight'   => true,
            'font-size'     => false,
            'subsets'       => false,
            'line-height'   => false,
            'word-spacing'  => false,
            'letter-spacing' => false,
            'text-align'    => false,
            'color'         => false,
            'all_styles'    => true,
            'preview' => [
                "text" => "Preview font for heading tags",
                "font-size" => "32px",
                "always_display" => true,
            ],
            'subtitle'    => esc_html__('Heading font applies to heading tags from H1 - H6.', 'ncmaz-frontend'),
            'default'     => array(
                'font-family' => 'Poppins',
                'google'      => true,
            ),
        ],
        [
            'id'          => 'nc-general-settings--general-theme-font-body',
            'type'        => 'typography',
            'title'       => esc_html__('Select google font for body', 'ncmaz-frontend'),
            'google'        => true,
            'font-style'    => false,
            'font-weight'   => true,
            'font-size'     => false,
            'subsets'       => false,
            'line-height'   => false,
            'word-spacing'  => false,
            'letter-spacing' => false,
            'text-align'    => false,
            'color'         => false,
            'all_styles'    => true,
            'preview' => [
                "text" => "Preview font for body tags",
                "font-size" => "18px",
                "always_display" => true,
            ],
            'subtitle'    => esc_html__('Body font applied to body tags (p, span...)', 'ncmaz-frontend'),
            'default'     => array(
                'font-family' => 'Poppins',
                'google'      => true,
            ),
        ],
        // END FONTS
    ),
);
Redux::set_section($opt_name, $section);


// =========================== THEME COLORS SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Theme Colors', 'ncmaz-frontend'),
    'desc'       => esc_html__('Customize colors for theme', 'ncmaz-frontend'),
    'id'         => 'nc-general--theme-colors',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general--theme-color---pre-built-mode',
            'type'     => 'switch',
            'off'       => 'Customize primary color',
            'on'        => 'Choose a pre-built color palette',

            'title'    => esc_html__('Choose 1 color palette Or customize the main color', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Customize the primary color or choose from a pre-built designer color palette!', 'ncmaz-frontend'),
            'default'  => true,
        ],
        // COLOR
        [
            'id'        => 'nc-general--theme-color--primary-hex',
            'type'      => 'color',
            'title'     =>   __('Customize Primary Color', 'ncmaz-frontend'),
            'subtitle'  => __('Customize color primary for theme.', 'ncmaz-frontend'),
            'desc'      => __('Currently the default Primary Color has 9 variations. If you change here, all variants will use the same value', 'ncmaz-frontend'),
            'validate' => 'color',
            'transparent' => false,
            'required' => array('nc-general--theme-color---pre-built-mode', '=', false)
        ],
        // END COLOR
        // PALETTE
        [
            'id'       => 'nc-general--theme-color--pre-built-palette',
            'type'     => 'select',
            'title'    => esc_html__('Select a pre-built palette', 'ncmaz-frontend'),
            'subtitle' => esc_html__('The color palettes have been meticulously selected by the designer.', 'ncmaz-frontend'),
            'desc'     => esc_html__('The color palettes are all built for Primary, Secondary and Neutral colors.', 'ncmaz-frontend'),
            'options'  => array(
                'DEFAULT' => 'DEFAULT',
                'theme-cyan-blueGrey' => 'cyan-blueGrey',
                'theme-blue-blueGrey' => 'blue-blueGrey',
                'theme-purple-blueGrey' => 'purple-blueGrey',
                'theme-teal-blueGrey' => 'teal-blueGrey',
                'theme-blueGrey-blueGrey' => 'blueGrey-blueGrey',
                'theme-red-warmGrey' => 'red-warmGrey',
                'theme-cyan-warmGrey' => 'cyan-warmGrey',
                'theme-blue-coolGrey' => 'blue-coolGrey',
                'theme-lightBlue-coolGrey' => 'lightBlue-coolGrey',
                'theme-pink-coolGrey' => 'pink-coolGrey',
                'theme-green-grey' => 'green-grey',
                'theme-yellow-grey' => 'yellow-grey',
                'theme-orange-grey' => 'orange-grey',
                'theme-fuchsia-blueGrey' => 'fuchsia-blueGrey',
            ),
            'default'  => 'DEFAULT',
            'required' => array('nc-general--theme-color---pre-built-mode', '=', true)
        ]
    ),
);
Redux::set_section($opt_name, $section);


// =========================== Frontend translate SETTING__SUB2 ========================
$JS_LOCALE_DEFAULT = '{
    "Comment this post": "Comment this post",
    "Edit post": "Edit post",
    "Add tags": "Add tags",
    "Go to search page": "Go to search page",
    "Now playing": "Now playing",
    "Listen now": "Listen now",
    "Type the URL of the iframe you want to embed": "Type the URL of the iframe you want to embed",
    "Buymeacoffe": "Buymeacoffe",
    "https://buymeacoffee.com/yourname": "https://buymeacoffee.com/yourname",
    "buymeacoffee.com": "buymeacoffee.com",
    "yourwebsite.com": "yourwebsite.com",
    "UX/UI Designer": "UX/UI Designer",
    "Short Bio": "Short Bio",
    "Upload a file": "Upload a file",
    "Click to change": "Click to change",
    "socials": "socials",
    "profile": "profile",
    "general": "general",
    "Logout Account": "Logout Account",
    "Add elsewhere links to your profile": "Add elsewhere links to your profile",
    "Social profiles": "Social profiles",
    "You should have an account here:": "You should have an account here:",
    "A short Bio (e.g. occupation), this will show up in the author cards.": "A short Bio (e.g. occupation), this will show up in the author cards.",
    "Biographical Info, this will show up in the author page.": "Biographical Info, this will show up in the author page.",
    "Something about yourself in a few word.": "Something about yourself in a few word.",
    "Biographical Info": "Biographical Info",
    "Website": "Website",
    "Nickname": "Nickname",
    "required": "required",
    "Last Name": "Last Name",
    "First Name": "First Name",
    "Set up your profile and manage your account": "Set up your profile and manage your account",
    "Cover photo": "Cover photo",
    "Profile picture": "Profile picture",
    "Write an excerpt (optional)": "Write an excerpt (optional)",
    "Post will be changed to draft. You can publish it later.": "Post will be changed to draft. You can publish it later.",
    "Your account has been updated.": "Your account has been updated.",
    "Post deleted successfully.": "Post deleted successfully.",
    "Email": "Email",
    "Display Name": "Display Name",
    "Update profile": "Update profile",
    "Edit profile": "Edit profile",
    "Draft this post": "Draft this post",
    "Post successful": "Post successful",
    "Allow comments": "Allow comments",
    "password": "password",
    "Discussion": "Discussion",
    "Manage your password": "Manage your password",
    "Link copied": "Link copied!",
    "Delete post": "Delete post",
    "Password must be at least 6 characters": "Password must be at least 6 characters",
    "Confirm password": "Confirm password",
    "New password": "New password",
    "Update your username and manage your account": "Update your username and manage your account",
    "General settings": "General settings",
    "Update password": "Update password",
    "Are you sure you want to delete this post? You cannot undo this action.": "Are you sure you want to delete this post? You cannot undo this action.",
    "Copy link": "Copy link",
    "Update": "Update",
    "Save draft": "Save draft",
    "Drafts": "Drafts",
    "Pendings": "Pendings",
    "Published": "Published",
    "Publish": "Publish",
    "selected": "selected",
    "Add up to 5 tags": "Add up to 5 tags",
    "Add up to 5 categories": "Add up to 5 categories",
    "Choose categories": "Choose categories",
    "Add another": "Add another",
    "Top tags": "Top tags",
    "Add a cover image": "Add a cover image",
    "Write your post content here…": "Write your post content here…",
    "New post title here…": "New post title here…",
    "File type is not allowed": "File type is not allowed",
    "Only image files are permitted": "Only image files are permitted",
    "Apply": "Apply",
    "Cancel": "Cancel",
    "Upload": "Upload",
    "Insert from URL": "Insert from URL",
    "Upload image": "Upload image",
    "Unset link": "Unset link",
    "Image URL": "Image URL",
    "Gallery images": "Gallery images",
    "Paste or type a link": "Paste or type a link",
    "Alt text (alternative text)": "Alt text (alternative text)",
    "Image": "Image",
    "nothingWeFound": "Nothing we found!",
    "author": "author",
    "authors": "authors",
    "all": "All",
    "viewAll": "View All",
    "articles": "Articles",
    "categories": "categories",
    "category": "category",
    "tags": "tags",
    "showMeMore": "Show me more",
    "showAllPhotos": "Show all photos",
    "relatedPosts": "Related Posts",
    "moreFromAuthor": "More from author",
    "ThistrackwasnotfoundMaybeitHasBeenRemoved": "This track was not found. Maybe it has been removed!",
    "mostRecent": "Most Recent",
    "mostLiked": "Most Liked",
    "mostDiscussed": "Most Discussed",
    "mostViewed": "Most Viewed",
    "typeAndPressEnter": "Type and press enter",
    "next": "Next",
    "prev": "Prev",
    "filters": "Filters",
    "wereFoundForKeyword": "were found for keyword",
    "LikedArticles": "Liked Articles",
    "suggestions": "Suggestions",
    "somethingWentWrong": "Something went wrong",
    "other": "Other",
    "otherTags": "Other Tags",
    "otherCategories": "Other Categories",
    "discoverOtherTags": "Discover other tags",
    "discoverOtherCategories": "Discover other categories"
  }';

$section = array(
    'title'      => esc_html__('Frontend translate', 'ncmaz-frontend'),
    'desc'       => esc_html__('In addition to using the Loco plugin to translate, you need to translate these words that are not included in the .pot file (These words are not in the PHP files, they are used and rendered by React)', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--Frontend-translate',
    'subsection' => true,
    'fields'     => [
        // ONLY DEFAULT
        [
            'id'       => 'nc-general-Frontend-translate__lang--default',
            'type'     => 'ace_editor',
            'title'    => esc_html__('Default Language code', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Please replace the values on the right (after colons and inside quotes) with your language.', 'ncmaz-frontend'),
            'mode'     => 'javascript',
            'theme'    => 'monokai',
            'desc'     => 'Possible modes can be found at https://ace.c9.io/.',
            'default'  => $JS_LOCALE_DEFAULT
        ],
        // WHEN ENABLE POLYLANG
        [
            'id'   => 'nc-general-Frontend-translate__divider_1',
            'desc' => esc_html__('Only settings the fields below when you need multi-language, Up to 4 different languages. If you need more than 4 languages, open 1 ticket and the theme author will help you set up - https://help.chisnghiax.com', 'ncmaz-frontend'),
            'type' => 'divide',
        ],
        [
            'id'        => 'nc-general-Frontend-translate__lang_names',
            'type'      => 'text',
            'title'     => esc_html__('List of languages (Code)', 'ncmaz-frontend'),
            'subtitle'  => esc_html__('Please enter the language codes you are using in the Polylang plugin. - E.g., en,vi,ja...', 'ncmaz-frontend'),
            'desc'      => esc_html__('If you have less than 4 different languages, leave the remaining fields blank.', 'ncmaz-frontend'),
            'data'      => array(
                'language_1' => __('Language 1 code', 'ncmaz-frontend'),
                'language_2' => __('Language 2 code', 'ncmaz-frontend'),
                'language_3' => __('Language 3 code', 'ncmaz-frontend'),
                'language_4' => __('Language 4 code', 'ncmaz-frontend'),
            ),
            'default'   => array(
                'language_1' => '',
                'language_2' => '',
                'language_3' => '',
                'language_4' => '',
            ),
            'required'  => array('nc-general-settings--general-switch-polylang', '=', true)
        ],
        [
            'id'       => 'nc-general-Frontend-translate__lang--one',
            'type'     => 'ace_editor',
            'title'    => esc_html__('Translations for the first language', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Translations for the first language, corresponds to the Language 1 field above.', 'ncmaz-frontend'),
            'mode'     => 'javascript',
            'theme'    => 'monokai',
            'desc'     => 'Possible modes can be found at https://ace.c9.io/.',
            'default'  => $JS_LOCALE_DEFAULT,
            'required' => array('nc-general-settings--general-switch-polylang', '=', true)
        ],
        [
            'id'       => 'nc-general-Frontend-translate__lang--two',
            'type'     => 'ace_editor',
            'title'    => esc_html__('Translation for 2nd language.', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Translation for 2nd language, corresponds to the Language 2 field above.', 'ncmaz-frontend'),
            'mode'     => 'javascript',
            'theme'    => 'monokai',
            'desc'     => 'Possible modes can be found at https://ace.c9.io/.',
            'default'  => $JS_LOCALE_DEFAULT,
            'required' => array('nc-general-settings--general-switch-polylang', '=', true)
        ],
        [
            'id'       => 'nc-general-Frontend-translate__lang--three',
            'type'     => 'ace_editor',
            'title'    => esc_html__('Translation for 3rd language.', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Translation for 3rd language, corresponds to the Language 3 field above. If you don\'t need this 3rd language, leave it as it is without deleting', 'ncmaz-frontend'),
            'mode'     => 'javascript',
            'theme'    => 'monokai',
            'desc'     => 'Possible modes can be found at https://ace.c9.io/.',
            'default'  => $JS_LOCALE_DEFAULT,
            'required' => array('nc-general-settings--general-switch-polylang', '=', true)
        ],
        [
            'id'       => 'nc-general-Frontend-translate__lang--four',
            'type'     => 'ace_editor',
            'title'    => esc_html__('Translation for 4th language.', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Translation for 4th language, corresponds to the Language 4 field above. If you don\'t need this 4th language, leave it as it is without deleting', 'ncmaz-frontend'),
            'mode'     => 'javascript',
            'theme'    => 'monokai',
            'desc'     => 'Possible modes can be found at https://ace.c9.io/.',
            'default'  => $JS_LOCALE_DEFAULT,
            'required' => array('nc-general-settings--general-switch-polylang', '=', true)
        ],
    ],
);
Redux::set_section($opt_name, $section);



// =========================== Global variable (Advance) SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Global variable (Advance)', 'ncmaz-frontend'),
    'desc'       => esc_html__('Customize global variable for frontend', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--adv-global-variable',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'adv-global-variable--pagePostSubmissionEditorUrl',
            'type'     => 'select',
            'title'    => esc_html__('Select pagePostSubmissionEditorUrl', 'ncmaz-frontend'),
            'subtitle' => esc_html__('No validation can be done on this field type', 'ncmaz-frontend'),
            'desc'     => esc_html__('This is the description field, again good for additional info.', 'ncmaz-frontend'),
            // Must provide key => value pairs for select options
            'data'      => 'pages',
            'args'      => array(
                'posts_per_page' => 30,
            ),
            'ajax'      => true,
            'default'   => function_exists('ncmazFe_getIDBySlug') ?  ncmazFe_getIDBySlug('ncmaz-submission-post-editor') : null,
        ],
        [
            'id'       => 'adv-global-variable--pageNcmazAccountUrl',
            'type'     => 'select',
            'title'    => esc_html__('Select pageNcmazAccountUrl', 'ncmaz-frontend'),
            'subtitle' => esc_html__('No validation can be done on this field type', 'ncmaz-frontend'),
            'desc'     => esc_html__('This is the description field, again good for additional info.', 'ncmaz-frontend'),
            // Must provide key => value pairs for select options
            'data'      => 'pages',
            'args'      => array(
                'posts_per_page' => 30,
            ),
            'ajax'      => true,
            'default'   => function_exists('ncmazFe_getIDBySlug') ?  ncmazFe_getIDBySlug('ncmaz-account') : null,
        ],

        [
            'id'        => 'adv-global-variable--max-categories-submit',
            'type'      => 'slider',
            'title'     => esc_html__('Max categories submit', 'ncmaz-frontend'),
            'subtitle'  => esc_html__('Maximum number of categories allowed when submitting a post in the front end.', 'ncmaz-frontend'),
            "default"   => 5,
            "min"       => 1,
            "step"      => 1,
            "max"       => 30,
            'display_value' => 'label'
        ],
        [
            'id'        => 'adv-global-variable--max-tags-submit',
            'type'      => 'slider',
            'title'     => esc_html__('Max tags submit', 'ncmaz-frontend'),
            'subtitle'  => esc_html__('Maximum number of tags allowed when submitting a post in the front end.', 'ncmaz-frontend'),
            "default"   => 5,
            "min"       => 1,
            "step"      => 1,
            "max"       => 30,
            'display_value' => 'label'
        ],

    ),
);

Redux::set_section($opt_name, $section);
