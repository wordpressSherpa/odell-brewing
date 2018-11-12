<?php get_header(); ?>

<div class="row page-header">
	<div class="small-12 columns">
		<?php $image = get_field('header_image');  ?>
		<img src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>" />
	</div>
</div> <!-- End .page-header -->



<div class="row" <?php post_class() ?> id="post-<?php the_ID(); ?>">
	<div class="small-12 columns" role="main" >
		
	<?php do_action('foundationPress_before_content'); ?>
	
	<div class="row agegate-text">
		<div class="columns small-12">
			<p class="deny-title">The Bad News</p>
		</div>
	</div>
	
	<div class="row agegate-text-deny">
		<div class="columns small-12">
			<p>This is a 404 error page - your content no longer exists or the URL is incorrect.</p>
		</div>
	</div>
	
	<div class="row agegate-text">
		<div class="columns small-12">
			<p class="deny-title">The Good News</p>
		</div>
	</div>
	
	<div class="row agegate-text-deny">
		<div class="columns small-12">
			<p>There is a good chance a cold one is in your future.</p>
		</div>
	</div>


		
	<?php do_action('foundationPress_after_content'); ?>

	</div>
</div>
<?php get_footer(); ?>
