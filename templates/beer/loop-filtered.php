<?php 
/*
 * Filtered Beer Loop
 */ 

// Get Data from URL Params	
if($_GET['type']) {
	$meta_val = $_GET['type'];
	if($meta_val == 'sort_up') { 
		$meta_key = 'beer_type';
		$sort_ord = 'ASC';
	}
	if($meta_val == 'sort_down') { 
		$meta_key = 'beer_type';
		$sort_ord = 'DESC';
	}
		
}	

if($_GET['color']) {
	$meta_val = $_GET['color'];
	if($meta_val == 'sort_up') { 
		$meta_key = 'beer_color';
		$sort_ord = 'ASC';
	}
	if($meta_val == 'sort_down') { 
		$meta_key = 'beer_color';
		$sort_ord = 'DESC';
	}
		
}

if($_GET['ibu']) {
	$meta_val = $_GET['ibu'];
	if($meta_val == 'sort_up') { 
		$meta_key = 'beer_ibu';
		$sort_ord = 'ASC';
	}
	if($meta_val == 'sort_down') { 
		$meta_key = 'beer_ibu';
		$sort_ord = 'DESC';
	}
		
}	

if($_GET['abv']) {
	$meta_val = $_GET['abv'];
	if($meta_val == 'sort_up') { 
		$meta_key = 'beer_a';
		$sort_ord = 'ASC';
	}
	if($meta_val == 'sort_down') { 
		$meta_key = 'beer_a';
		$sort_ord = 'DESC';
	}
		
}
			
?>

<?php if(is_tax()):?>
	<!-- IF FILTERED TAXONOMY -->
	<?php 
		// Get Taxonomy Category
		$cat_id = $wp_query->get_queried_object_id();
		// Query Post with Custom Fields & TAX
		$args = array(
			'numberposts'	=> -1,
			'post_type'		=> 'beer',
			'meta_key'		=> $meta_key,
			'orderby'       => 'meta_value',
			'order'         => $sort_ord,
			'tax_query'     => array(
				array(
					'taxonomy' => 'beers',
					'field' => 'id',
					'terms' => $cat_id
			)
		));	
		$loop = new WP_Query($args);
	?>	
<?php else: ?>
	<!-- IF DEFAULT BEER PAGE -->
	<?php 
		// Setup Post from Params
		$args = array(
			'numberposts'	=> -1,
			'post_type'		=> 'beer',
			'meta_key'		=> $meta_key,
			'orderby'       => 'meta_value',
			'order'         => $sort_ord
		);
		$loop = new WP_Query($args);
	?>
<?php endif; ?>

<?php 
	// Counts for DIV closing 
	$i = 1;
	$count_posts = $loop->post_count;
?>	

<div class="row beer-row">
<?php if( $loop->have_posts() ): ?>
	<?php while ($loop->have_posts() ) : $loop->the_post(); ?>
				
		<?php include('beer-item.php'); ?>
		
		<?php if( $i%2 == 0 && $i != $count_posts && $i != 1): // Last closing tag ?>
			</div><div class="row beer-row">
		<?php endif; ?>

		<?php $i++;?>
	<?php endwhile; wp_reset_query(); ?>
<?php else: ?>
	<p>Shucks! There are no beers found with those filters. Roll again my friend. Roll again.</p>
<?php endif; ?>
</div>