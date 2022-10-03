<?php

add_action('widgets_init', "ncmazFrontEndMobileNavRegisterSidebars");

function ncmazFrontEndMobileNavRegisterSidebars()
{
    // Mobile Menu
    register_sidebar(
        [
            'name'          => esc_html__('Mobile Menu Sidebar', 'ncmaz-frontend'),
            'description'   => esc_html__('Displaying widget items on the Mobile menu sidebar ', 'ncmaz-frontend'),
            'id'            => 'mobile-menu-sidebar',
            'before_widget' => '<div>',
            'after_widget'  => '</div>',
            'before_title'  => '<div class="ncmaz-mobile-sidebar-title"><span class="truncate">',
            'after_title'   => '</span></div>'
        ]
    );
}
