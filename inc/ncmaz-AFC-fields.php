<?php
add_action('acf/init', 'ncmazFrontend_acf_add_local_field_groups');
function ncmazFrontend_acf_add_local_field_groups()
{
    if (function_exists('acf_add_local_field_group')) :

        acf_add_local_field_group(array(
            'key' => 'group_ncmazAudioUrl',
            'title' => 'ncmazAudioUrl',
            'fields' => array(
                array(
                    'key' => 'field_615317803e567',
                    'label' => 'audio Url',
                    'name' => 'audio_url',
                    'type' => 'url',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_format',
                        'operator' => '==',
                        'value' => 'audio',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
            'show_in_graphql' => 1,
            'graphql_field_name' => 'ncmazAudioUrl',
            'map_graphql_types_from_location_rules' => 0,
            'graphql_types' => '',
        ));

        acf_add_local_field_group(array(
            'key' => 'group_61531944c1a9f',
            'title' => 'ncmazGalleryImgs',
            'fields' => array(
                array(
                    'key' => 'field_6153196407eda',
                    'label' => 'image1',
                    'name' => 'image_1',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'url',
                    'preview_size' => 'thumbnail',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_6153199307edb',
                    'label' => 'image2',
                    'name' => 'image_2',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'url',
                    'preview_size' => 'thumbnail',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_615319a207edc',
                    'label' => 'image3',
                    'name' => 'image_3',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'url',
                    'preview_size' => 'thumbnail',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_615319a907edd',
                    'label' => 'image4',
                    'name' => 'image_4',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'url',
                    'preview_size' => 'thumbnail',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_615319b607ede',
                    'label' => 'image5',
                    'name' => 'image_5',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'url',
                    'preview_size' => 'thumbnail',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_615319be07edf',
                    'label' => 'image6',
                    'name' => 'image_6',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'url',
                    'preview_size' => 'thumbnail',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_615319c907ee0',
                    'label' => 'image7',
                    'name' => 'image_7',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'url',
                    'preview_size' => 'thumbnail',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_615319d207ee1',
                    'label' => 'image8',
                    'name' => 'image_8',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'url',
                    'preview_size' => 'thumbnail',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_format',
                        'operator' => '==',
                        'value' => 'gallery',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
            'show_in_graphql' => 1,
            'graphql_field_name' => 'ncmazGalleryImgs',
            'map_graphql_types_from_location_rules' => 0,
            'graphql_types' => '',
        ));

        acf_add_local_field_group(array(
            'key' => 'group_6153172f84fd0',
            'title' => 'ncmazVideoUrl',
            'fields' => array(
                array(
                    'key' => 'field_6153174a5583d',
                    'label' => 'video Url',
                    'name' => 'video_url',
                    'type' => 'url',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_format',
                        'operator' => '==',
                        'value' => 'video',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
            'show_in_graphql' => 1,
            'graphql_field_name' => 'ncmazVideoUrl',
            'map_graphql_types_from_location_rules' => 0,
            'graphql_types' => '',
        ));

        acf_add_local_field_group(array(
            'key' => 'group_61531796982ba',
            'title' => 'ncPostMetaData',
            'fields' => array(
                array(
                    'key' => 'field_615317bb8ab81',
                    'label' => 'Favorite Button Shortcode',
                    'name' => 'favorite_button_shortcode',
                    'type' => 'wysiwyg',
                    'instructions' => '[favorite_button]',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => 'hidden',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '[favorite_button]',
                    'tabs' => 'text',
                    'toolbar' => 'basic',
                    'media_upload' => 0,
                    'delay' => 0,
                ),
                array(
                    'key' => 'field_615318d18ab82',
                    'label' => 'Reading Time Shortcode',
                    'name' => 'reading_time_shortcode',
                    'type' => 'wysiwyg',
                    'instructions' => '[rt_reading_time label="" postfix="minutes" postfix_singular="minute"]',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => 'hidden',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '[rt_reading_time label="" postfix="minutes" postfix_singular="minute"]',
                    'tabs' => 'text',
                    'media_upload' => 0,
                    'toolbar' => 'basic',
                    'delay' => 0,
                ),

                array(
                    'key' => 'field_61532afb973d2',
                    'label' => 'single page style',
                    'name' => 'single_page_style',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'choices' => array(
                        1 => '1',
                        2 => '2',
                        3 => '3',
                    ),
                    'default_value' => false,
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'return_format' => 'value',
                    'ajax' => 0,
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_61532b44973d3',
                    'label' => 'Show right sidebar',
                    'name' => 'show_right_sidebar',
                    'type' => 'true_false',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_615319018ab83',
                    'label' => 'Views Count',
                    'name' => 'views_count',
                    'type' => 'number',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => 1,
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'min' => 1,
                    'max' => '',
                    'step' => 1,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'post',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
            'show_in_graphql' => 1,
            'graphql_field_name' => 'ncPostMetaData',
            'map_graphql_types_from_location_rules' => 0,
            'graphql_types' => '',
        ));

        acf_add_local_field_group(array(
            'key' => 'group_6153167c42978',
            'title' => 'ncTaxonomyMeta',
            'fields' => array(
                array(
                    'key' => 'field_6153169776754',
                    'label' => 'color',
                    'name' => 'color',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'choices' => array(
                        'pink' => 'pink',
                        'red' => 'red',
                        'gray' => 'gray',
                        'green' => 'green',
                        'purple' => 'purple',
                        'indigo' => 'indigo',
                        'yellow' => 'yellow',
                        'blue' => 'blue',
                    ),
                    'default_value' => 'green',
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'return_format' => 'value',
                    'ajax' => 0,
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_615316f276755',
                    'label' => 'Featured Image',
                    'name' => 'featured_image',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'array',
                    'preview_size' => 'medium',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'taxonomy',
                        'operator' => '==',
                        'value' => 'all',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
            'show_in_graphql' => 1,
            'graphql_field_name' => 'ncTaxonomyMeta',
            'map_graphql_types_from_location_rules' => 0,
            'graphql_types' => '',
        ));

        acf_add_local_field_group(array(
            'key' => 'group_6152da3dd9b84',
            'title' => 'ncUserMeta',
            'fields' => array(
                array(
                    'key' => 'field_6152dc15767fb',
                    'label' => 'Featured Image',
                    'name' => 'featured_image',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'array',
                    'preview_size' => 'medium',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_6153157770fcf',
                    'label' => 'Background Image',
                    'name' => 'background_image',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'return_format' => 'array',
                    'preview_size' => 'medium',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_6152da69a6827',
                    'label' => 'ncBio',
                    'name' => 'nc_bio',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => 'User Bio',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                // 
                [
                    'key' => 'field_6153153270fcb_youtube_url',
                    'label' => 'Youtube Url',
                    'name' => 'youtube_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '/#',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_b70fcd_facebook_url',
                    'label' => 'Facebook Url',
                    'name' => 'facebook_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '/#',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_61555b70fcd_medium_url',
                    'label' => 'Medium Url',
                    'name' => 'medium_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '/#',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_615dsb70fcd_github_url',
                    'label' => 'Github Url',
                    'name' => 'github_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '/#',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_61ddb70fcd_vimeo_url',
                    'label' => 'Vimeo Url',
                    'name' => 'vimeo_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_6dd70fcc_twitter_url',
                    'label' => 'Twitter Url',
                    'name' => 'twitter_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_615db70fce_instagram_url',
                    'label' => 'Instagram Url',
                    'name' => 'instagram_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_615dfce_linkedin_url',
                    'label' => 'Linkedin Url',
                    'name' => 'linkedin_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_61d0fce_pinterest_url',
                    'label' => 'Pinterest Url',
                    'name' => 'pinterest_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_6fce_twitch_url',
                    'label' => 'Twitch Url',
                    'name' => 'twitch_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_6fc342dfe_website_url',
                    'label' => 'Website Url',
                    'name' => 'website_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => 'https://abc.com/me',
                    'placeholder' => '',
                ],
                [
                    'key' => 'field_6sfe_buymeacoffe_url',
                    'label' => 'Buymeacoffe Url',
                    'name' => 'buymeacoffe_url',
                    'type' => 'text',
                    'instructions' => 'You should have an account here or something similar -  https://www.buymeacoffee.com',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => 'https://www.buymeacoffee.com/nghiaxchis',
                    'placeholder' => '',
                ],
                // 

                array(
                    'key' => 'field_6152da59a6826_color',
                    'label' => 'color',
                    'name' => 'color',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'user_form',
                        'operator' => '==',
                        'value' => 'all',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
            'show_in_graphql' => 1,
            'graphql_field_name' => 'ncUserMeta',
            'map_graphql_types_from_location_rules' => 0,
            'graphql_types' => '',
        ));

        acf_add_local_field_group(array(
            'key' => 'group_61543ac682a90',
            'title' => 'ncmazMenuCustomFields',
            'fields' => array(
                array(
                    'key' => 'field_61543af22200a',
                    'label' => 'Is Mega Menu',
                    'name' => 'is_mega_menu',
                    'type' => 'true_false',
                    'instructions' => '(Only set/works to menu-location is Primary)',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_61543b1c2200b',
                    'label' => 'Number Of Posts',
                    'name' => 'number_of_posts',
                    'type' => 'number',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_61543af22200a',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'default_value' => 10,
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'min' => '',
                    'max' => '',
                    'step' => '',
                ),
                array(
                    'key' => 'field_61543b4c2200c',
                    'label' => 'Taxonomies',
                    'name' => 'taxonomies',
                    'type' => 'taxonomy',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_61543af22200a',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'taxonomy' => 'category',
                    'field_type' => 'multi_select',
                    'allow_null' => 0,
                    'add_term' => 0,
                    'save_terms' => 0,
                    'load_terms' => 0,
                    'return_format' => 'object',
                    'multiple' => 0,
                ),
                array(
                    'key' => 'field_61543bd32200d',
                    'label' => 'Show Tab Filter',
                    'name' => 'show_tab_filter',
                    'type' => 'true_false',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_61543af22200a',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'show_in_graphql' => 1,
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'nav_menu_item',
                        'operator' => '==',
                        'value' => 'all',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
            'show_in_graphql' => 1,
            'graphql_field_name' => 'ncmazMenuCustomFields',
            'map_graphql_types_from_location_rules' => 0,
            'graphql_types' => '',
        ));

    endif;
}


//  Set ACF default values for existing posts.
add_action('admin_init', 'ncmazFe_set_default_acf_values');
function ncmazFe_set_default_acf_values()
{
    if (!is_admin() || !function_exists('get_field')) {
        return;
    }

    $args = [
        'post_type'      => 'post',
        'posts_per_page' => -1,
        'post_status'    => 'publish'
    ];
    $posts = get_posts($args);
    foreach ($posts as $post) {
        if (empty(get_field('views_count', $post->ID))) {
            update_field('views_count', 1, $post->ID);
        }
        if (empty(get_field('simplefavorites_count', $post->ID))) {
            update_field('simplefavorites_count', 0, $post->ID);
        }
    }
}
