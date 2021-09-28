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
