<?php

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
            'github' => ['type' => 'String'],
            'linkedIn' => ['type' => 'String'],
            'twitter' => ['type' => 'String'],
        ]);
    }
    return $fields;
}, 20, 3);



add_action('graphql_post_object_mutation_update_additional_data', function ($post_id, $input, $mutation_name, $context, $info) {
    // if ( ! empty( $input['example'] ) ) {
    // 	update_post_meta( $post_id, 'example', $input['example'] );
    // }
    if (!empty($input['ncmazAudioUrl'])) {
        update_field('audio_url', $input['ncmazAudioUrl'], $post_id);
    }
    if (!empty($input['ncmazVideoUrl'])) {
        update_field('video_url', $input['ncmazVideoUrl'], $post_id);
    }
    if (!empty($input['ncmazGalleryImgs_1_databaseID'])) {
        update_field('image_1', $input['ncmazGalleryImgs_1_databaseID'], $post_id);
    }
    if (!empty($input['ncmazGalleryImgs_2_databaseID'])) {
        update_field('image_2', $input['ncmazGalleryImgs_2_databaseID'], $post_id);
    }
    if (!empty($input['ncmazGalleryImgs_3_databaseID'])) {
        update_field('image_3', $input['ncmazGalleryImgs_3_databaseID'], $post_id);
    }
    if (!empty($input['ncmazGalleryImgs_4_databaseID'])) {
        update_field('image_4', $input['ncmazGalleryImgs_4_databaseID'], $post_id);
    }
    if (!empty($input['ncmazGalleryImgs_5_databaseID'])) {
        update_field('image_5', $input['ncmazGalleryImgs_5_databaseID'], $post_id);
    }
    if (!empty($input['ncmazGalleryImgs_6_databaseID'])) {
        update_field('image_6', $input['ncmazGalleryImgs_6_databaseID'], $post_id);
    }
    if (!empty($input['ncmazGalleryImgs_7_databaseID'])) {
        update_field('image_7', $input['ncmazGalleryImgs_7_databaseID'], $post_id);
    }
    if (!empty($input['ncmazGalleryImgs_8_databaseID'])) {
        update_field('image_8', $input['ncmazGalleryImgs_8_databaseID'], $post_id);
    }
    if (!empty($input['ncFeaturedImageDatabaseId'])) {
        set_post_thumbnail($post_id,  $input['ncFeaturedImageDatabaseId']);
    }
}, 10, 5);

add_action('graphql_user_object_mutation_update_additional_data', function ($user_id, $input, $mutation_name, $context, $info) {
    if (isset($input['github'])) {
        // Consider other sanitization if necessary and validation such as which
        // user role/capability should be able to insert this value, etc.
        update_user_meta($user_id, 'github', $input['github']);
    }
    if (isset($input['linkedIn'])) {
        // Consider other sanitization if necessary and validation such as which
        // user role/capability should be able to insert this value, etc.
        update_user_meta($user_id, 'linkedin', $input['linkedIn']);
    }
    if (isset($input['twitter'])) {
        // Consider other sanitization if necessary and validation such as which
        // user role/capability should be able to insert this value, etc.
        update_user_meta($user_id, 'twitter', $input['twitter']);
    }
}, 10, 5);
