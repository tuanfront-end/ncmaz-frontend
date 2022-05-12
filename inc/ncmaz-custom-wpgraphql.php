<?php

// CUSTOM  https://www.wpgraphql.com/recipes/

// =====================    Remove Extensions from GraphQL Response     ==============================
add_filter('graphql_request_results', function ($response) {
    if (is_array($response) && isset($response['extensions'])) {
        unset($response['extensions']);
    }
    if (is_object($response) && isset($response->extensions)) {
        unset($response->extensions);
    }
    return $response;
}, 99, 1);

// =====================    ORDER BY VIEWS_COUNT     ==============================
add_filter('graphql_PostObjectsConnectionOrderbyEnum_values', function ($values) {
    $values['VIEWS_COUNT'] = [
        'value' => 'views_count',
        'description' => __('The number of views on the post', 'ncmaz-frontend'),
    ];
    return $values;
});

add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $input) {
    if (isset($input['where']['orderby']) && is_array($input['where']['orderby'])) {
        foreach ($input['where']['orderby'] as $orderby) {
            if (!isset($orderby['field']) || 'views_count' !== $orderby['field']) {
                continue;
            }
            $query_args['meta_key'] = 'views_count';
            $query_args['orderby'] = 'meta_value_num';
            $query_args['order'] = $orderby['order'];
        }
    }
    return $query_args;
}, 10, 3);

// =====================    ORDER BY FAVORITE_COUNT     ==============================
add_filter('graphql_PostObjectsConnectionOrderbyEnum_values', function ($values) {
    $values['FAVORITES_COUNT'] = [
        'value' => 'simplefavorites_count',
        'description' => __('The number of favorites count on the post', 'ncmaz-frontend'),
    ];
    return $values;
});

add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $input) {
    if (isset($input['where']['orderby']) && is_array($input['where']['orderby'])) {
        foreach ($input['where']['orderby'] as $orderby) {
            if (!isset($orderby['field']) || 'simplefavorites_count' !== $orderby['field']) {
                continue;
            }
            $query_args['meta_key'] = 'simplefavorites_count';
            $query_args['orderby'] = 'meta_value_num';
            $query_args['order'] = $orderby['order'];
        }
    }
    return $query_args;
}, 10, 3);

// MAKE ALL AUTHOR IS PUBLIC
add_filter('graphql_connection_query_args', function ($query_args, $connection_resolver) {
    if ($connection_resolver instanceof \WPGraphQL\Data\Connection\UserConnectionResolver) {
        unset($query_args['has_published_posts']);
    }
    return $query_args;
}, 10, 2);

add_filter('graphql_object_visibility', function ($visibility, $model_name, $data, $owner, $current_user) {
    // only apply our adjustments to the UserObject Model
    if ('UserObject' === $model_name) {
        $visibility = 'public';
    }
    return $visibility;
}, 10, 5);


// =========== THEM CAC FILEDS VAO MUTATION ... ================= 
add_action('graphql_input_fields', function ($fields, $type_name, $config) {
    if ($type_name === 'CreatePostInput' || $type_name === 'UpdatePostInput') {
        $fields = array_merge($fields, [
            'ncFeaturedImageDatabaseId' => ['type' => 'Int'],
            'ncmazAudioUrl' => ['type' => 'String'],
            'ncmazVideoUrl' => ['type' => 'String'],
            // 
            'ncmazGalleryImgs_1_databaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs_2_databaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs_3_databaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs_4_databaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs_5_databaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs_6_databaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs_7_databaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs_8_databaseID' => ['type' => 'Int'],
        ]);
    }
    if ($type_name === 'UpdateUserInput') {
        $fields = array_merge($fields, [
            'ncmazFeaturedImage'        => ['type' => 'Int'],
            'ncmazBackgroundImage'      => ['type' => 'Int'],
            'ncmazBio'                  => ['type' => 'String'],
            'ncmazYoutubeUrl'           => ['type' => 'String'],
            'ncmazFacebookUrl'          => ['type' => 'String'],
            'ncmazMediumUrl'            => ['type' => 'String'],
            'ncmazGithubUrl'            => ['type' => 'String'],
            'ncmazVimeoUrl'             => ['type' => 'String'],
            'ncmazTwitterUrl'           => ['type' => 'String'],
            'ncmazInstagramUrl'         => ['type' => 'String'],
            'ncmazLinkedinUrl'          => ['type' => 'String'],
            'ncmazPinterestUrl'         => ['type' => 'String'],
            'ncmazTwitchUrl'            => ['type' => 'String'],
            'ncmazWebsiteUrl'           => ['type' => 'String'],
            'ncmazBuymeacoffeUrl'       => ['type' => 'String'],
        ]);
    }
    return $fields;
}, 20, 3);


add_action('graphql_post_object_mutation_update_additional_data', function ($post_id, $input, $mutation_name, $context, $info) {

    if (isset($input['ncmazAudioUrl'])) {
        update_field('audio_url', $input['ncmazAudioUrl'], $post_id);
    }
    if (isset($input['ncmazVideoUrl'])) {
        update_field('video_url', $input['ncmazVideoUrl'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs_1_databaseID'])) {
        update_field('image_1', $input['ncmazGalleryImgs_1_databaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs_2_databaseID'])) {
        update_field('image_2', $input['ncmazGalleryImgs_2_databaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs_3_databaseID'])) {
        update_field('image_3', $input['ncmazGalleryImgs_3_databaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs_4_databaseID'])) {
        update_field('image_4', $input['ncmazGalleryImgs_4_databaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs_5_databaseID'])) {
        update_field('image_5', $input['ncmazGalleryImgs_5_databaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs_6_databaseID'])) {
        update_field('image_6', $input['ncmazGalleryImgs_6_databaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs_7_databaseID'])) {
        update_field('image_7', $input['ncmazGalleryImgs_7_databaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs_8_databaseID'])) {
        update_field('image_8', $input['ncmazGalleryImgs_8_databaseID'], $post_id);
    }
    if (!empty($input['ncFeaturedImageDatabaseId'])) {
        set_post_thumbnail($post_id,  $input['ncFeaturedImageDatabaseId']);
    } else {
        delete_post_thumbnail($post_id);
    }
}, 10, 5);

add_action('graphql_user_object_mutation_update_additional_data', function ($user_id, $input, $mutation_name, $context, $info) {
    $user_id = "user_" . $user_id;
    if (isset($input['ncmazFeaturedImage'])) {
        update_field('featured_image', $input['ncmazFeaturedImage'], $user_id);
    }
    if (isset($input['ncmazBackgroundImage'])) {
        update_field('background_image', $input['ncmazBackgroundImage'], $user_id);
    }
    if (isset($input['ncmazBio'])) {
        update_field('nc_bio', $input['ncmazBio'], $user_id);
    }
    if (isset($input['ncmazYoutubeUrl'])) {
        update_field('youtube_url', $input['ncmazYoutubeUrl'], $user_id);
    }
    if (isset($input['ncmazFacebookUrl'])) {
        update_field('facebook_url', $input['ncmazFacebookUrl'], $user_id);
    }
    if (isset($input['ncmazMediumUrl'])) {
        update_field('medium_url', $input['ncmazMediumUrl'], $user_id);
    }
    if (isset($input['ncmazGithubUrl'])) {
        update_field('github_url', $input['ncmazGithubUrl'], $user_id);
    }
    if (isset($input['ncmazVimeoUrl'])) {
        update_field('vimeo_url', $input['ncmazVimeoUrl'], $user_id);
    }
    if (isset($input['ncmazTwitterUrl'])) {
        update_field('twitter_url', $input['ncmazTwitterUrl'], $user_id);
    }
    if (isset($input['ncmazInstagramUrl'])) {
        update_field('instagram_url', $input['ncmazInstagramUrl'], $user_id);
    }
    if (isset($input['ncmazLinkedinUrl'])) {
        update_field('linkedin_url', $input['ncmazLinkedinUrl'], $user_id);
    }
    if (isset($input['ncmazPinterestUrl'])) {
        update_field('pinterest_url', $input['ncmazPinterestUrl'], $user_id);
    }
    if (isset($input['ncmazTwitchUrl'])) {
        update_field('twitch_url', $input['ncmazTwitchUrl'], $user_id);
    }
    if (isset($input['ncmazWebsiteUrl'])) {
        update_field('website_url', $input['ncmazWebsiteUrl'], $user_id);
    }
    if (isset($input['ncmazBuymeacoffeUrl'])) {
        update_field('buymeacoffe_url', $input['ncmazBuymeacoffeUrl'], $user_id);
    }
}, 10, 5);
