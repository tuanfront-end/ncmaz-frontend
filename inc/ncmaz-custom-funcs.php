<?php

if (!function_exists('ncmazFe_getPageType')) :
    function ncmazFe_getPageType()
    {
        global $wp_query;
        $loop = 'notfound';

        if ($wp_query->is_page) {
            $loop = is_front_page() ? 'front' : 'page';
        } elseif ($wp_query->is_home) {
            $loop = 'home';
        } elseif ($wp_query->is_single) {
            $loop = ($wp_query->is_attachment) ? 'attachment' : 'single';
        } elseif ($wp_query->is_category) {
            $loop = 'category';
        } elseif ($wp_query->is_tag) {
            $loop = 'tag';
        } elseif ($wp_query->is_tax) {
            $loop = 'tax';
        } elseif ($wp_query->is_archive) {
            if ($wp_query->is_day) {
                $loop = 'day';
            } elseif ($wp_query->is_month) {
                $loop = 'month';
            } elseif ($wp_query->is_year) {
                $loop = 'year';
            } elseif ($wp_query->is_author) {
                $loop = 'author';
            } else {
                $loop = 'archive';
            }
        } elseif ($wp_query->is_search) {
            $loop = 'search';
        } elseif ($wp_query->is_404) {
            $loop = 'notfound';
        }

        return $loop;
    }
endif;

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
				description
                ncUserMeta {
                    ncBio
                    youtubeUrl
                    facebookUrl
                    mediumUrl
                    githubUrl
                    vimeoUrl
                    twitterUrl
                    instagramUrl
                    linkedinUrl
                    pinterestUrl
                    twitchUrl
                    websiteUrl
                    buymeacoffeUrl
                    backgroundImage {
                      id
                      altText
                      caption
                      databaseId
                      sizes
                      sourceUrl
                      srcSet
                    }
                    featuredImage {
                      id
                      altText
                      caption
                      databaseId
                      sizes
                      sourceUrl
                      srcSet
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

// CHECK Page NcmazAccountUrl or Page PostSubmissionEditorUrl BY POST-ID
function checkPageNcmazAccountOrPostSubmissionEditor($postID)
{
    global $ncmaz_redux_demo;
    if (empty($ncmaz_redux_demo) || !function_exists('ncmazFe_getIDBySlug')) {
        return null;
    }

    if ('page' === get_post_type($postID)) {
        $variablePageNcmazAccount = $ncmaz_redux_demo['adv-global-variable--pageNcmazAccountUrl'];
        $variablePagePostSubmissionEditor = $ncmaz_redux_demo['adv-global-variable--pagePostSubmissionEditorUrl'];

        if (intval($variablePageNcmazAccount) === $postID) {
            return 'pageNcmazAccountUrl';
        }
        if (empty($variablePageNcmazAccount) || !get_permalink($variablePageNcmazAccount)) {
            if (ncmazFe_getIDBySlug('ncmaz-account') ===  $postID) {
                return 'pageNcmazAccountUrl';
            }
        }

        if (intval($variablePagePostSubmissionEditor) === $postID) {
            return 'pagePostSubmissionEditorUrl';
        }
        if (empty($variablePagePostSubmissionEditor) || !get_permalink($variablePagePostSubmissionEditor)) {
            if (ncmazFe_getIDBySlug('ncmaz-submission-post-editor') === $postID) {
                return 'pagePostSubmissionEditorUrl';
            }
        }
    }

    return null;
}

// GET Readingtime shortcode DOM
function ncmazFe_getReadingTimeDom($postID)
{
    if (!class_exists('Reading_Time_WP')) {
        return "";
    }

    $NcReadingTime = new Reading_Time_WP;
    $rt_reading_time_options = get_option('rt_reading_time_options');
    $atts = array(
        'label'            =>  $rt_reading_time_options['label'],
        'postfix'          => $rt_reading_time_options['postfix'],
        'postfix_singular' => $rt_reading_time_options['postfix_singular'],
        'post_id'          => $postID
    );
    return $NcReadingTime->rt_reading_time($atts);
}

// ===
function ncmazFe_checkEnableCountViewFeature()
{
    global $ncmaz_redux_demo;
    if (empty($ncmaz_redux_demo) || !defined('_NCMAZ_FRONTEND_VERSION') || !boolval($ncmaz_redux_demo['nc-single-page-settings--general-switch-count-views'])) {
        return false;
    }
    return true;
}

// 
/* Convert hexdec color string to rgb string */
function ncmazFe_hex2rgba(string $color = "#000000")
{

    $default = 'rgb(0,0,0)';

    //Return default if no color provided
    if (empty($color))
        return $default;

    //Sanitize $color if "#" is provided 
    if ($color[0] == '#') {
        $color = substr($color, 1);
    }

    //Check if color has 6 or 3 characters and get values
    if (strlen($color) == 6) {
        $hex = array($color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5]);
    } elseif (strlen($color) == 3) {
        $hex = array($color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2]);
    } else {
        return $default;
    }

    //Convert hexadec to rgb
    $rgb =  array_map('hexdec', $hex);
    return  implode(",", $rgb);

    // $output = 'rgb(' . implode(",", $rgb) . ')';
    // return $output;
}
