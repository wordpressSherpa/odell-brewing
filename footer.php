		
	</section>

	<a class="exit-off-canvas"></a>
	<?php do_action('foundationPress_layout_end'); ?>
	</div>
</div>

	<div id="push"></div>
</div> <!-- End .wrap -->

<div class="footer">
	<footer class="row footer-bg-texture">
		<?php do_action('foundationPress_before_footer'); ?>
		<div class="small-12 medium-6 columns">
			<div class="row">
				<div class="small-12 columns">
					<?php wp_nav_menu( array( 'theme_location' => 'footer_menu' ) ); ?>
				</div>
			</div>
			
			<div class="row collapse email-signup">
	        	<div class="small-10 columns">
	        	  <input type="text" placeholder="Email">
	        	</div>
	        	<div class="small-2 columns">
	        	  <a href="#" class="button postfix">Go</a>
	        	</div>
	      	</div>
	      	
	      	<div class="row">
				<div class="small-12 columns">
					<?php wp_nav_menu( array( 'theme_location' => 'footer_lower_menu' ) ); ?>
				</div>
			</div>
			
		</div>
		<div class="small-12 medium-6 columns footer-text ">
			<div class="row" >
				<div class="small-8 columns">
					<?php echo odl_footer_txt_1(); ?><br />
					<?php echo odl_footer_txt_2(); ?>
				</div>
				<div class="small-4 columns hide-for-small social-icons">
					<a href="https://www.facebook.com/OdellBrewingCo" target="_blank"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/icons/icon_fb.png" alt="Odell's Facebook"></a>
					<a href="https://twitter.com/#!/OdellBrewing" target="_blank"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/icons/icon_twitter.png" alt="Odell's Twitter"></a>
					<a href="https://www.youtube.com/channel/UCAzz9J7n4I2wS4KBbZ7XMtA" target="_blank"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/icons/icon_yt.png" alt="Odell's YouTube"></a>
					<a href="https://www.pinterest.com/odellbrewing"target="_blank"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/icons/icon_pin.png" alt="Odell's Pinterest"></a>
				</div>
			</div>
			<div class="row">
				<div class="small-12 columns">
					<?php echo odl_footer_txt_3(); ?>
				</div>
			</div>
		</div>
		<?php //dynamic_sidebar("footer-widgets"); ?>
		<?php do_action('foundationPress_after_footer'); ?>
	</footer>
</div> <!-- End .footer --> 

<?php wp_footer(); ?>
<?php do_action('foundationPress_before_closing_body'); ?>

<?php /* <script src="<?php bloginfo('stylesheet_directory'); ?>/js/90-homepage.js"></script> */ ?>

</body>
</html>
