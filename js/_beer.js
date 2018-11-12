jQuery(document).ready(function(){
	
	/* 
	 * Custom Beer Attribute Filter
	 */

	// Set URL on Change & Load Page 
	jQuery('#beer-filter select').change(function() {
		var id  = jQuery(this).attr('id');
		var val = jQuery(this).val()
		// Get base page URL
		var current_url = (document.URL);     
		var params      = current_url.split("?");
		
		// IF Select Val =none
		if(params[1] == 'type=none') {
			window.location = params[0];
		}
		// Else Select Val = valid 
		else {		
			var url = params[0]+'?'+id+'='+val;
			// Open New URL
			if (url) { 
				window.location = url;
			}
			return false;
		}
		
	});
	
	// Update Select if on Filered Page
	var current_url = (document.URL);     
	var params      = current_url.split("?");
	if(params[1]) { 
		// Get Settings
		var param      = params[1].split("=");	
		var select_id  = param[0];
		var select_val = param[1];
		// Find Select and Set	
		jQuery('#beer-filter #'+select_id).val(select_val);
	}
	
	/* 
	 * Beer List Display (Grid / List)
	 */
	jQuery('#beer-grid').click(function() {
		jQuery('.toggle-display .list-view').fadeOut('medium',function() {
			jQuery('.toggle-display .grid-view').fadeIn('medium');
			jQuery('#beer-grid').addClass('active');
			jQuery('#beer-list').removeClass('active');
		});	
		return false;
	});
	jQuery('#beer-list').click(function() {
		jQuery('.toggle-display .grid-view').fadeOut('medium',function() {
			jQuery('.toggle-display .list-view').fadeIn('medium');
			jQuery('#beer-list').addClass('active');
			jQuery('#beer-grid').removeClass('active');
		});	
		return false;
	});
	 
	/* 
	 * Beer Season Filter
	 */
	
	// Set URL on Change & Load Page 
	jQuery('#beer-season-filter li a').click(function() {
		var id  = 'season';
		var val = jQuery(this).attr('id');
		// Get base page URL
		
		var current_url = (document.URL);     
		var params      = current_url.split("?");
		
		// IF Select Val =none
		if(params[1] == 'type=none') {
			window.location = params[0];
		}
		// Else Select Val = valid 
		else {		
			var url = params[0]+'?'+id+'='+val;
			// Open New URL
			if (url) { 
				window.location = url;
			}
			return false;
		}
		
	}); 
	
	/* 
	 * Beer List Show More Button
	 */
	
	// Display More Beer Button
	var beer_count = jQuery('.beer-row').length;
	if(beer_count > 1) {
		jQuery('.more-beer').show();
	}
	else {
		jQuery('.more-beer').hide();
	}
	
	// Set number of items to show
	setTimeout(function() {
		jQuery('.beer-list').each(function() {
		    var list = jQuery(this);
			list.find('.beer-row:gt(0)').slideToggle(); 
		});
	}, 250)
	
	jQuery('.more-beer').click(function() {
		jQuery('.beer-row:gt(0)').slideToggle();    
		/*if ( !jQuery('.beer-list .more-beer:visible').length ) {
		
    		console.log('hidden');
		}
		else {
			console.log('visibile');
		}
		*/
		return false;
	});	
	
});