jQuery(document).ready(function(){
	/* 
	 * Agegate	
	 */
	
	// Get Current Date
	var cur_month = new Date().getMonth() + 1
	var cur_year  = new Date().getFullYear();
	var cur_day   = new Date().getDate();
	
	// Default Date
	jQuery('.month').attr('value',cur_month);
	jQuery('.day').attr('value',cur_day);
	jQuery('.year').attr('value',cur_year);
	
	// Focus on Blur
	jQuery('.month').on('blur', function(){
		jQuery(this).attr('value', cur_month);
	}).on('focus', function(){
		jQuery(this).attr('value', '');
	});
	jQuery('.day').on('blur', function(){
		jQuery(this).attr('value', cur_day);
	}).on('focus', function(){
		jQuery(this).attr('value', '');
	});
	jQuery('.year').on('blur', function(){
		jQuery(this).attr('value', cur_year);
	}).on('focus', function(){
		jQuery(this).attr('value', '');
	});
	
	// On Submit
	jQuery('#site_access').on('keypress click', function(){
			
		// Set Birthdate
		var birth_month = jQuery('.month').val();
		var birth_day   = jQuery('.day').val();
		var bith_year   = jQuery('.year').val();
		var birthday    = birth_month + '-' + birth_day + '-' + bith_year;
		
		function getAge(dateString) {

			var dates = dateString.split("-");
			var d = new Date();
			
			var usermonth = dates[0];
			var userday = dates[1];
			var useryear = dates[2];
			
			var curday = d.getDate();
			var curmonth = d.getMonth()+1;
			var curyear = d.getFullYear();
			
			var age = curyear - useryear;
			
			if((curmonth < usermonth) || ( (curmonth == usermonth) && curday < userday  )){
			    age--;
			}	
			
			if(age >= 21) {
				// Grant Access, Set Cookie
				access = true;
				setCookie("access", access, 1);
				// Show Site 
				jQuery('.agegate').fadeOut('medium', function() {
					jQuery('.agegate-checkpoint').fadeIn('medium');
				});
			}
			else {
				// Deny Access, Set Cookie
				access = false;
				setCookie("access", access, 1);
				// Deny Screen
				jQuery('.date-entry').fadeOut('medium', function() {
					jQuery('.access-denied').fadeIn('medium');
				});
			}
			
			// Set Cookie
			function setCookie(odAccess,value,days) {
				var date = new Date();
				days = days || 7; // Set number of days here		
				date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000
				document.cookie = odAccess + "=" + value + "; expires=" + date.toGMTString();
			}
			
		}
		
		// Form Value Check
		var empty = false;
        jQuery('#agegate  input').each(function() {
            if (jQuery(this).val() == '') {
                empty = true;
            }
        });
		
		if (empty) {
			alert('Please enter your birth date.');
        } else {
			getAge(birthday);
        }
		
		return false;		
		
	}); // End Click Function
});

/* 
 * Agegate	Cookies
 */

// Check Cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Onload Set Access
function checkCookie() {
    var check_access = getCookie("access");
    if (check_access == "") {
	    // No Cookie set
	    jQuery('.agegate').show();
    } 
    else if (check_access == 'false' ) {
	   // Access Denied
	   jQuery('.agegate').show();
	   jQuery('.date-entry').hide();
	   jQuery('.access-denied').show(); 
    }
    else if(check_access == 'true') {
		// Access Granted
		jQuery('.date-entry').hide();
		jQuery('.agegate-checkpoint').show(); 
    }
    else {
	    // Ruh Roh
    }
}