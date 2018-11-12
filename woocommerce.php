<?php get_header(); ?>

<div class="row  page-header home-canvas">
	<div class="small-12 columns canvas-height">
		<?php if(get_field('header_image_or_animation',106) == 'image' ): ?>
			<?php $header_image = get_field('header_image',106);  ?>
			<img src="<?php echo $header_image['url'] ?>" alt="<?php echo $header_image['alt'] ?>" />
		<?php elseif(get_field('header_image_or_animation',106) == 'animation' ): ?>
			<?php echo headerAnimation(106); ?>
		<?php endif; ?>
	</div>
</div> <!-- End .home-canvas -->

<div class="row filter-titles">
	<div class="small-12 columns left">
		<p>Gear Type</p>
	</div>
</div> <!-- End .filter-title -->

<div class="beer-options hide-for-small">
	<div class="beer-bg-color">
		<div class="row">
			<div class="small-12 columns beer-categories ">
				<?php echo odl_woo_cats(); ?>
			</div>
		</div>
	</div>
</div> <!-- End .beer-options -->

<div class="beer-options show-for-small mobile-filter">
	<div class="beer-bg-color">
		<div class="row">
			<div class="small-12 columns beer-categories">
				<?php echo odl_woo_cats_mobile(); ?>
			</div>
		</div>
	</div>
</div> <!-- End .beer-options -->

<div class="grid-search-bg">
	<div class="row grid-search">
		<div class="columns small-12 medium-6 tag-filter">
			<?php if ( !dynamic_sidebar('woo_filter') ) ?>
		</div>
		<div class="columns small-12 medium-6 right beer-search woo-search">
			<?php if ( !dynamic_sidebar('woo_search') ) ?>
		</div>
	</div> <!-- End .grid-search -->
</div> <!-- End .grid-search-bg -->


<div class="row" <?php post_class() ?> id="post-<?php the_ID(); ?>">
	<div class="small-12 columns" role="main" >
		
	<?php do_action('foundationPress_before_content'); ?>
	
	<?php woocommerce_content(); ?>
		
	<?php do_action('foundationPress_after_content'); ?>

	</div>
</div>
<?php get_footer(); ?>
