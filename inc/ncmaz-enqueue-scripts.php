<?php
//=================================================================================
$script = 'script';
$tag = '_loader_tag';
add_filter(
    $script . $tag,
    'addModuleTypeForScripts',
    10,
    3
);



function addModuleTypeForScripts($tag, $handle, $src)
{
    if (
        '@vite-client-js' === $handle ||
        $handle === 'ncmaz-frontend-src-main-tsx' ||
        boolval(preg_match(
            '/^vitejs-main-module--/',
            $handle,
        ))
    ) {
        return  $tag = '<script id="' . esc_attr($handle) . '" type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
// =================================================================================

// ENQUEUE FOR BACKEND EDITOR
function ncmazFrontendEnqueueAdminStylesheet($hook)
{
    if ($hook !== 'post.php') {
        return;
    }
    wp_enqueue_style('ncmazfrontend-mycustom-editor', _NCMAZ_FRONTEND_DIR_URL . 'dist/editor-css/mycustom.css', [], _NCMAZ_FRONTEND_VERSION, 'all');
}
add_action('admin_enqueue_scripts', 'ncmazFrontendEnqueueAdminStylesheet');


function getCurrentUserGraphql()
{
    $userID = get_current_user_id();
    if (!function_exists('graphql') || !$userID) {
        return null;
    }
    return graphql([
        'query' => '{
            viewer {
                avatar {
                  url
                }
                databaseId
                email
                name
                ncUserMeta {
                  color
                  ncBio
                  featuredImage {
                    sourceUrl
                  }
                }
                slug
                uri
                url
                userId
                username
                nicename
                nickname
                locale
            }
		}'
    ]);
}


function getAllSettingsGraphql()
{
    if (!function_exists('graphql')) {
        var_dump('Error on getAllSettingsGraphql function - ncmaz-frontend');
        return null;
    }

    $getAllSettingsGraphqlT1 = graphql([
        'query' => '{
            allSettings {
                discussionSettingsDefaultCommentStatus
                discussionSettingsDefaultPingStatus
                generalSettingsDateFormat
                generalSettingsDescription
                generalSettingsLanguage
                generalSettingsStartOfWeek
                generalSettingsTimeFormat
                generalSettingsTimezone
                generalSettingsTitle
                readingSettingsPostsPerPage
                writingSettingsDefaultCategory
                writingSettingsDefaultPostFormat
                writingSettingsUseSmilies
            }
        }'
    ]);

    return $getAllSettingsGraphqlT1;
}


// JAVASCRIPT
function ncmazFrontend_enqueueScriptCustomize()
{
    global $wp_locale;
    global $ncmaz_redux_demo;
    $currentUser = getCurrentUserGraphql();
    $allSettings = getAllSettingsGraphql();

    // STYLE
    wp_enqueue_style('glide-core', _NCMAZ_FRONTEND_DIR_URL . 'dist/css/glide.core.min.css', [], '3.5.2', 'all');
    //

    wp_enqueue_script('ncmaz-frontend-customizerOnHeader', _NCMAZ_FRONTEND_DIR_URL . 'dist/js/customizerOnHeader.js', ['jquery'], _NCMAZ_FRONTEND_VERSION, false);
    wp_add_inline_script('ncmaz-frontend-customizerOnHeader', 'window.ncmazFrontendDarkmode = ' . json_encode(
        ['defaultThemeMode'  =>  $ncmaz_redux_demo['nc-general-settings--general-default-theme-mode']]
    ), 'before');

    //
    wp_enqueue_script('ncmaz-frontend-js', _NCMAZ_FRONTEND_DIR_URL . 'dist/js/customizer.js', array(), _NCMAZ_FRONTEND_VERSION, true);

    // =============
    $monthNames = array_map(array(&$wp_locale, 'get_month'), range(1, 12));
    $monthNamesShort = array_map(array(&$wp_locale, 'get_month_abbrev'), $monthNames);
    $dayNames = array_map(array(&$wp_locale, 'get_weekday'), range(0, 6));
    $dayNamesShort = array_map(array(&$wp_locale, 'get_weekday_abbrev'), $dayNames);

    wp_add_inline_script('ncmaz-frontend-js', 'window.DATE_I18N = ' . json_encode(
        [
            "month_names" => $monthNames,
            "month_names_short" => $monthNamesShort,
            "day_names" => $dayNames,
            "day_names_short" => $dayNamesShort
        ]
    ), 'before');


    $nc_post_formats = get_theme_support('post-formats');
    $nc_post_formats =  is_array($nc_post_formats[0])  ? $nc_post_formats[0] : [];

    wp_add_inline_script('ncmaz-frontend-js', 'window.frontendObject = ' . json_encode(
        [
            'ajaxurl'               => admin_url('admin-ajax.php'),
            'stylesheetDirectory'   => get_template_directory_uri(),
            'restUrl'               => get_rest_url(),
            'dateFormat'            => get_option('date_format'),
            'placeholderImg'        => get_template_directory_uri() . '/placeholder-small.png',
            'graphQLBasePath'       => get_site_url(null, '/graphql'),
            'socialsShare'          => $ncmaz_redux_demo['nc-general-settings--multi-socials-share'],
            'homeURL'               => get_site_url(),
            'currentUser'           => $currentUser ? $currentUser['data']['viewer'] : null,
            'allSettings'           => $allSettings ? $allSettings['data']['allSettings'] : null,
            'currentObject'         => ['id'        => get_the_ID()],
            'pll_current_language'        => function_exists('pll_current_language') ? strtoupper(pll_current_language()) : null,
            'pll_themeoption_actived'     => (function_exists('pll_current_language') && boolval($ncmaz_redux_demo['nc-general-settings--general-switch-polylang'])) ? 'true' : null,
            'musicPlayerMode'             => $ncmaz_redux_demo['nc-general-settings--music-player-opt-switch'] ? "true" : null,
            'musicPlayerMediaSource'      => $ncmaz_redux_demo['nc-general-settings--music-player-media-source'],
            'restVarsEndpoint'            => esc_url_raw(rest_url('/wp/v2/media/')),
            'restVarsNonce'               => wp_create_nonce('wp_rest'),
            'postFormats'                 => $nc_post_formats,
        ]
    ), 'before');

    wp_add_inline_script('ncmaz-frontend-js', 'window.ncmazFrontendVariables = ' . json_encode(
        [
            'pluginDir'             => _NCMAZ_FRONTEND_DIR_URL,
            'pluginDistImagesDir'   => _NCMAZ_FRONTEND_DIR_URL . 'dist/images/',
        ]
    ), 'before');
}
add_action('wp_enqueue_scripts', 'ncmazFrontend_enqueueScriptCustomize');
//

// ======================== ENABLE WHEN PRODUCT/DEPLOY MODE ========================
// add_action('wp_enqueue_scripts', 'ncmazFrontend_registerScripts');
function ncmazFrontend_registerScripts()
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
    $name = 'vitejs-main-module--' . $jsFileUrl;
    // JS
    wp_enqueue_script($name, _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $jsFileUrl, [], null, true);
    // CSS
    wp_enqueue_style('ncmaz-vitebuild-css', _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $cssFileUrl, [], _NCMAZ_FRONTEND_VERSION, 'all');
    // RTL styles.
    wp_style_add_data('ncmaz-vitebuild-css', 'rtl', 'replace');
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
