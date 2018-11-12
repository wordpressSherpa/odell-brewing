/* 
	 * Image Slider
	 */
	 
	// Add Image Buttons
	jQuery('.product-image-container .images').append('<a href="#" class="prev-img prod-img-nav"></a> <a href="#" class="next-img prod-img-nav"></a> ')
	
	// Var to count image clicks
	window.globalClick = 0;
	
	// Add Number Classs to Thumbs
	jQuery('.yith_magnifier_gallery li').each(function(index){
		var img_class = 'thumb-'+index;
		jQuery(this).find('a img').addClass(img_class);
	});
	
	// Click Prev Image
	jQuery('.prev-img').click(function(){
		// Update Click
		globalClick = globalClick + -1;
		var thumb_class = '.thumb-'+globalClick;
		// Get Image
		var img_src = jQuery(thumb_class).attr("src");
		// Set Image
		jQuery('.woocommerce-main-image img').attr("src",img_src);
		return false;
	});
	
	// Click Next Image
	jQuery('.next-img').click(function(){
		// Update Click
		globalClick = globalClick + 1;
		var thumb_class = '.thumb-'+globalClick;
		// Get Image
		var img_src = jQuery(thumb_class).attr("src");
		var a_href  = jQuery(thumb_class).parent().attr("href");
		console.log(a_href);
		// Set Image
		jQuery('.woocommerce-main-image img').attr("src",img_src);
		jQuery('.woocommerce-main-image').attr("href",a_href);
		return false;
	});