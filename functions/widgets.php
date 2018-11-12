<?php


/**************************************
 * Sidebar Promo
 *************************************/
 
// Creating the widget 
/*class rmc_widget_promo extends WP_Widget {

function __construct() {
	parent::__construct(
		
		// Base ID of your widget
		'rmc_widget_promo', 
		
		// Widget name will appear in UI
		__('RMC Sidebar Promo', 'rmc_widget_promo_domain'), 
		
		// Widget description
		array( 'description' => __( 'RMC Sidebar Promo', 'rmc_widget_promo_domain' ), ) );}
		
		// Creating widget front-end
		public function widget( $args, $instance ) {
			
			$title   = apply_filters( 'widget_title', $instance['title'] );
			$text    = $instance['textarea'];
			$url     = $instance['url'];
			$btn_txt = $instance['btn_txt'];
			
			// Front End Output		 
			echo $args['before_widget'];
			echo '<div class="small-12 medium-12 large-12 columns support">';
			echo '<h4>'.$title.'</h4>';
			echo '<p>'.$text.'</p>';
			echo '<a href="'.$url.'" class="button expand">'.$btn_txt.'</a>';
			echo '</div>';
			echo $args['after_widget'];
		}
		
		// Backend Output
		public function form( $instance ) {
			if ( isset( $instance[ 'title' ] ) ) {
				$title = $instance[ 'title' ];
			}
			else {
				$title = __( 'New title', 'rmc_promo_domain' );
			}
			if ( isset( $instance[ 'url' ] ) ) {
				$url = $instance[ 'url' ];
			}
			else {
				$url = __( 'E.g. /contact-us', 'rmc_promo_domain' );
			}
			if ( isset( $instance[ 'textarea' ] ) ) {
				$textarea = $instance[ 'textarea' ];
			}
			else {
				$textarea = __( 'Text Here', 'rmc_promo_domain' );
			}
			if ( isset( $instance[ 'btn_txt' ] ) ) {
				$btn_txt = $instance[ 'btn_txt' ];
			}
			else {
				$btn_txt = __( 'Text Here', 'rmc_promo_domain' );
			}
			
		?>
		
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
			<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
			<label for="<?php echo $this->get_field_id( 'text' ); ?>"><?php _e( 'Text:' ); ?></label>
			<textarea class="widefat" id="<?php echo $this->get_field_id( 'textarea' ); ?>" name="<?php echo $this->get_field_name( 'textarea' ); ?>"><?php echo $textarea; ?></textarea>
			<label for="<?php echo $this->get_field_id( 'btn_txt' ); ?>"><?php _e( 'Button Text:' ); ?></label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'btn_txt' ); ?>" name="<?php echo $this->get_field_name( 'btn_txt' ); ?>" type="text" value="<?php echo esc_attr( $btn_txt ); ?>" />
			<label for="<?php echo $this->get_field_id( 'url' ); ?>"><?php _e( 'URL:' ); ?></label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'url' ); ?>" name="<?php echo $this->get_field_name( 'url' ); ?>" type="text" value="<?php echo esc_attr( $url ); ?>" />
		</p>
		
		<?php 
	}
		
	// Updating widget replacing old instances with new
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title']    = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		$instance['url']      = ( ! empty( $new_instance['url'] ) ) ? strip_tags( $new_instance['url'] ) : '';
		$instance['btn_txt']  = ( ! empty( $new_instance['btn_txt'] ) ) ? strip_tags( $new_instance['btn_txt'] ) : '';
		$instance['textarea'] = ( ! empty( $new_instance['textarea'] ) ) ? strip_tags( $new_instance['textarea'] ) : '';
		return $instance;
	}
	
} // Class rmc_widget_promo ends here

// Register and load the widget
function rmc_load_promo() {
	register_widget( 'rmc_widget_promo' );
}
add_action( 'widgets_init', 'rmc_load_promo' );*/