<?php

function ncmaz_update_count_views($postID)
{
    if (!function_exists('get_field') || !function_exists('update_field')) {
        return false;
    }

    $count = (int) get_field('views_count', $postID);
    $count++;
    update_field('views_count', $count, $postID);
}
// 
