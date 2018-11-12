<?php
/* 
 * Lets get some functionality
 */

require_once('functions/theme-options.php');
require_once('functions/widgets.php');
require_once('functions/post-types.php');
require_once('functions/beer.php');
require_once('functions/animation.php');
require_once('functions/woocommerce.php');

/**
 * Lets add some style to this thang
 */
 
function odl_frontend() {
	wp_enqueue_style( 'custom-styles', get_stylesheet_uri() );
	wp_enqueue_script( 'script-custom', get_stylesheet_directory_uri() . '/js/custom.js');
	wp_enqueue_script( 'script-agegate', get_stylesheet_directory_uri() . '/js/agegate.js');
}
add_action( 'wp_enqueue_scripts', 'odl_frontend',20 );

function odl_admin() {
	wp_enqueue_style( 'custom-styles', get_stylesheet_directory_uri() . '/css/admin.css');
	wp_enqueue_script( 'script-custom', get_stylesheet_directory_uri() . '/js/admin.js');
}
add_action( 'admin_head', 'odl_admin' );

/**
 * Menus
 */
function odl_register_menus() {
  register_nav_menus(
    array('footer_menu' => __( 'Footer Menu' ))
  );
  register_nav_menus(
    array('footer_lower_menu' => __( 'Footer Lower Menu' ))
  );
} 
add_action( 'init', 'odl_register_menus' );


/**
 * Sideabars
 */
 
if ( function_exists('register_sidebar') ) {
    register_sidebar(array(
		'name'=> 'Woo Filter',
		'id' => 'woo_filter',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => '</aside>',
		'before_title' => '<h6 class="offscreen">',
		'after_title' => '</h6>',
	));
	register_sidebar(array(
		'name'=> 'Woo Search',
		'id' => 'woo_search',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => '</aside>',
		'before_title' => '<h6 class="offscreen">',
		'after_title' => '</h6>',
	));
} 

/**
 * Add Class Current Cat
 */
/* function tax_cat_active( $output, $args ) {


	
	if(is_single()){
    global $post;
	
    $terms = get_the_terms( $post->ID, $args['taxonomy'] );
    foreach( $terms as $term )
        if ( preg_match( '#cat-item-' . $term ->term_id . '#', $output ) )
            $output = str_replace('cat-item-'.$term ->term_id, 'cat-item-'.$term ->term_id . ' current-cat', $output);
  }

  return $output; 
  
  // IS THIS EVEN DOING ANYTHING ANYMORE?
  
}
add_filter( 'wp_list_categories', 'tax_cat_active', 10, 2 ); */


/**
 * WooCommerce
 */

add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}