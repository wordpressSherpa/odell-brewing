jQuery(document).ready(function(){
	
	/* 
	 * Custom Filter Menu for Mobile
	 */
	
	// Open and close entire menu
	jQuery('#mobile-filter-trigger').not('#mobile-filter-trigger > *').click(function() {
		if(!jQuery('.mobile-filter-menu').is(":visible") ) {
			jQuery('.parent-toggle').removeClass('mobile-collapsed');
			jQuery('.parent-toggle').addClass('mobile-open');
		}
		jQuery('.mobile-filter-menu').slideToggle('medium', function() {
			// Animation complete.
			if(!jQuery('.mobile-filter-menu').is(":visible") ) {
				jQuery('.parent-toggle').addClass('mobile-collapsed');
				jQuery('.parent-toggle').removeClass('mobile-open');
			}
  		});

	});
	
	// Adjust menu to have "show all" under items with sub items
	if (jQuery('.mobile-filter-menu').length) {
		// Check to see if LI has children
		jQuery('.has-sub').each(function( index ) {
			var p_url = jQuery(this).parent().find('a').attr('href');
			jQuery(this).prepend('<li><a href="' + p_url + '">See All</a></li>');

		});		
	}
	
	// If has children, remove link and set as click element
	if (jQuery('.mobile-filter-menu').length) {
		// Disable Link
		if( jQuery('.mobile-filter-menu li').find('.has-sub').length != 0 ) {
			jQuery('.child-toggle .beer-cat-a').attr('href','#');
			jQuery('.mobile-filter-menu li.has-sub').find('.beer-cat-a').append('<div class="mobile-collapsed filter-arrow"></div>');
			jQuery('.child-toggle .beer-cat-a').append('<div class="mobile-collapsed filter-arrow"></div>');
		}
		// Add class 
		jQuery('.has-sub').parent().addClass('child-toggle');
		jQuery('.has-sub').parent().find('a').not('.has-sub a').append('<div class="mobile-collapsed filter-arrow"></div>');
	} 
	
	// Open & Close Sub Menus
	jQuery('.child-toggle a.beer-cat-a').click(function(e) {
		//if(e.target != this) return;
		if(e.target == this) {
			if(!jQuery('.has-sub').is(":visible") ) {
				jQuery(this).find('.filter-arrow').removeClass('mobile-collapsed');
				jQuery(this).find('.filter-arrow').addClass('mobile-open');
			}
			else {
				jQuery(this).find('.filter-arrow').addClass('mobile-collapsed');
				jQuery(this).find('.filter-arrow').removeClass('mobile-open');
			}
			jQuery(this).next('.has-sub').slideToggle('medium', function() {
				// Animation complete.
  			});
  			return false;
  		}
	});
	

	/* 
	 * Custom Beer Attribute Filter (Type, Color, IBU, ABV)
	 */
	
	// Clean Beer Filter Classes on Init 
	jQuery('.beer-filter').removeClass('filter-sort-up');
	jQuery('.beer-filter').removeClass('filter-sort-down');
	jQuery('.beer-filter').removeClass('active-up');
	jQuery('.beer-filter').removeClass('active-down');
	
	// Set classes for filter buttons on Init
	var current_url = (document.URL);
	var params      = current_url.split("?");
	
	// Beer Type Filter Add Classes from URL
	if (params[1] == 'type=sort_up')    { jQuery('#filter-beer-type').addClass('filter-sort-up active-up'); }
	if (params[1] == 'type=sort_down')  { jQuery('#filter-beer-type').addClass('filter-sort-down active-down'); }
	if (params[1] == 'color=sort_up')   { jQuery('#filter-beer-color').addClass('filter-sort-up active-up'); }
	if (params[1] == 'color=sort_down') { jQuery('#filter-beer-color').addClass('filter-sort-down active-down'); }
	if (params[1] == 'abv=sort_up')     { jQuery('#filter-beer-abv').addClass('filter-sort-up active-up'); }
	if (params[1] == 'abv=sort_down')   { jQuery('#filter-beer-abv').addClass('filter-sort-down active-down'); }
	if (params[1] == 'ibu=sort_up')     { jQuery('#filter-beer-ibu').addClass('filter-sort-up active-up'); }
	if (params[1] == 'ibu=sort_down')   { jQuery('#filter-beer-ibu').addClass('filter-sort-down active-down'); }
	
	// Filter Button - Beer Type
	jQuery('#filter-beer-type').click(function() {
		setFiltering(jQuery(this));
		return false;
	});
	
	// Filter Button - Beer Color
	jQuery('#filter-beer-color').click(function() {
		setFiltering(jQuery(this));
		return false;
	});
	
	// Filter Button - Beer ABV
	jQuery('#filter-beer-abv').click(function() {
		setFiltering(jQuery(this));
		return false;
	});
	
	// Filter Button - Beer IBU
	jQuery('#filter-beer-ibu').click(function() {
		setFiltering(jQuery(this));
		return false;
	});
	
	// Update the URL on filter click
	function setFiltering (clicked) {
		// Set filter param based off element clicked		
		if (jQuery(clicked).is('#filter-beer-type'))  { var filter = 'type'; }
		if (jQuery(clicked).is('#filter-beer-color')) { var filter = 'color'; }
		if (jQuery(clicked).is('#filter-beer-abv')) { var filter = 'abv'; }
		if (jQuery(clicked).is('#filter-beer-ibu')) { var filter = 'ibu'; }
		
		var url_params = '';
		// If Sorted Up
		if(jQuery(clicked).hasClass('filter-sort-up')) {
			var url_params = '?'+filter+'=sort_down'; // do the opposite
			urlChange(url_params);
		}
		// If Sort Down
		else if(jQuery(clicked).hasClass('filter-sort-down')) {
			var url_params = '?'+filter+'=sort_up'; // do the opposite
			urlChange(url_params);
		}
		// First Sort (same as Down)
		else {
			var url_params = '?'+filter+'=sort_up'; // do the opposite
			urlChange(url_params);
		}
		// Update the URL Paramaters 
		function urlChange(url_params) {
			// Get base page URL
			var current_url = (document.URL);
			var params      = current_url.split("?");    	
			var url         = params[0]+url_params; // do the opposite
			// Open New URL
			if (url) { 
				window.location = url;
			}
		}
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
	
	/* 
	 * Beer Category Active State (Seasonal Filter)
	 */
	 
	var current_url = (document.URL);
	var params      = current_url.split("/");
	var beer_cat    = params[7]; // SET THIS ONCE LIVE set_opt_1
	
	// Set Beer Category menu Active State
	if( jQuery('.beer-categories').length ) {
		// IF we are in a beer category
		if (beer_cat) {
			jQuery('.beer-categories li').removeClass('current-cat');
			jQuery('.beer-categories li').each(function() {
				if( jQuery(this).hasClass(beer_cat) ) {
					jQuery(this).addClass('current-cat');
				}
			});
		}
		else {
			
		}
	}
	
	/* 
	 * Buttons
	 */
	
	// Animate More info Button
	if (jQuery(window).width() > 1024) {
		jQuery('.hide-more').hover(function() {
			jQuery(this).stop().animate({'left': '0px'});
  		}, 
  		function() {
		  	jQuery(this).stop().animate({'left': '-6.5rem'});
		});
	}
	
	// Animate Related Product Button
	if (jQuery(window).width() > 1024) {
		jQuery('.related-product-btn-trigger').hover(function() {
			jQuery(this).stop().animate({'right': '0rem'});
  		}, 
  		function() {
		  	jQuery(this).stop().animate({'right': '-29rem'});
		});
	}
	
	// Animate More Info Button (list view)
	if (jQuery(window).width() > 1024) {
		jQuery('.list-view .more-info').hover(function() {
			jQuery(this).stop().animate({'margin-left': '0rem'});
			jQuery('.more-info-text').stop().animate({'width': '73%'});
  		}, 
  		function() {
		  	jQuery(this).stop().animate({'margin-left': '-9rem'});
		  	jQuery('.more-info-text').stop().animate({'width': '90%'});
		});
	}
	
	/* 
	 * Misc
	 */
	
	// Beer Finder Menu
	jQuery('.beerbrand-list-container ul.beerbrand-list li.more a:eq(0)').append('<div class="arrow"></div>');
	
	
}); // End jQuery Document Ready