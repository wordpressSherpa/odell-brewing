<?php get_header(); ?>

<div class="row  page-header home-canvas">
	<div class="small-12 columns canvas-height">
		<?php if(get_field('header_image_or_animation') == 'image' ): ?>
			<?php $header_image = get_field('header_image');  ?>
			<img src="<?php echo $header_image['url'] ?>" alt="<?php echo $header_image['alt'] ?>" />
		<?php elseif(get_field('header_image_or_animation') == 'animation' ): ?>
			<?php echo headerAnimation(); ?>
		<?php endif; ?>
	</div>
</div> <!-- End .home-canvas -->

<div class="row" <?php post_class() ?> id="post-<?php the_ID(); ?>">
	<div class="small-12 columns" role="main" >
		
	<?php do_action('foundationPress_before_content'); ?>
	
	<?php if( have_rows('page_content') ): ?>
		 <?php while ( have_rows('page_content') ) : the_row(); ?>
		 	
		 	<?php if( get_row_layout() == 'content_area' ): ?>
		 		<div class="row content-row">
					<div class="columns small-12 clearfix">
			        	<?php the_sub_field('wysiwyg'); ?>
					</div>
		 		</div>
		    <?php elseif( get_row_layout() == 'two_column_content_area' ): ?>
		        <div class="content-row double-col">
			        <div class="row">
			        	<div class="columns small-12">
				        	 <h1><?php the_sub_field('column_header'); ?></h1>
			        	</div>
			        </div>
			        <div class="row">
			        	<div class="columns medium-6 small-12">
				    	    <?php the_sub_field('column_1'); ?>
			        	</div>
			        	<div class="columns medium-6 small-12">
				    	    <?php the_sub_field('column_2'); ?>
			        	</div>
			        </div>
		        </div>
			<?php  elseif( get_row_layout() == 'video' ): ?>
				<div class="row content-row">
					<div class="columns small-12 flex-video">
						<?php the_sub_field('video_embed_code'); ?>
					</div>
		        </div>
			<?php  elseif( get_row_layout() == 'related_post' ): ?>
				<?php 
					$image_left  = get_sub_field('background_image_left'); 
					$image_right = get_sub_field('background_image_right');  
				?>
				<div class="row content-row" data-equalizer>
					<div class="columns medium-6 small-12" style="background:url(<?php echo $image_left['url'] ?>) no-repeat;background-size: 100% 100%;" data-equalizer-watch>
						<div class="row single-post-feature">
							<div class="columns small-12">
								<?php 
									$post_object = get_sub_field('related_post_item'); 
									if( $post_object ): 
										$post = $post_object;
										setup_postdata( $post ); 

								?>
									<div class="post-feature">
										<p class="date"><?php the_date('n.j.Y'); ?></p>
										<div class="content">
											<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
											<p><?php echo wp_trim_words( the_content(), 10, '...' ); ?></p>
										</div>
										<p class="read"><a href="<?php the_permalink(); ?>">Read</a></p>
									</div>
    							<?php wp_reset_postdata(); ?>
								<?php endif; ?>
							</div>
						</div> 
					</div>
					<div class="columns medium-6 small-12 related-product" style="background:url(<?php echo $image_right['url'] ?>)no-repeat;background-size: 100% 100%;" data-equalizer-watch>
						<a class="button page-button" href="<?php echo get_sub_field('button_url'); ?>"><span><?php echo get_sub_field('button_text'); ?></span></a>
					</div>
		        </div>
		    <?php endif; ?>
		
		<?php endwhile; ?>
		<?php else : ?>
			
			<?php while ( have_posts() ) : the_post();
				get_template_part( 'content', 'page' );
			endwhile; ?>
		
	<?php endif; ?>
		
	<?php do_action('foundationPress_after_content'); ?>

	</div>
</div>
<?php get_footer(); ?>