<!-- GRID VIEW ============ -->
<div class="columns beer-item small-12 medium-6 grid-view">
	
	<div class="row" data-equalizer>
		<div class="columns small-12 medium-8 large-8 beer-left" data-equalizer-watch>
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<?php the_post_thumbnail(); ?> 
		</div>
		<div class="columns small-12 medium-4 beer-right color-set" data-equalizer-watch>
			<div class="beer-attribute" style="border-bottom: 1px solid <?php echo the_field('color'); ?>">
				<p>
				<?php 
					global $post;
					$terms = get_the_terms( $post->ID,'beers');
					$count = 0;
					foreach($terms as $term) { 
						if($count == 0) { echo $term->name; $count++; }	
					}
				?>
				</p>
			</div>
			<div class="beer-attribute" style="border-bottom: 1px solid <?php echo the_field('color'); ?>">
				<p><?php echo the_field('beer_type'); ?></p>
			</div>
			<div class="beer-attribute" style="border-bottom: 1px solid <?php echo the_field('color'); ?>">
				<p>IBU: <?php echo the_field('beer_ibu'); ?>%</p>
			</div>
			<div class="beer-attribute" style="border-bottom: 1px solid <?php echo the_field('color'); ?>">
				<p>ABV: <?php echo the_field('beer_a'); ?>%</p>
			</div>
			<div class="beer-attribute color" style="background: <?php echo the_field('color'); ?> ;">
				<p>Color</p>
			</div>
			<div class="beer-attribute more-info hide-more" style="border-bottom:none !important;">
				<p><a href="<?php the_permalink(); ?>">More Info</a></p>
			</div>
		</div>
	</div>
		
</div>

<!-- LIST VIEW ============ -->
<div class="columns beer-item small-12 large-12 list-view">
	<div class="row list-row">
		
		<div class="columns medium-2">
			<?php the_post_thumbnail(); ?> 
		</div>
		
		<div class="columns medium-10">
			<div class="row">
				<div class="columns medium-12 no-pad">
					<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				</div>
			</div>
			<div class="row color-<?php the_field('beer_color'); ?>">
				<div class="fifth-column beer-attribute">
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
				<div class="fifth-column beer-attribute">
					<p><?php echo the_field('beer_type'); ?></p>
				</div>
				<div class="fifth-column beer-attribute">
					<p>IBU: <?php echo the_field('beer_ibu'); ?>%</p>
				</div>
				<div class="fifth-column beer-attribute">
					<p>ABV: <?php echo the_field('beer_abv'); ?>%</p>
				</div>
				<div class="fifth-column beer-attribute color">
					<p>Color</p>
				</div>
			</div>
			<div class="row">
				<div class="fifth-column">
					<div class="more-info">
						<p><a href="<?php the_permalink(); ?>">More Info</a></p>
					</div>
				</div>
				<div class="four-fifth ">
					<p><?php echo wp_trim_words( the_content(), 15, '...' ); ?></p>
				</div>
			</div>
		</div>
		
	</div>
</div>