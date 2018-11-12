<?php get_header(); ?>

<div class="row home-content" <?php post_class() ?> id="post-<?php the_ID(); ?>">
	<div class="small-12 columns" role="main" >

	<?php do_action('foundationPress_before_content'); ?>

	<?php while (have_posts()) : the_post(); ?>
	
		<div class="row home-canvas">
			<div class="small-12 columns canvas-height">
				<?php if(get_field('header_image_or_animation') == 'image' ): ?>
					<?php $header_image = get_field('header_image');  ?>
					<img src="<?php echo $header_image['url'] ?>" alt="<?php echo $header_image['alt'] ?>" />
				<?php elseif(get_field('header_image_or_animation') == 'animation' ): ?>
					<?php echo headerAnimation(); ?>
				<?php endif; ?>
			</div>
		</div> <!-- End .home-canvas -->
		
		<div class="row home-feature-title" data-equalizer>
			<div class="small-12 medium-6 columns hft-left" data-equalizer-watch>
				<?php echo get_field('feature_title'); ?>
			</div>
			<div class="medium-6 hide-for-small columns hft-right" data-equalizer-watch>
				
			</div>
		</div> <!-- End .home-feature-title -->
		
		<div class="row home-feature" data-equalizer>
			<?php $image = get_field('feature_image');  ?>
			<div class="small-12 medium-6 columns hf-left" data-equalizer-watch style="background-image:url(<?php echo $image['url'] ?>);background-size: cover;">
			</div>
			<div class="small-12 medium-6 columns hf-right" data-equalizer-watch>
				<div class="hf-box">
					<div class="hf-text">
						<?php echo get_field('feature_text'); ?>
					</div>
					<a href="<?php echo get_field('feature_link'); ?>" class="button"><span>Learn More</span></a>
				</div>
			</div>
		</div> <!-- End .home-feature -->
		
	<?php endwhile;?>

	<?php do_action('foundationPress_after_content'); ?>

	</div>
</div>
<?php get_footer(); ?>
