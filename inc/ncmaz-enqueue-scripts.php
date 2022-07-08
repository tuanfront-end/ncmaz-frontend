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
            if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                !document.documentElement.classList.contains("dark") &&
                    document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }

        } catch (_) {}
    </script>
<?php
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
            "month_names" => $monthNames,
            "month_names_short" => $monthNamesShort,
            "day_names" => $dayNames,
            "day_names_short" => $dayNamesShort
        ]
    ), 'before');

    // get SLUGS
    $variablePagePostSubmissionEditorUrl =  get_permalink($ncmaz_redux_demo['adv-global-variable--pagePostSubmissionEditorUrl']);
    $variablePageNcmazAccountUrl =  get_permalink($ncmaz_redux_demo['adv-global-variable--pageNcmazAccountUrl']);
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
            'currentUser'                   => $currentUser ? $currentUser['data']['viewer'] : null,
            'allSettings'                   => $allSettings ? $allSettings['data']['allSettings'] : null,
            'currentObject'                 => ['id'        => get_the_ID()],
            'pll_current_language'          => function_exists('pll_current_language') ? strtoupper(pll_current_language()) : null,
            'pll_themeoption_actived'       => (function_exists('pll_current_language') && boolval($ncmaz_redux_demo['nc-general-settings--general-switch-polylang'])) ? 'true' : null,
            'musicPlayerMode'               => $ncmaz_redux_demo['nc-general-settings--music-player-opt-switch'] ? "true" : null,
            'musicPlayerMediaSource'        => $ncmaz_redux_demo['nc-general-settings--music-player-media-source'],
            'restVarsEndpoint'              => esc_url_raw(rest_url('/wp/v2/media/')),
            'restVarsNonce'                 => wp_create_nonce('wp_rest'),
            'pagePostSubmissionEditorUrl'   => empty($variablePagePostSubmissionEditorUrl) ? "" : $variablePagePostSubmissionEditorUrl,
            'pageNcmazAccountUrl'           => empty($variablePageNcmazAccountUrl) ? "" : $variablePageNcmazAccountUrl,
            'wpLogoutUrl'                   => wp_logout_url(get_site_url()),
            // 
            'maxTagsLengSubmit'             => intval($ncmaz_redux_demo['adv-global-variable--max-tags-submit']) ?? 5,
            'maxCategoriesLengSubmit'       => intval($ncmaz_redux_demo['adv-global-variable--max-categories-submit']) ?? 5,
            'authorPageCoverImgDefault'     => $ncmaz_redux_demo['nc-archive-page-settings--authorPageCoverImgDefault']['url'],
            'archivePageCoverImgDefault'    => $ncmaz_redux_demo['nc-archive-page-settings--archivePageCoverImgDefault']['url'],
            'searchPageCoverImgDefault'     => $ncmaz_redux_demo['nc-search-page-settings--media-background']['url'],
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
    $cssLazyCssWoocommerce = (string) $manifestJS['src/LazyCssWoocommerce.tsx']['css'][0];
    $name = 'vitejs-module--' . $jsFileUrl;
    // JS
    wp_enqueue_script($name, _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $jsFileUrl, ['jquery', 'ncmazFe-mainJs'], null, true);
    // CSS
    wp_enqueue_style('ncmazFe-main', _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $cssFileUrl, [], _NCMAZ_FRONTEND_VERSION, 'all');

    // RTL styles.
    wp_style_add_data('ncmazFe-main', 'rtl', 'replace');

    // Woocommerce CSS
    if (class_exists('WooCommerce')) {
        wp_enqueue_style('ncmazFe-Woocommerce', _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $cssLazyCssWoocommerce, [], _NCMAZ_FRONTEND_VERSION, 'all');
    }
}

// ======================== ENABLE WHEN ONLY DEV MODE ========================
add_action('wp_enqueue_scripts', 'ncmaz_frontend_enqueue_script');
function ncmaz_frontend_enqueue_script($hook)
{
    echo '<script type="module">
    import RefreshRuntime from "http://localhost:3000/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__  = true
</script>';

    wp_enqueue_script('@vite-client-js', 'http://localhost:3000/@vite/client', [], null, true);
    wp_enqueue_script('ncmaz-frontend-src-main-tsx', 'http://localhost:3000/src/main.tsx', [], null, true);
}
// --------------------------------------------------------------------------------------
