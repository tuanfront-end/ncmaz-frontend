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
