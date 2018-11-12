<?php

/**
 * Lets add some style to this thang
 */
 
add_filter( 'woocommerce_enqueue_styles', 'odl_dequeue_styles' );
function odl_dequeue_styles( $enqueue_styles ) {
    unset( $enqueue_styles['woocommerce-general'] );    // Remove the gloss
    unset( $enqueue_styles['woocommerce-layout'] );     // Remove the layout
    unset( $enqueue_styles['woocommerce-smallscreen'] );    // Remove the smallscreen optimisation
    return $enqueue_styles;
}
	
function woocommerce_style_sheet() {
	wp_register_style( 'css-woo', get_stylesheet_directory_uri() . '/css/woo.css' );
	wp_enqueue_script( 'script-woo', get_stylesheet_directory_uri() . '/js/woo.js');
	wp_enqueue_script( 'script-woo-masonry', get_stylesheet_directory_uri() . '/js/woo-masonry.js');
	wp_enqueue_script( 'script-woo-masonry-images', get_stylesheet_directory_uri() . '/js/woo-masonry-images.js');
	if ( class_exists( 'woocommerce' ) ) {
		wp_enqueue_style( 'css-woo' );
		wp_enqueue_script( 'script-woo' );
		wp_enqueue_script( 'script-woo-masonry' );
		wp_enqueue_script( 'script-woo-masonry-images' );
	}
}
add_action('wp_enqueue_scripts', 'woocommerce_style_sheet');


/**
 * Product Images
 */

add_action( 'after_setup_theme', 'odl_gal_img' );
function odl_gal_img() {
	add_image_size( 'gallery_custom', 600, 600, true ); // Product Images
}


/**
 * Add Login / Logout Links
 */
 
/*add_filter( 'wp_nav_menu_items', 'add_loginout_link', 10, 2 );
function add_loginout_link( $items, $args ) {
    if (is_user_logged_in() && $args->theme_location == 'footer_menu') {
        $items .= '<li><a href="'. wp_logout_url() .'">Log Out</a></li>';
    }
    elseif (!is_user_logged_in() && $args->theme_location == 'footer_menu') {
        $items .= '<li><a href="'. site_url('wp-login.php') .'">Log In</a></li>';
    }
    
    return $items;
}*/


/**
 * Custom Tag Filter
 */
 
// Edit the Woo Tag Cloud for different HTML output	
function odl_unregister_widgets() {
     unregister_widget( 'WC_Widget_Product_Tag_Cloud' );
}
add_action( 'widgets_init', 'odl_unregister_widgets', 20 );

class Custom_Tag_Cloud extends WC_Widget_Product_Tag_Cloud {
	
	public function __construct() {
		$this->widget_cssclass    = 'woocommerce widget_product_tag_cloud';
		$this->widget_description = __( 'Your most used product tags in cloud format.', 'woocommerce' );
		$this->widget_id          = 'woocommerce_product_tag_cloud';
		$this->widget_name        = __( 'WooCommerce Product Tags', 'woocommerce' );
		$this->settings           = array(
			'title'  => array(
				'type'  => 'text',
				'std'   => __( 'Product Tags', 'woocommerce' ),
				'label' => __( 'Title', 'woocommerce' )
			)
		);

		parent::__construct();
	}

	public function widget( $args, $instance ) {
		$current_taxonomy = $this->_get_current_taxonomy( $instance );

		$this->widget_start( $args, $instance );

		echo '<a data-dropdown="dropTag" data-options="is_hover:true;" class="sort-prod-beer">Sort<span></span></a>';
		echo '<div id="dropTag" class="f-dropdown" data-dropdown-content aria-hidden="true" tabindex="-1">';
		wp_tag_cloud( apply_filters( 'woocommerce_product_tag_cloud_widget_args', array( 'taxonomy' => $current_taxonomy ) ) );
		echo '</div>';
		
		$this->widget_end( $args );
	}

	public function _get_current_taxonomy( $instance ) {
		return 'product_tag';
	}
}
add_action( 'widgets_init', create_function( '', 'return register_widget( "Custom_Tag_Cloud" );' ) );

// Hook into the Woo Tag clould to adjust HTML output  
add_filter( 'woocommerce_product_tag_cloud_widget_args', 'my_widget_tag_cloud_args' );
function my_widget_tag_cloud_args( $args ) {
	// Your extra arguments go here
	$args['format'] = 'list';
	return $args;
}


/**
* Category List
*/

function odl_woo_cats() {
	$args = array(
		'taxonomy'     => 'product_cat',
		'hierarchical' => 1, // 1 for yes, 0 for no
		'title_li'     => '',
		'hide_empty'   => 0 // 1 for yes, 0 for no
	);
	
	$all_categories = get_categories( $args );
	echo '<ul class="small-block-grid-6">';

	$count = 0; 
	foreach ($all_categories as $cat) {
		if($count == 0) {
	    	echo '<li class="current-cat"><a href="'. get_site_url() .'/gear">All</a></li>';
		}
		if($cat->category_parent == 0) {
	    	$category_id = $cat->term_id;
			echo '<li class="'.$cat->slug.' beer-cat-p"><a href="'. get_term_link($cat->slug, 'product_cat') .'" data-dropdown="hover'.$count.'" data-options="is_hover:true;" class="beer-cat-a">'. $cat->name.'</a>';
				
				// Sub Menu
				$args2 = array(
				  'taxonomy'     => 'product_cat',
				  'parent'       => $category_id,
				  'hierarchical' => 1,
				  'orderby'      => 'menu_order',
				  'title_li'     => '',
				);
				$sub_cats = get_categories( $args2 );
				if($sub_cats) {
					echo '<ul id="hover'.$count.'" class="f-dropdown" data-dropdown-content>';
            		foreach($sub_cats as $sub_category) {
            	    	echo  '<li><a href="'. get_term_link($sub_category->slug, 'product_cat') .'">'. $sub_category->name .'</a></li>';
            	    }
            	    echo '</ul>';
            	}

			echo '</li>'; 
		}
		
		$count ++;
	}
	echo '</ul>';

}

function odl_woo_cats_mobile() {
	$args = array(
		'taxonomy'     => 'product_cat',
		'hierarchical' => 1, // 1 for yes, 0 for no
		'title_li'     => '',
		'hide_empty'   => 0 // 1 for yes, 0 for no
	);
	
	$all_categories = get_categories( $args );
	echo '<div id="mobile-filter-trigger">Tap To Filter Gear <div class="mobile-collapsed filter-arrow parent-toggle"></div></div>';
	echo '<ul class="small-block-grid-6 mobile-filter-menu">';

	$count = 0; 
	foreach ($all_categories as $cat) {
		if($cat->category_parent == 0) {
	    	$category_id = $cat->term_id;
			echo '<li class="'.$cat->slug.' beer-cat-p"><a href="'. get_term_link($cat->slug, 'product_cat') .'" class="beer-cat-a">'. $cat->name.'</a>';
				
				// Sub Menu
				$args2 = array(
				  'taxonomy'     => 'product_cat',
				  'parent'       => $category_id,
				  'hierarchical' => 1,
				  'orderby'      => 'menu_order',
				  'title_li'     => '',
				);
				$sub_cats = get_categories( $args2 );
				if($sub_cats) {
					echo '<ul class="has-sub">';
            		foreach($sub_cats as $sub_category) {
            	    	echo  '<li><a href="'. get_term_link($sub_category->slug, 'product_cat') .'">'. $sub_category->name .'</a></li>';
            	    }
            	    echo '</ul>';
            	}

			echo '</li>'; 
		}
		
		$count ++;
	}
	echo '</ul>';

}


/**
* Woo Search
*/

// Remove redirect to single product page when there is only one result
add_filter( 'woocommerce_redirect_single_search_result', '__return_false' );


/**
* Product Single
*/

// Edit product description
add_action('woocommerce_single_product_summary','odl_get_description',15);
function odl_get_description(){
	echo '<div class="row prod-desc"><div class="coulumns small-12">';
	the_content();
	echo '</div></div>';
}

// Edit number of upsells
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
add_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_upsells', 15 );
if ( ! function_exists( 'woocommerce_output_upsells' ) ) {
	function woocommerce_output_upsells() {
	    woocommerce_upsell_display( 2,2 ); // Display 3 products in rows of 3
	}
}

?>