<?php 
	
/**
 * Options Panel Options
 */

// Footer Text 1
function odl_footer_txt_1() {
    $optionsframework_settings = get_option('odell');
    if (isset($optionsframework_settings['odl_footer_txt_1'])) {	    
	    $odl_option = $optionsframework_settings['odl_footer_txt_1'];
		if ($odl_option) { return $odl_option; } 
    }
}
add_action('init', 'odl_footer_txt_1');

// Footer Text 2
function odl_footer_txt_2() {
    $optionsframework_settings = get_option('odell');
    if (isset($optionsframework_settings['odl_footer_txt_2'])) {	    
	    $odl_option = $optionsframework_settings['odl_footer_txt_2'];
		if ($odl_option) { return $odl_option; } 
    }
}
add_action('init', 'odl_footer_txt_2');

// Footer Text 3
function odl_footer_txt_3() {
    $optionsframework_settings = get_option('odell');
    if (isset($optionsframework_settings['odl_footer_txt_3'])) {	    
	    $odl_option = $optionsframework_settings['odl_footer_txt_3'];
		if ($odl_option) { return $odl_option; } 
    }
}
add_action('init', 'odl_footer_txt_3');
