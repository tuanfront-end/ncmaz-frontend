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
