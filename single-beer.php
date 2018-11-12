<?php get_header(); ?>

<?php do_action('foundationPress_before_content'); ?>
<?php while (have_posts()) : the_post(); ?>

	<div class="row page-header">
		<div class="small-12 columns header-image-left">
			<?php
				$image = get_field('header_image'); 
				if(get_field('header_image')):
			?>
				<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>
			<?php endif; ?>
		</div>
	</div> <!-- End .page-header -->
	
	<div class="row single-beer-nav" data-equalizer>
		<div class="columns small-1 beer-nav" data-equalizer-watch>
			<div class="prev-beer"><?php c2c_previous_or_loop_post_link('%link', '') ?></div>
		</div>
		<div class="columns small-10 beer-title" data-equalizer-watch>
			<h1><?php the_title(); ?></h1>
		</div>
		<div class="columns small-1 beer-nav" data-equalizer-watch>
			<div class="next-beer"><?php c2c_next_or_loop_post_link('%link', '') ?></div>
		</div>
	</div> <!-- End .single-beer-nav -->
	
	<div class="row mood-btn">
		<div class="columns large-12">
			<a class="button">Find Out How This Beer Fits Your Mood</a>
		</div>
	</div> <!-- End .mood-btn --> 
	
	<div class="row" <?php post_class() ?> id="post-<?php the_ID(); ?>">	
		<div class="small-12 columns" role="main" >
	
			<div class="row show-for-small-only mobile-beer-video">
				<div class="columns small-12">
					<?php if(get_field('video')): ?>
						<div class="flex-video">
							<?php the_field('video'); ?>
						</div>
					<?php else: ?>
						<?php
							$image2 = get_field('image'); 
							if(get_field('image')):
						?>
							<img src="<?php echo $image2['url']; ?>" alt="<?php echo $image2['alt']; ?>"/>
						<?php endif; ?>
					<?php endif; ?>
				</div>
			</div>
			
			<div class="row beer-details" data-equalizer>
				<div class="columns small-12 medium-5 beer-col-left" data-equalizer-watch>
					
					<div class="beer-table" data-equalizer>
						<div class="row">
							<div class="columns small-12 beer-title">
								<p><?php the_title(); ?></p>
							</div>
						</div>
						<div class="row"  data-equalizer-watch>
							<div class="columns small-12 medium-4">
								<div class="row">
									<div class="columns small-6 medium-12">
										<p>IBU: <?php echo the_field('beer_ibu'); ?>%</p>
									</div>
									<div class="columns small-6 medium-12">
										<p><?php echo the_field('beer_type'); ?></p>
									</div>
								</div>
							</div>
							<div class="columns small-12 medium-4">
								<div class="row">
									<div class="columns small-6 medium-12">
										<p>ABV: <?php echo the_field('beer_a'); ?>%</p>
									</div>
									<div class="columns small-6 medium-12">
										<p>
										<?php 
											global $post;
											$terms = get_the_terms( $post->ID,'beers');
											$count = 1;
											if($count == 1) {
												foreach($terms as $term) { echo $term->name; $count++; }
											}
										?>
										</p>
									</div>
								</div>
							</div>
							<div class="columns small-12 medium-4 color" data-equalizer-watch style="background-color:<?php echo the_field('color'); ?>">
								<p>Color</p>
							</div>
						</div>
					</div> <!-- End .table -->
					
					<div class="beer-content">
						<?php the_content(); ?>
					</div>
					
				</div>
				<div class="columns small-12 medium-7 hide-for-small video-container" data-equalizer-watch>
					<?php if(get_field('video')): ?>
						<div class="flex-video">
							<?php the_field('video'); ?>
						</div>
					<?php else: ?>
						<?php
							$image1 = get_field('image'); 
							if(get_field('image')):
						?>
							<img src="<?php echo $image1['url']; ?>" alt="<?php echo $image1['alt']; ?>"/>
						<?php endif; ?>
					<?php endif; ?>
				</div>
			</div> <!-- End .beer-details -->
			
			<?php 
				$image_left  = get_field('related_post_image'); 
			?>
			<div class="row related-post" data-equalizer>
				<div class="columns medium-5 small-12" style="background-image:url(<?php echo $image_left['url'] ?>);background-size: cover;" data-equalizer-watch>
					<div class="row single-post-feature">
						<div class="columns small-12">
							<?php 
								$post_object = get_field('related_post'); 
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
				<div class="columns medium-7 small-12 related-product" style="background-image:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/temp_related_product.jpg);background-size: cover;" data-equalizer-watch>
					<a class="button related-product-btn related-product-btn-trigger hide-for-small-only" href="#"><span>VIEW MORE LOOSE LEAF GEAR</span></a>
					<a class="button related-product-btn show-for-small-only" href="<?php echo get_site_url(); ?>/product-tag/"><span>LOOSE LEAF GEAR</span></a>
				</div>
			</div> <!-- End .related-post -->
	
		</div>
	</div>

<?php endwhile;?>
<?php do_action('foundationPress_after_content'); ?>

<?php get_footer(); ?>