<?php

function ncmaz_update_count_views($postID)
{
    $count = (int) get_field('views_count', $postID);
    $count++;
    update_field('views_count', $count, $postID);
}
// 
