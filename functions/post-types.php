<?php 
/**
 * Beer Post Type
 */ 
 
function odl_beer_register() {
 
	$labels = array(
		'name' => _x('Beer', 'post type general name'),
		'singular_name' => _x('Beer Item', 'post type singular name'),
		'add_new' => _x('Add New', 'Beer item'),
		'add_new_item' => __('Add New Beer Item'),
		'edit_item' => __('Edit Beer'),
		'new_item' => __('New Beer'),
		'view_item' => __('View Beer'),
		'search_items' => __('Search Beer'),
		'not_found' =>  __('Nothing found'),
		'not_found_in_trash' => __('Nothing found in Trash'),
		'parent_item_colon' => ''
	);
 
	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array('slug' => 'beer'),
		'capability_type' => 'page',
		'hierarchical' => false,
		'menu_position' => null,
		'supports' => array('title','editor','thumbnail')
	  ); 
 
	register_post_type( 'beer' , $args );
}
add_action('init', 'odl_beer_register');

function odl_beer_taxonomy() {  
    register_taxonomy(  
        'beers',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces). 
        'beer',  //post type name
        array(  
            'hierarchical' => true,  
            'label' => 'Beers Category',  //Display name
            'query_var' => true,
            'rewrite' => array(
                'slug' => 'beers', // This controls the base slug that will display before each term
                'with_front' => false // Don't display the category base before 
            )
        )  
    );  
}  
add_action( 'init', 'odl_beer_taxonomy');

/**
 * Locations Post Type
 */ 
 
function odl_location_register() {
 
	$labels = array(
		'name' => _x('Locations', 'post type general name'),
		'singular_name' => _x('Location Item', 'post type singular name'),
		'add_new' => _x('Add New', 'Location item'),
		'add_new_item' => __('Add New Location Item'),
		'edit_item' => __('Edit Location'),
		'new_item' => __('New Location'),
		'view_item' => __('View Location'),
		'search_items' => __('Search Location'),
		'not_found' =>  __('Nothing found'),
		'not_found_in_trash' => __('Nothing found in Trash'),
		'parent_item_colon' => ''
	);
 
	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array('slug' => 'location'),
		'capability_type' => 'page',
		'hierarchical' => false,
		'menu_position' => null,
		'supports' => array('title','editor','thumbnail')
	  ); 
 
	register_post_type( 'location' , $args );
}
add_action('init', 'odl_location_register');

function odl_location_taxonomy() {  
    register_taxonomy(  
        'locations',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces). 
        'location',  //post type name
        array(  
            'hierarchical' => true,  
            'label' => 'locations Category',  //Display name
            'query_var' => true,
            'rewrite' => array(
                'slug' => 'locations', // This controls the base slug that will display before each term
                'with_front' => false // Don't display the category base before 
            )
        )  
    );  
}  
add_action( 'init', 'odl_location_taxonomy');