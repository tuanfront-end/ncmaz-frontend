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
            'ncTags'        => ['type' => 'String'],
            'ncFeaturedImageDatabaseId' => ['type' => 'Int'],
            'ncmazAudioUrl' => ['type' => 'String'],
            'ncmazVideoUrl' => ['type' => 'String'],
            // 
            'ncmazGalleryImgs1DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs2DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs3DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs4DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs5DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs6DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs7DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs8DatabaseID' => ['type' => 'Int'],
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

    if (!empty($input['ncTags'])) {
        wp_set_post_tags($post_id, $input['ncTags'], true);
    }

    if (isset($input['ncmazAudioUrl'])) {
        update_field('audio_url', $input['ncmazAudioUrl'], $post_id);
    }
    if (isset($input['ncmazVideoUrl'])) {
        update_field('video_url', $input['ncmazVideoUrl'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs1DatabaseID'])) {
        update_field('image_1', $input['ncmazGalleryImgs1DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs2DatabaseID'])) {
        update_field('image_2', $input['ncmazGalleryImgs2DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs3DatabaseID'])) {
        update_field('image_3', $input['ncmazGalleryImgs3DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs4DatabaseID'])) {
        update_field('image_4', $input['ncmazGalleryImgs4DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs5DatabaseID'])) {
        update_field('image_5', $input['ncmazGalleryImgs5DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs6DatabaseID'])) {
        update_field('image_6', $input['ncmazGalleryImgs6DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs7DatabaseID'])) {
        update_field('image_7', $input['ncmazGalleryImgs7DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs8DatabaseID'])) {
        update_field('image_8', $input['ncmazGalleryImgs8DatabaseID'], $post_id);
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

//
add_action('graphql_register_types', function () {
    register_graphql_object_type(
        'NcPostMetaDataType',
        [
            'description' => __('Post Custom MetaData Type', 'ncmaz-frontend'),
            'fields'      => [
                'readingTimeShortcode' => [
                    'type'        => 'String',
                    'description' => __('Reading time shortcode DOM (String)', 'ncmaz-frontend'),
                ],
                'viewsCount'  => [
                    'type'        => 'Int',
                    'description' => __('View count (Int)', 'ncmaz-frontend'),
                ],
                'singlePageStyle'       => [
                    'type'        => 'String',
                    'description' => __('Single page style (String)', 'ncmaz-frontend'),
                ],
                'showRightSidebar'       => [
                    'type'        => 'Bool',
                    'description' => __('Show/Hide right-sidebar of this single', 'ncmaz-frontend'),
                ],
                'favoriteButtonShortcode'   => [
                    'type'        => 'String',
                    'description' => __('Favorite Button Shortcode DOM', 'ncmaz-frontend'),
                ],
                'fieldGroupName'   => [
                    'type'        => 'String',
                    'description' => 'fieldGroupName'
                ],
            ],
        ]
    );
    register_graphql_field(
        'ContentNode',
        'ncPostMetaData',
        [
            'description'   => __('Return stunt performers', 'bsr'),
            'type'          => 'NcPostMetaDataType',
            'resolve'       => function (\WPGraphQL\Model\Post $post, $args, $context, $info) {
                $postID = $post->databaseId;

                return (object) [
                    'readingTimeShortcode'      =>  function_exists('ncmazFe_getReadingTimeDom') ? ncmazFe_getReadingTimeDom($postID) : '',
                    'favoriteButtonShortcode'   =>  function_exists('get_favorites_button') ? get_favorites_button($postID) : '',
                    'fieldGroupName'            =>  'ncPostMetaData',
                    'showRightSidebar'          =>  function_exists('get_field') ? get_field('show_right_sidebar', $postID) : null,
                    'singlePageStyle'           =>  function_exists('get_field') ? get_field('single_page_style', $postID) : null,
                    'viewsCount'                =>  function_exists('get_field') ? get_field('views_count', $postID) : 1,
                ];
            }
        ]
    );
});
