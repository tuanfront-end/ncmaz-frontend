<?php

function ncmazGetOptionForSectionTrendingArchivePage()
{
    global $ncmaz_redux_demo;
    if (!$ncmaz_redux_demo) return [];

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



// UPDATE VIEW COUNT SINGLE PAGE
function my_acf_prepare_field($field)
{
    $field['readonly'] = true;
    return $field;
}
add_filter('acf/prepare_field/name=views_count', 'my_acf_prepare_field');

// 
function ncmazcoreUpdateViewsCountOnSinglePage($content)
{
    if (!is_single()) {
        return $content;
    }

    if (is_single()) {
        $count = (int) get_field('views_count');
        $count++;
        update_field('views_count', $count);
    }
    return $content;
}
add_filter('the_content', 'ncmazcoreUpdateViewsCountOnSinglePage');
