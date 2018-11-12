<?php 
/*
 * Default Beer Loop
 */ 
?>

<?php if(is_tax()):?>
	<!-- IF FILTERED TAXONOMY -->
	<?php 
		$cat_id = $wp_query->get_queried_object_id();
		$args   = array(
			'tax_query' => array(
				array(
					'taxonomy' => 'beers',
					'field' => 'id',
					'terms' => $cat_id
				)
			)
		);
		$loop   = new WP_Query($args); ?>	
<?php else: ?>
	<!-- IF DEFAULT BEER PAGE -->
	<?php $loop = new WP_Query(array('post_type' => 'beer', 'posts_per_page' => -1)); ?>
<?php endif; ?>

<?php 
	// Counts for DIV closing 
	$i = 1;
	$count_posts = $loop->post_count;
?>	

<div class="row beer-row">
<?php while ($loop->have_posts() ) : $loop->the_post(); ?>

	<?php include('beer-item.php'); ?>
	
	<?php if( $i%2 == 0 && $i != $count_posts):?>
		</div><div class="row beer-row">
	<?php endif; ?>
	
	<?php $i++;?>
<?php endwhile; wp_reset_query(); ?>
</div>