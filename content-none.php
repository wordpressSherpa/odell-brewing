<?php
/**
 * The template for displaying a "No posts found" message
 *
 * @subpackage FoundationPress
 * @since FoundationPress 1.0
 */
?>



<div class="page-content">
	<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

	<p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'FoundationPress' ), admin_url( 'post-new.php' ) ); ?></p>

	<?php elseif ( is_search() ) : ?>
	
	<div class="row no-results">
		<div class="columns medium-8 medium-offset-2">
			<h1 class="page-title"><?php _e( 'Nothing Found', 'FoundationPress' ); ?></h1>
			<p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'FoundationPress' ); ?></p>
		</div>
	</div>
	<?php else : ?>



	<?php endif; ?>
</div>
