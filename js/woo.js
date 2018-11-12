jQuery(document).ready(function(){
	
	// Wrap Grid Images for Flash effect
	jQuery('.products li img').wrap('<figure></figure>');
	
	/* 
	 * Grid Masonry
	 */
    
    // Setup Masonry 
	var $container = jQuery('.post-type-archive-product .products');
	$container.imagesLoaded( function() {
	//$boxes.fadeIn();
	
	$container.masonry({
	      itemSelector: '.post-type-archive-product .products .product',
	      columnWidth: '.product',
	      percentPosition: true
	  });    
	});
	
	// Beer Type Sort
	jQuery('.woocommerce-page .f-dropdown').hover(function() {
			jQuery(this).parent('li').find('.beer-cat-a').addClass('hovered');
  		}, function() {
  			jQuery(this).parent('li').find('.beer-cat-a').removeClass('hovered');
		}
  	);

	/* 
	 * Tag Filtering
	 */

	 // Remove Classes from Tag List
	 jQuery('.wp-tag-cloud a').removeClass();
	 
	 // Add tag slug for Class
	 jQuery('.wp-tag-cloud a').each(function(){
		// Get URL and create class from Slug
		var url = jQuery(this).attr('href');
		var arr = url.split('product-tag');
		var tag = arr[1].replace('/', '');
		var tag = tag.replace('/', '');
		var tag = 'product-tag-'+tag;
		jQuery(this).addClass(tag);

		jQuery('.products li').each(function(tag){
			if(jQuery(this).hasClass(tag)) {
				console.log(tag);
			}
		});
		
		
	 });
	 
	 // Reorder Grid after clicking Sort By Beer
	 jQuery('.wp-tag-cloud a').click(function(){
	 	var tag = jQuery(this).attr('class');
	 	var tag_class = '.'+tag;
	 	
	 	if(tag_class != "") {
		 	jQuery('.product').hide();
		 	destroy();
		 	create();
	 		jQuery(tag_class).show();
	 		jQuery('.products').masonry('layout');
	 	}
	 	else {
		 	 jQuery('.product').show();
		 	 destroy();
		 	 create();
		 	 jQuery('.products').masonry('layout');
	 	}
	 	
	 	return false;
	 });
	
	// Insert Default 'Sort By Beer' text in tag cloud
	
	// Adjust inline font style on Tag Cloud
	jQuery('.widget_product_tag_cloud .wp-tag-cloud li').each(function(){
		jQuery(this).find('a').css('font-size','inherit');
	});
	
	
	/* 
	 * Product Social
	 */
	 
	jQuery('.prod-desc .sharedaddy').appendTo('.prod-social');


	/* 
	 * Image Slider
	 */
	 
	// Add Image Buttons
	jQuery('.product-image-container .images').append('<a href="#" class="prev-img prod-img-nav"></a> <a href="#" class="next-img prod-img-nav"></a> ');
	
	// Var to count image clicks
	window.globalClick = 0;
	
	// Add Number Classs to Thumbs
	jQuery('.thumbnails a').each(function(index){
		index = index +1; // adjust for main image
		var img_class = 'thumb-'+index;
		jQuery(this).find('img').addClass(img_class);
	});
	jQuery('.woocommerce-main-image img').addClass('thumb-0');
	
	// First Image
	window.globalFirstSrc   = jQuery('.thumb-0').attr('src');
	window.globalFirstHref  = jQuery('.thumb-0').parent().attr('href');
	
	// Click Prev Image
	jQuery('.prev-img').click(function(){
		
		// Update Click
		globalClick = globalClick - 1;
		var thumb_class = '.thumb-'+globalClick;
		
		console.log(globalClick);
		
		// Hide Button if first
		var first_class = '.thumb-0';
		if( thumb_class == first_class ) {
			jQuery('.prev-img').hide();
		} else {
			jQuery('.prev-img').show();
		}
		
		// Get Image
		if (globalClick == 0 ) {
			new_img = globalFirstSrc;
			a_href  = globalFirstHref;
		} else {
			var img_src = jQuery(thumb_class).attr("src");
			var new_img = img_src.replace('180', '600');
			var new_img = new_img.replace('180', '600');
			var a_href  = jQuery(thumb_class).parent().attr("href");
		}
		
		// Set Image
		jQuery('.woocommerce-main-image img').attr("src",new_img);
		jQuery('.woocommerce-main-image').attr("href",a_href);
		
		return false;
	});
	
	// Click Next Image
	jQuery('.next-img').click(function(){
	
		// Update Click
		globalClick = globalClick + 1;
		var thumb_class = '.thumb-'+globalClick;
			
		// Hide Button if last
		var item_count = jQuery('.thumbnails a').length;
		var last_class = '.thumb-' + item_count;
		if( thumb_class == last_class ) {
			jQuery('.next-img').hide();
			jQuery('.prev-img').show();
		}else {
			jQuery('.next-img').show();
			jQuery('.prev-img').show();
		}
		
		// Get Image
		var img_src = jQuery(thumb_class).attr("src");
		var new_img = img_src.replace('180', '600');
		var new_img = new_img.replace('180', '600');
		var a_href  = jQuery(thumb_class).parent().attr("href");

		// Set Image
		jQuery('.woocommerce-main-image img').attr("src",new_img);
		jQuery('.woocommerce-main-image').attr("href",a_href);
		
		return false;
	});

}); // End jQuery Document Ready