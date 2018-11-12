<?php
/*
 * Template Name: Beer
 */
?>

<?php get_header(); ?>

<div class="row page-header">
	<div class="small-12 columns canvas-height">
		<?php if(get_field('header_image_or_animation') == 'image' ): ?>
			<?php $header_image = get_field('header_image');  ?>
			<img src="<?php echo $header_image['url'] ?>" alt="<?php echo $header_image['alt'] ?>" />
		<?php elseif(get_field('header_image_or_animation') == 'animation' ): ?>
			<?php echo headerAnimation($post->ID); ?>
		<?php endif; ?>
	</div>
</div> <!-- End .page-header -->

<div class="row filter-titles">
	<div class="small-12 medium-6 columns left">
		<p>Filter</p>
	</div>
	<div class="small-12 medium-6 columns right hide-for-small">
		<p>Search</p>
	</div>
</div> <!-- End .filter-title -->

<div class="row beer-options">
	<div class="small-12 medium-6 columns beer-categories left">
		<ul class="hide-for-small-only">
			<?php wp_list_categories('taxonomy=beers&title_li=&order=DESC'); ?>
			<li class="show-all"><a href="<?php echo get_site_url(); ?>/beer">All</a></li>
		</ul>
		<div class="show-for-small-only">
			<div id="mobile-filter-trigger">Tap To Filter Beer <div class="mobile-collapsed filter-arrow parent-toggle"></div></div>
			<ul class=" mobile-filter-menu"> 
				<li class="show-all"><a href="<?php echo get_site_url(); ?>/beer">All</a></li>
				<?php wp_list_categories('taxonomy=beers&title_li=&order=DESC'); ?>
			</ul>
		</div>
		<?php //display_beer_filters(); ?>
	</div>
	<div class="small-12 medium-6 columns beer-search right">
		<form role="search" method="get" id="searchform" action="<?php echo home_url('/'); ?>">
			<div class="row collapse">
				<?php do_action('foundationPress_searchform_top'); ?>
				<?php do_action('foundationPress_searchform_before_search_button'); ?>
				<div class="small-1 columns">
					<input type="submit" id="searchsubmit" value="<?php esc_attr_e('', 'FoundationPress'); ?>" class="prefix button">
				</div>
				<?php do_action('foundationPress_searchform_after_search_button'); ?>
				<div class="small-11 columns">
					<input type="text" value="" name="s" id="s" placeholder="<?php esc_attr_e('...', 'FoundationPress'); ?>" class="beer-search-input">
					<input type="hidden" name="post_type" value="beer" />
				</div>
			</div>
		</form>
	</div>
</div> <!-- End .beer-options -->

<div class="row" <?php post_class() ?> id="post-<?php the_ID(); ?>">
	<div class="small-12 medium-12 columns" role="main" >
	
	<div class="row beer-filter hide-for-small">
		<div class="medium-8 large-6 columns" id="beer-filter">
			<div class="row">
				<div class="medium-3 columns">
					<a href="#" id="filter-beer-type" class="beer-filter">Type</a>
				</div>
				<div class="medium-3 columns">
					<a href="#" id="filter-beer-color" class="beer-filter">Color</a>
				</div>
				<div class="medium-3 columns">
					<a href="#" id="filter-beer-ibu" class="beer-filter">IBU</a>
				</div>
				<div class="medium-3 columns">
					<a href="#" id="filter-beer-abv" class="beer-filter">ABV</a>
				</div>
			</div>
		</div>
		<div class="medium-4 large-6 columns grid-layout">
			<a href="" id="beer-list">
				<div class="grid-rows">
					<div class="grid-row"></div>
				</div>
			</a> 
			<a href="" id="beer-grid" class="active">
				<div class="grid-outer">
					<div class="grid-in t l"></div>
					<div class="grid-in t r"></div>
					<div class="grid-in b l"></div>
					<div class="grid-in b r"></div>
				</div>
			</a> 
		</div>
	</div> <!-- End .beer-filter -->
	
	<?php do_action('foundationPress_before_content'); ?>
	<div class="beer-list toggle-display">
		<?php if(empty($_GET)): ?>
			<!-- DEFAULT DISPLAY ============= -->
			<?php require_once('beer/loop-default.php'); ?>
		<?php else: ?>
			<!-- ATTRIBUTE FILTER DISPLAY ============= -->	
			<?php require_once('beer/loop-filtered.php'); ?>
		<?php endif; ?>
	</div> <!-- End .beer-list -->
	
	<div class="row more-beer">
		<div class="columns small-12">
			<a href="#" class="button expand more-beer"><span>More Beer</span></a>
		</div>
	</div>
		
	<?php do_action('foundationPress_after_content'); ?>

	</div>
</div>
<?php get_footer(); ?>
