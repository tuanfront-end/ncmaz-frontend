<?php

add_action('widgets_init', "ncmazFrontEndRegisterSidebars");

function ncmazFrontEndRegisterSidebars()
{


    // FOOTER 1
    register_sidebar(
        [
            'name'          => esc_html__('Footer-1 Sidebar', 'ncmaz'),
            'description'   => esc_html__('Displaying widget items on the Sidebar area column 1 of footer', 'ncmaz'),
            'id'            => 'footer-1-sidebar',
            'before_widget' => '<div>',
            'after_widget'  => '</div>',
            'before_title'  => '<div class="ncmaz-footer-sidebar-title"><span class="truncate">',
            'after_title'   => '</span></div>'
        ]
    );

    // FOOTER 2
    register_sidebar(
        [
            'name'          => esc_html__('Footer-2 Sidebar', 'ncmaz'),
            'description'   => esc_html__('Displaying widget items on the Sidebar area column 2 of footer', 'ncmaz'),
            'id'            => 'footer-2-sidebar',
            'before_widget' => '<div>',
            'after_widget'  => '</div>',
            'before_title'  => '<div class="ncmaz-footer-sidebar-title"><span class="truncate">',
            'after_title'   => '</span></div>'
        ]
    );


    // FOOTER 3
    register_sidebar(
        [
            'name'          => esc_html__('Footer-3 Sidebar', 'ncmaz'),
            'description'   => esc_html__('Displaying widget items on the Sidebar area column 3 of footer', 'ncmaz'),
            'id'            => 'footer-3-sidebar',
            'before_widget' => '<div>',
            'after_widget'  => '</div>',
            'before_title'  => '<div class="ncmaz-footer-sidebar-title"><span class="truncate">',
            'after_title'   => '</span></div>'
        ]
    );


    // FOOTER 4
    register_sidebar(
        [
            'name'          => esc_html__('Footer-4 Sidebar', 'ncmaz'),
            'description'   => esc_html__('Displaying widget items on the Sidebar area column 4 of footer', 'ncmaz'),
            'id'            => 'footer-4-sidebar',
            'before_widget' => '<div>',
            'after_widget'  => '</div>',
            'before_title'  => '<div class="ncmaz-footer-sidebar-title"><span class="truncate">',
            'after_title'   => '</span></div>'
        ]
    );

    // Mobile Menu
    register_sidebar(
        [
            'name'          => esc_html__('Mobile Menu Sidebar', 'ncmaz'),
            'description'   => esc_html__('Displaying widget items on the Mobile menu sidebar ', 'ncmaz'),
            'id'            => 'mobile-menu-sidebar',
            'before_widget' => '<div>',
            'after_widget'  => '</div>',
            'before_title'  => '<div class="ncmaz-mobile-sidebar-title"><span class="truncate">',
            'after_title'   => '</span></div>'
        ]
    );
}
