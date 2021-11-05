<?php
// =================================================================================
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
            '/^edentuan-xxx-vitejs-module--/',
            $handle,
        ))
    ) {
        return  $tag = '<script id="' . esc_attr($handle) . '" type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
// =================================================================================



function getCurrentUserGraphql()
{
    $userID = get_current_user_id();
    if (!function_exists('graphql') || !$userID) {
        return null;
    }
    return graphql([
        'query' => ' {
            user(idType: DATABASE_ID, id: ' . $userID . ') {
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
                registeredDate
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
        return null;
    }
    return graphql([
        'query' => '{
            allSettings {
                discussionSettingsDefaultCommentStatus
                discussionSettingsDefaultPingStatus
                generalSettingsDateFormat
                generalSettingsDescription
                generalSettingsEmail
                generalSettingsLanguage
                generalSettingsStartOfWeek
                generalSettingsTimeFormat
                generalSettingsTimezone
                generalSettingsTitle
                generalSettingsUrl
                readingSettingsPostsPerPage
                writingSettingsDefaultCategory
                writingSettingsDefaultPostFormat
                writingSettingsUseSmilies
              }
        }'
    ]);
}

// JAVASCRIPT
function ncmazFrontend_enqueueScriptCustomize()
{
    wp_enqueue_script('ncmaz-frontend-js', _NCMAZ_FRONTEND_DIR_URL . 'public/js/customizer.js', array(), _NCMAZ_FRONTEND_VERSION, true);
    $currentUser = getCurrentUserGraphql();
    $allSettings = getAllSettingsGraphql();

    global $wp_locale;
    global $ncmaz_redux_demo;

    // =============
    $monthNames = array_map(array(&$wp_locale, 'get_month'), range(1, 12));
    $monthNamesShort = array_map(array(&$wp_locale, 'get_month_abbrev'), $monthNames);
    $dayNames = array_map(array(&$wp_locale, 'get_weekday'), range(0, 6));
    $dayNamesShort = array_map(array(&$wp_locale, 'get_weekday_abbrev'), $dayNames);
    wp_localize_script("ncmaz-frontend-js", "DATE_I18N", array(
        "month_names" => $monthNames,
        "month_names_short" => $monthNamesShort,
        "day_names" => $dayNames,
        "day_names_short" => $dayNamesShort
    ));

    wp_localize_script(
        'ncmaz-frontend-js',
        'frontendObject',
        array(
            'ajaxurl'               => admin_url('admin-ajax.php'),
            'stylesheetDirectory'   => get_template_directory_uri(),
            'restUrl'               => get_rest_url(),
            'dateFormat'            => get_option('date_format'),
            'placeholderImg'        => get_template_directory_uri() . '/placeholder-small.png',
            'graphQLBasePath'       => get_site_url(null, '/graphql'),
            'frontendTranslate'     => $ncmaz_redux_demo['nc-general-settings--translate-js-editor'],
            'homeURL'               => get_site_url(),
            'currentUser'           => $currentUser ? $currentUser['data']['user'] : null,
            'allSettings'           => $allSettings ? $allSettings['data']['allSettings'] : null,
            'currentObject'         => [
                'id'        => get_the_ID()
            ]
        )
    );

    wp_localize_script(
        'ncmaz-frontend-js',
        'ncmazFrontendVariables',
        array(
            'pluginDir' => _NCMAZ_FRONTEND_DIR_URL,
            'emptyStatePng' => _NCMAZ_FRONTEND_DIR_URL . 'public/images/empty.png'
        )
    );
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
    $name = 'edentuan-xxx-vitejs-module--' . _NCMAZ_FRONTEND_PREFIX . $jsFileUrl;
    // JS
    wp_enqueue_script($name, _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $jsFileUrl, [], _NCMAZ_FRONTEND_VERSION, true);
    // CSS
    wp_enqueue_style('ncmaz-vitebuild-css', _NCMAZ_FRONTEND_DIR_URL . 'dist/' . $cssFileUrl, [], _NCMAZ_FRONTEND_VERSION, 'all');
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
    window.__vite_plugin_react_preamble_installed__ = true
</script>';

    wp_enqueue_script('@vite-client-js', 'http://localhost:3000/@vite/client', [], null, true);
    wp_enqueue_script('ncmaz-frontend-src-main-tsx', 'http://localhost:3000/src/main.tsx', [], null, true);
}
// --------------------------------------------------------------------------------------
