<?php

// ============ FUNCTION DUOC GOI O TRANG ARCHIVE.PHP (TRONG THEME)
function ncmazGetOptionForSectionTrendingArchivePage()
{
    global $ncmaz_redux_demo;
    if (empty($ncmaz_redux_demo)) {
        return [];
    }

    $enableSectionTrendingCats = boolval($ncmaz_redux_demo['nc-archive-page-settings--section-top10-categories-switch-toggle']);
    if ($enableSectionTrendingCats) {
        if (!is_category()) {
            $enableSectionTrendingCats = !boolval($ncmaz_redux_demo['nc-archive-page-settings--section-top10-categories-only-category-page']);
        }
    }

    return [
        'enable'                     =>   $enableSectionTrendingCats,
        'orderBy'                     =>   $ncmaz_redux_demo['nc-archive-page-settings--section-top10-categories-select-orderby'],
        'heading'                     =>   $ncmaz_redux_demo['nc-archive-page-settings--section-top10-categories-heading'],
        'subHeading'                 =>   $ncmaz_redux_demo['nc-archive-page-settings--section-top10-categories-sub-heading'],
        'itemPerPage'                 =>   $ncmaz_redux_demo['nc-archive-page-settings--section-top10-categories-number-items'],
    ];
}


// ============ READ ONLY SOME AFC FIELDS ============
function my_acf_prepare_field($field)
{
    $field['readonly'] = true;
    return $field;
}
add_filter('acf/prepare_field/name=views_count', 'my_acf_prepare_field');


// ============ GET CURRENT USER BY GRAPHQL
function ncmazFe_getCurrentUserGraphql()
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
                id
                email
                name
                ncUserMeta {
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
                roles {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
            }
		}'
    ]);
}

// ============ GET ALL SETTINGS BY GRAPHQL
function ncmazFe_getAllSettingsGraphql()
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


// ============ GET LINK BY SLUG 
function ncmazFe_getLinkBySlug($slug, $type = 'page')
{
    $oPage = get_page_by_path($slug, OBJECT, $type);
    if (empty($oPage)) {
        return "";
    }
    return get_permalink($oPage->ID);
}

// ============ GET ID BY SLUG 
function ncmazFe_getIDBySlug($slug, $type = 'page')
{
    $oPage = get_page_by_path($slug, OBJECT, $type);
    if (empty($oPage)) {
        return "";
    }
    return $oPage->ID;
}
