<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title><?php if ( is_category() ) {
			echo 'Category Archive for &quot;'; single_cat_title(); echo '&quot; | '; bloginfo( 'name' );
		} elseif ( is_tag() ) {
			echo 'Tag Archive for &quot;'; single_tag_title(); echo '&quot; | '; bloginfo( 'name' );
		} elseif ( is_archive() ) {
			wp_title(''); echo ' Archive | '; bloginfo( 'name' );
		} elseif ( is_search() ) {
			echo 'Search for &quot;'.esc_html($s).'&quot; | '; bloginfo( 'name' );
		} elseif ( is_home() || is_front_page() ) {
			bloginfo( 'name' ); echo ' | '; bloginfo( 'description' );
		}  elseif ( is_404() ) {
			echo 'Error 404 Not Found | '; bloginfo( 'name' );
		} elseif ( is_single() ) {
			wp_title('');
		} else {
			echo wp_title( ' | ', 'false', 'right' ); bloginfo( 'name' );
		} ?></title>

		<link rel="icon" href="<?php echo get_stylesheet_directory_uri() ; ?>/assets/img/icons/favicon.ico" type="image/x-icon">
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo get_stylesheet_directory_uri() ; ?>/assets/img/icons/apple-touch-icon-144x144-precomposed.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo get_stylesheet_directory_uri() ; ?>/assets/img/icons/apple-touch-icon-114x114-precomposed.png">
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo get_stylesheet_directory_uri() ; ?>/assets/img/icons/apple-touch-icon-72x72-precomposed.png">
		<link rel="apple-touch-icon-precomposed" href="<?php echo get_stylesheet_directory_uri() ; ?>/assets/img/icons/apple-touch-icon-precomposed.png">
		<link href='http://fonts.googleapis.com/css?family=Averia+Serif+Libre:300,400,700|Raleway:400,300,700' rel='stylesheet' type='text/css'> 
		
		<?php wp_head(); ?>
		
		<!-- Homepage Only ======= -->
		<?php if (is_front_page()): ?>
			<script type="text/javascript">
				// Remove class for theme display
				jQuery(document).ready(function(){
					jQuery('body').removeClass('page-template-default');
				});
			</script>	
		<?php endif; ?>
		
		<!-- Mood Paring Only ======= -->
		<?php if (is_page(17)): ?>
			<?php
				$meta_title = 'Title goes here';
				$meta_description = 'Description goes here.';
				$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage.jpg';
				if(isset($_GET['beer'])){
					switch($_GET['beer']){
						case '90Shilling':
							$meta_title = '90Shilling';
							$meta_description = '90Shilling description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-90shilling.png';
							break;
						case 'LooseLeaf':
							$meta_title = 'LooseLeaf';
							$meta_description = 'LooseLeaf description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-LooseLeaf.png';
							break;
						case 'Levity':
							$meta_title = 'Levity';
							$meta_description = 'Levity description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-Levity.png';
							break;
						case 'Cutthroat':
							$meta_title = 'Cutthroat';
							$meta_description = 'Cutthroat description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-Cutthroat.png';
							break;
						case 'EasyStreet':
							$meta_title = 'EasyStreet';
							$meta_description = 'EasyStreet description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-EasyStreet.png';
							break;
						case 'IPA':
							$meta_title = 'IPA';
							$meta_description = 'IPA description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-IPA.png';
							break;
						case 'FiveBarrel':
							$meta_title = 'FiveBarrel';
							$meta_description = 'FiveBarrel description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-FiveBarrel.png';
							break;
						case 'Runoff':
							$meta_title = 'Runoff';
							$meta_description = 'Runoff description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-Runoff.png';
							break;
						case 'Isolation':
							$meta_title = 'Isolation';
							$meta_description = 'Isolation description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-Isolation.png';
							break;
						case 'StLupulin':
							$meta_title = 'StLupulin';
							$meta_description = 'StLupulin description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-StLupulin.png';
							break;
						case 'Myrcenary':
							$meta_title = 'Myrcenary';
							$meta_description = 'Myrcenary description goes here.';
							$meta_image = get_bloginfo('stylesheet_directory').'/img/shareimage-Myrcenary.png';
							break;
					}	
				}
			?>
			<meta property="og:title" content="<?php print $meta_title; ?>" />
			<meta property="og:description" content="<?php print $meta_description; ?>" />
			<meta property="og:image" content="<?php print $meta_image; ?>" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Odell Brewing Company Mood Pairing" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="http://odellbrewing.com/mood-pairing" />
			<meta name="twitter:title" content="<?php print $meta_title; ?>" />
			<meta name="twitter:description" content="<?php print $meta_description; ?>" />
			<meta name="twitter:image" content="<?php print $meta_image; ?>" />
			<meta name="twitter:url" content="http://odellbrewing.com/mood-pairing" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
			<meta name="description" content="" />
			<meta name="abstract" content="" />
			<meta name="keywords" content="" />
			<link rel="image_src" href="" />
			<link rel="canonical" href="http://odellbrewing.com/mood-pairing" />
			<link rel="shortlink" href="http://odellbrewing.com/mood-pairing" />
			<link href="<?php echo get_bloginfo('stylesheet_directory'); ?>/css/moodpairing.css" rel="stylesheet" type="text/css">
			<link href="<?php echo get_bloginfo('stylesheet_directory'); ?>/css/weather-icons.css" rel="stylesheet" type="text/css">
			<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700' rel='stylesheet' type='text/css'>
			<link href='http://fonts.googleapis.com/css?family=Averia+Serif+Libre:700,400,100italic' rel='stylesheet' type='text/css'>
			<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
			<script type="text/javascript" src="<?php echo get_bloginfo('stylesheet_directory'); ?>/js/jquery.color-2.1.2.min.js"></script>
			<script src="<?php echo get_bloginfo('stylesheet_directory'); ?>/js/easeljs-0.7.1.min.js"></script>
			<script src="<?php echo get_bloginfo('stylesheet_directory'); ?>/js/tweenjs-0.5.1.min.js"></script>
			<script src="<?php echo get_bloginfo('stylesheet_directory'); ?>/js/movieclip-0.7.1.min.js"></script>
			<script src="<?php echo get_bloginfo('stylesheet_directory'); ?>/js/preloadjs-0.4.1.min.js"></script>
			<script type="text/javascript" src="<?php echo get_bloginfo('stylesheet_directory'); ?>/js/moodpairing-header.js"></script>
			<script type="text/javascript" src="<?php echo get_bloginfo('stylesheet_directory'); ?>/js/moodpairing.js"></script>
		<?php endif; ?>
		
	</head>

	<?php $post = $wp_query->post; ?>	
	<?php if( is_shop() || is_product() || is_product_category() ): ?>
		<body <?php body_class(); ?> onload="checkCookie(); init();">
	<?php elseif(get_field('header_image_or_animation',$post->ID) == 'animation' ): ?>
		<body <?php body_class(); ?> onload="checkCookie(); init();">
	<?php else: ?>
		<body <?php body_class(); ?> onload="checkCookie();">
	<?php endif; ?>
		
		
	<div class="wrapper">
		
	<?php include ('agegate.php'); ?>
		
	<?php do_action('foundationPress_after_body'); ?>
	
	<div class="off-canvas-wrap agegate-checkpoint" data-offcanvas>

	<?php $post_type = $_GET['post_type']; ?>	
	<div class="inner-wrap <?php if ($post_type == 'beer'):?>search-beer<?php endif; ?>">
	
	<?php do_action('foundationPress_layout_start'); ?>
	
	<nav class="tab-bar show-for-small-only">
		<section class="right-small">
			<a class="right-off-canvas-toggle menu-icon" href="#"><span></span></a>
		</section>
		<a href="<?php echo get_bloginfo('wpurl'); ?>" class="mobile-click-home"></a>
	</nav>

	<?php get_template_part('parts/off-canvas-menu'); ?>
	
	<?php get_template_part('parts/top-bar'); ?>

<section class="container suck-up" role="document">
	<?php do_action('foundationPress_after_header'); ?>
