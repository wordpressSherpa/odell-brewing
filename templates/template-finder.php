<?php
/*
 * Template Name: Beer Finder
 */
?>

<?php get_header(); ?>

<div class="row  page-header home-canvas">
	<div class="small-12 columns canvas-height">
		<?php if(get_field('header_image_or_animation') == 'image' ): ?>
			<?php $header_image = get_field('header_image');  ?>
			<img src="<?php echo $header_image['url'] ?>" alt="<?php echo $header_image['alt'] ?>" />
		<?php elseif(get_field('header_image_or_animation') == 'animation' ): ?>
			<?php echo headerAnimation($post->ID); ?>
		<?php endif; ?>
	</div>
</div> <!-- End .home-canvas -->


<div class="finder-title">
	<div class="row">
		<div class="small-12 columns">
			<p>Filter</p>
		</div>
	</div> 
</div> <!-- End .filter-title -->

<div class="finder-menu">
	<div class="row">
		<div class="small-12 columns">
			<?php echo do_shortcode('[beerbrands show="goShilling,IPA,Loose Leaf, Myrcenary, Mountain" hide=""]'); ?>
		</div>
	</div> 
</div> <!-- End .filter-menu -->



<div class="row" <?php post_class() ?> id="post-<?php the_ID(); ?>">
	<div class="small-12 columns" role="main" >
		
	<?php do_action('foundationPress_before_content'); ?>
	<?php echo do_shortcode('[beerfinder]'); ?>
	<?php do_action('foundationPress_after_content'); ?>

	</div>
</div> 
<?php get_footer(); ?>