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
function ncmaz_frontend_enqueue_scripts_2()
{
    wp_enqueue_script('ncmaz-frontend-js', _NCMAZ_FRONTEND_DIR_URL . 'dist/js/customizer.js', array(), _NCMAZ_FRONTEND_VERSION, true);
    $currentUser = getCurrentUserGraphql();
    $allSettings = getAllSettingsGraphql();
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
            'value2'                => 'value 2',
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
add_action('wp_enqueue_scripts', 'ncmaz_frontend_enqueue_scripts_2');

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

// add_action('wp_enqueue_scripts', 'registerScripts');
function registerScripts()
{
    $dirJS = [];
    // WILL ENABLE WHEN DEPLOY BUILD PRODUCT
    if (file_exists(_NCMAZ_FRONTEND_DIR_PATH . 'dist/assets')) {
        $dirJS = new DirectoryIterator(_NCMAZ_FRONTEND_DIR_PATH . 'dist/assets');
    }
    foreach ($dirJS as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'js') {
            $fullName = basename($file);
            $name = 'edentuan-xxx-vitejs-module--' . _NCMAZ_FRONTEND_PREFIX . substr(basename($fullName), 0, strpos(basename($fullName), '.'));
            wp_enqueue_script($name, _NCMAZ_FRONTEND_DIR_URL . 'dist/assets/' . $fullName, [], _NCMAZ_FRONTEND_VERSION, true);
        }
    }
}


add_action('wp_enqueue_scripts', 'registerStyles');
function registerStyles()
{
    $dirCSS = [];
    // WILL ENABLE WHEN DEPLOY BUILD
    if (file_exists(_NCMAZ_FRONTEND_DIR_PATH . 'dist/assets')) {
        $dirCSS = new DirectoryIterator(_NCMAZ_FRONTEND_DIR_PATH . 'dist/assets');
    }

    foreach ($dirCSS as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'css') {
            $fullName = basename($file);
            $name = _NCMAZ_FRONTEND_PREFIX . substr(basename($fullName), 0, strpos(basename($fullName), '.'));
            wp_enqueue_style($name, _NCMAZ_FRONTEND_DIR_URL . 'dist/assets/' . $fullName, [], _NCMAZ_FRONTEND_VERSION, 'all');
        }
    }
}


// --------------------------------------------------------------------------------------
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
add_action('wp_enqueue_scripts', 'ncmaz_frontend_enqueue_script');
// --------------------------------------------------------------------------------------
