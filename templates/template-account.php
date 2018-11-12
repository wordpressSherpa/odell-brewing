<?php
/*
 * Template Name: Account & Cart
 */
?>

<?php get_header(); ?>

<div class="row page-header">
	<div class="small-12 columns">
		<img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/images/temp_header_yellow.jpg" alt="" />
	</div>
</div> <!-- End .page-header -->

<div class="row filter-titles">
	<div class="small-12 columns left">
		<p><?php the_title(); ?></p>
	</div>
</div> <!-- End .filter-title -->


<div class="row my-account" <?php post_class() ?> id="post-<?php the_ID(); ?>">
	<div class="small-12 columns" role="main" >
		
	<?php do_action('foundationPress_before_content'); ?>
	
		<?php while ( have_posts() ) : the_post();
				get_template_part( 'content', 'page' );
				/*if ( comments_open() || get_comments_number() ) :
					comments_template();
					endif;*/

		endwhile; ?>		
		
	<?php do_action('foundationPress_after_content'); ?>

	</div>
</div>
<?php get_footer(); ?>
