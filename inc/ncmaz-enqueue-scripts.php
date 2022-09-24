<?php
//=================================================================================
$script = 'script';
$tag = '_loader_tag';
add_filter(
    $script . $tag,
    'ncmazFe_addModuleTypeForScripts',
    10,
    3
);

function ncmazFe_addModuleTypeForScripts($tag, $handle, $src)
{
    if (
        '@vite-client-js' === $handle ||
        $handle === 'ncmaz-frontend-src-main-tsx' ||
        boolval(preg_match(
            '/^vitejs-module--/',
            $handle,
        ))
    ) {
        return  $tag = '<script id="' . esc_attr($handle) . '"  type="module" src="' . esc_url($src) . '"></script>';
    }

    // 
    $preloadJs = array('ncmazFe-mainJs-preload');
    if (in_array($handle, $preloadJs)) {
        return  $tag = '<link as="script" rel="preload"  href="' . esc_url($src) . '">';
    }
    return $tag;
}
// =================================================================================


// ENQUEUE FOR BACKEND EDITOR
add_action('admin_enqueue_scripts', 'ncmazFe_EnqueueAdminStylesheet');
function ncmazFe_EnqueueAdminStylesheet($hook)
{
    if ($hook !== 'post.php') {
        return;
    }
    wp_enqueue_style('ncmazFe-mycustom-editor', _NCMAZ_FRONTEND_DIR_URL . 'dist/editor-css/mycustom.css', [], _NCMAZ_FRONTEND_VERSION, 'all');
}


// ADD SOME CODE JS TO HEADER -- CHECK DARK/MODE
add_action('wp_print_scripts', 'ncmazFe_print_scripts');
function ncmazFe_print_scripts()
{
    global $ncmaz_redux_demo;
    $general_default_theme_mode = null;
    if (!empty($ncmaz_redux_demo)) {
        $general_default_theme_mode = ['defaultThemeMode'  =>  $ncmaz_redux_demo['nc-general-settings--general-default-theme-mode']];
    }
?>
    <script>
        var ncmazFrontendDarkmode = <?php echo json_encode($general_default_theme_mode); ?>;
        try {
            if (!localStorage.theme) {
                if (
                    ncmazFrontendDarkmode &&
                    ncmazFrontendDarkmode.defaultThemeMode === "dark"
                ) {
                    localStorage.theme = "dark";
                }
            }
            if (localStorage.theme === "dark") {
                !document.documentElement.classList.contains("dark") &&
                    document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }

        } catch (_) {}
    </script>
    <?php
}

// ADD THEME STYLE RADIUS FOR BODY CLASS
add_filter('body_class', function ($classes) {
    global $ncmaz_redux_demo;
    if (
        empty($ncmaz_redux_demo['nc-general-settings--general-theme-radius'])
        || $ncmaz_redux_demo['nc-general-settings--general-theme-radius'] === 'DEFAULT'
    ) {
        return false;
    }
    $radiusClass = ' ncmaztheme-' . $ncmaz_redux_demo['nc-general-settings--general-theme-radius'] . '-radius ';
    return array_merge($classes, array($radiusClass));
});

// ADD THEME STYLE FONTS FOR HEAD
add_action('wp_head', 'ncmazFe_hook_fonts_css');
function ncmazFe_hook_fonts_css()
{
    global $ncmaz_redux_demo;
    if (empty($ncmaz_redux_demo['nc-general-settings--general-theme-font-display'])) {
    ?>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
    <?php
        // Exit here!
        return false;
    }

    $themeFontDisplay = $ncmaz_redux_demo['nc-general-settings--general-theme-font-display'];
    $themeFontBody = $ncmaz_redux_demo['nc-general-settings--general-theme-font-body'];
    ?>
    <style>
        body {
            --font-display: <?php echo $themeFontDisplay['font-family']; ?>;
            --font-body: <?php echo $themeFontBody['font-family']; ?>;
        }
    </style>
    <?php
}
// ADD THEME STYLE COLOR FOR HEAD
add_action('wp_head', 'ncmazFe_hook_colors_css');
function ncmazFe_hook_colors_css()
{
    global $ncmaz_redux_demo;
    if (
        !isset($ncmaz_redux_demo['nc-general--theme-color---pre-built-mode'])
        || !function_exists('ncmazFe_hex2rgba')
    ) {
        return false;
    }

    // SELECT PRE-BULD COLOR 
    if (boolval($ncmaz_redux_demo['nc-general--theme-color---pre-built-mode'])) {
        if (
            empty($ncmaz_redux_demo['nc-general--theme-color--pre-built-palette'])
            || $ncmaz_redux_demo['nc-general--theme-color--pre-built-palette'] === "DEFAULT"
        ) {
            return false;
        } else {
            add_filter('body_class', function ($classes) {
                global $ncmaz_redux_demo;
                return array_merge($classes, array($ncmaz_redux_demo['nc-general--theme-color--pre-built-palette']));
            });
        }
        // CUSTOMIZE PRIMARY COLOR
    } else {
        if (empty($ncmaz_redux_demo['nc-general--theme-color--primary-hex'])) {
            return false;
        }
        $rgb = ncmazFe_hex2rgba($ncmaz_redux_demo['nc-general--theme-color--primary-hex']);
    ?>
        <style>
            body {
                --c-primary-50: var(--c-neutral-50);
                --c-primary-100: var(--c-neutral-100);
                --c-primary-200: <?php echo $rgb; ?>;
                --c-primary-300: <?php echo $rgb; ?>;
                --c-primary-400: <?php echo $rgb; ?>;
                --c-primary-500: <?php echo $rgb; ?>;
                --c-primary-600: <?php echo $rgb; ?>;
                --c-primary-700: <?php echo $rgb; ?>;
                --c-primary-800: <?php echo $rgb; ?>;
                --c-primary-900: <?php echo $rgb; ?>;
                /*  */
                --c-secondary-50: var(--c-neutral-50);
                --c-secondary-100: var(--c-neutral-100);
                --c-secondary-200: <?php echo $rgb; ?>;
                --c-secondary-300: <?php echo $rgb; ?>;
                --c-secondary-400: <?php echo $rgb; ?>;
                --c-secondary-500: <?php echo $rgb; ?>;
                --c-secondary-600: <?php echo $rgb; ?>;
                --c-secondary-700: <?php echo $rgb; ?>;
                --c-secondary-800: <?php echo $rgb; ?>;
                --c-secondary-900: <?php echo $rgb; ?>;
            }
        </style>
<?php
    }
}

// JAVASCRIPT
add_action('wp_enqueue_scripts', 'ncmazFe_enqueueScriptCustomize');
function ncmazFe_enqueueScriptCustomize()
{
    global $wp_locale;
    global $ncmaz_redux_demo;

    if (empty($ncmaz_redux_demo)) {
        return false;
    }

    $currentUser = ncmazFe_getCurrentUserGraphql();
    $allSettings = ncmazFe_getAllSettingsGraphql();

    // ENQUEUE customizer.js file
    wp_enqueue_script('ncmazFe-mainJs-preload', _NCMAZ_FRONTEND_DIR_URL . 'dist/js/customizer.js', array(), _NCMAZ_FRONTEND_VERSION, false);
    wp_enqueue_script('ncmazFe-mainJs', _NCMAZ_FRONTEND_DIR_URL . 'dist/js/customizer.js', array(), _NCMAZ_FRONTEND_VERSION, true);

    // =============
    $monthNames = array_map(array(&$wp_locale, 'get_month'), range(1, 12));
    $monthNamesShort = array_map(array(&$wp_locale, 'get_month_abbrev'), $monthNames);
    $dayNames = array_map(array(&$wp_locale, 'get_weekday'), range(0, 6));
    $dayNamesShort = array_map(array(&$wp_locale, 'get_weekday_abbrev'), $dayNames);

    wp_add_inline_script('ncmazFe-mainJs', 'window.DATE_I18N = ' . json_encode(
        [
            "month_names"       => $monthNames,
            "month_names_short" => $monthNamesShort,
            "day_names"         => $dayNames,
            "day_names_short"   => $dayNamesShort
        ]
    ), 'before');

    // get SLUGS
    $variablePagePostSubmissionEditorUrl =  get_permalink($ncmaz_redux_demo['adv-global-variable--pagePostSubmissionEditorUrl']);
    $variablePageNcmazAccountUrl =  get_permalink($ncmaz_redux_demo['adv-global-variable--pageNcmazAccountUrl']);
    $IS_ENABLE_POLYLANG_SWITCH = boolval($ncmaz_redux_demo['nc-general-settings--general-switch-polylang']);
    $FRONTEND_TRANSLATE_LANG_NAMES = $ncmaz_redux_demo['nc-general-Frontend-translate__lang_names'];
    wp_add_inline_script('ncmazFe-mainJs', 'window.frontendObject = ' . json_encode(
        [
            'ajaxurl'                       => admin_url('admin-ajax.php'),
            'stylesheetDirectory'           => get_template_directory_uri(),
            'restUrl'                       => get_rest_url(),
            'dateFormat'                    => get_option('date_format'),
            'placeholderImg'                => get_template_directory_uri() . '/placeholder-small.png',
            'graphQLBasePath'               => get_site_url(null, '/graphql'),
            'socialsShare'                  => $ncmaz_redux_demo['nc-general-settings--multi-socials-share'],
            'homeURL'                       => get_site_url(),
            'currentUser'                   => empty($currentUser) ?  null : $currentUser['data']['viewer'],
            'allSettings'                   => empty($allSettings) ?  null : $allSettings['data']['allSettings'],
            'currentObject'                 => ['id'    => get_the_ID()],
            'pll_current_language'          => function_exists('pll_current_language') ? strtoupper(pll_current_language()) : null,
            'pll_current_language_correct_code' => function_exists('pll_current_language') ? pll_current_language() : null,
            'pll_themeoption_actived'       => (function_exists('pll_current_language') && $IS_ENABLE_POLYLANG_SWITCH) ? true : null,
            'musicPlayerMode'               => true,
            'musicPlayerMediaSource'        => $ncmaz_redux_demo['nc-general-settings--music-player-media-source'],
            'switchPreviewVideo'            => boolval($ncmaz_redux_demo['nc-general-settings--general-switch-preview-video-card']),
            'restVarsEndpoint'              => esc_url_raw(rest_url('/wp/v2/media/')),
            'restVarsNonce'                 => wp_create_nonce('wp_rest'),
            'pagePostSubmissionEditorUrl'   => empty($variablePagePostSubmissionEditorUrl) ? "" : $variablePagePostSubmissionEditorUrl,
            'pageNcmazAccountUrl'           => empty($variablePageNcmazAccountUrl) ? "" : $variablePageNcmazAccountUrl,
            'wpLogoutUrl'                   => wp_logout_url(get_site_url()),
            // 
            'maxTagsLengSubmit'             => empty(intval($ncmaz_redux_demo['adv-global-variable--max-tags-submit'])) ? 5 : intval($ncmaz_redux_demo['adv-global-variable--max-tags-submit']),
            'maxCategoriesLengSubmit'       => empty(intval($ncmaz_redux_demo['adv-global-variable--max-categories-submit'])) ? 5 : intval($ncmaz_redux_demo['adv-global-variable--max-categories-submit']),
            'authorPageCoverImgDefault'     => empty($ncmaz_redux_demo['nc-archive-page-settings--authorPageCoverImgDefault']) ? "" : $ncmaz_redux_demo['nc-archive-page-settings--authorPageCoverImgDefault']['url'],
            'archivePageCoverImgDefault'    => empty($ncmaz_redux_demo['nc-archive-page-settings--archivePageCoverImgDefault']) ? "" : $ncmaz_redux_demo['nc-archive-page-settings--archivePageCoverImgDefault']['url'],
            'searchPageCoverImgDefault'     => empty($ncmaz_redux_demo['nc-search-page-settings--media-background']) ? "" : $ncmaz_redux_demo['nc-search-page-settings--media-background']['url'],
            // === Locales JS files
            "frontendTranslations"          => [
                [
                    'name'      => 'localesJsFile__default',
                    'language'  => 'default',
                    'jsCode'    => $ncmaz_redux_demo['nc-general-Frontend-translate__lang--default']
                ],
                [
                    'name'      => 'localesJsFile__one',
                    'language'  => $FRONTEND_TRANSLATE_LANG_NAMES['language_1'],
                    'jsCode'    => ($IS_ENABLE_POLYLANG_SWITCH && boolval($FRONTEND_TRANSLATE_LANG_NAMES['language_1'])) ? $ncmaz_redux_demo['nc-general-Frontend-translate__lang--one'] : null,
                ],
                [
                    'name'      => 'localesJsFile__two',
                    'language'  => $FRONTEND_TRANSLATE_LANG_NAMES['language_2'],
                    'jsCode'    => ($IS_ENABLE_POLYLANG_SWITCH && boolval($FRONTEND_TRANSLATE_LANG_NAMES['language_2'])) ? $ncmaz_redux_demo['nc-general-Frontend-translate__lang--two'] : null,
                ],
                [
                    'name'      => 'localesJsFile__three',
                    'language'  => $FRONTEND_TRANSLATE_LANG_NAMES['language_3'],
                    'jsCode'    => ($IS_ENABLE_POLYLANG_SWITCH && boolval($FRONTEND_TRANSLATE_LANG_NAMES['language_3'])) ? $ncmaz_redux_demo['nc-general-Frontend-translate__lang--three'] : null,
                ],
                [
                    'name'      => 'localesJsFile__four',
                    'language'  => $FRONTEND_TRANSLATE_LANG_NAMES['language_4'],
                    'jsCode'    => ($IS_ENABLE_POLYLANG_SWITCH && boolval($FRONTEND_TRANSLATE_LANG_NAMES['language_4'])) ? $ncmaz_redux_demo['nc-general-Frontend-translate__lang--four'] : null,
                ],
            ],
            // 
            "isActivePluginFavorites" => boolval(defined("FAVORITES_PLUGIN_FILE"))

        ]
    ), 'before');

    wp_add_inline_script('ncmazFe-mainJs', 'window.ncmazFrontendVariables = ' . json_encode(
        [
            'pluginDir'             => _NCMAZ_FRONTEND_DIR_URL,
            'pluginDistImagesDir'   => _NCMAZ_FRONTEND_DIR_URL . 'dist/images/',
        ]
    ), 'before');
}

// ======================== ENABLE WHEN PRODUCT/DEPLOY MODE ========================
// add_action('wp_enqueue_scripts', 'ncmazFe_registerScripts');
function ncmazFe_registerScripts()
{
    $manifestJS = false;
    if (file_exists(_NCMAZ_FRONTEND_DIR_PATH . 'dist/manifest.json')) {
        $manifestJS = json_decode(file_get_contents(_NCMAZ_FRONTEND_DIR_PATH . 'dist/manifest.json'), true);
    }
    if (!$manifestJS) {
        return;
    }

    $jsFileUrl = (string) $manifestJS['src/main.tsx']['file'];
    $cssFileUrl = (string) $manifestJS['src/main.tsx']['css'][0];
    $name = 'vitejs-module--' . $jsFileUrl;

    $cssLazyCssWoocommerce = '';
    if (!is_rtl()) {
        $cssLazyCssWoocommerce = (string) $manifestJS['src/LazyCssWoocommerce.tsx']['css'][0];
    }
    // JS
    wp_enqueue_script($name, _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $jsFileUrl, ['jquery', 'ncmazFe-mainJs'], null, true);
    // CSS
    wp_enqueue_style('ncmazFe-main', _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $cssFileUrl, [], _NCMAZ_FRONTEND_VERSION, 'all');

    // RTL styles.
    wp_style_add_data('ncmazFe-main', 'rtl', 'replace');

    // Woocommerce CSS
    if (class_exists('WooCommerce') && !empty($cssLazyCssWoocommerce)) {
        wp_enqueue_style('ncmazFe-Woocommerce', _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $cssLazyCssWoocommerce, [], _NCMAZ_FRONTEND_VERSION, 'all');
    }
}

// ======================== ENABLE WHEN ONLY DEV MODE ========================
add_action('wp_enqueue_scripts', 'ncmaz_frontend_enqueue_script');
function ncmaz_frontend_enqueue_script($hook)
{
    echo '<script type="module">
    import RefreshRuntime from "http://localhost:5173/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__  = true
</script>';

    wp_enqueue_script('@vite-client-js', 'http://localhost:5173/@vite/client', [], null, true);
    wp_enqueue_script('ncmaz-frontend-src-main-tsx', 'http://localhost:5173/src/main.tsx', [], null, true);
}
// --------------------------------------------------------------------------------------
