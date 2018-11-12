var prevPage = 0;
var currentPage = 0;
var QuestionCount = 9;
//var QuestionWeight = { 1:3, 2:2, 3:2, 4:1, 5:1, 6:1, 7:2, 8:1, 9:2 }; //QUESTION NUMBER : POINTS PER ANSWER
//var Answers = {1:null, 2:null, 3:null, 4:null, 5:null, 6:null, 7:0, 8:0, 9:0};
//var Answered = {1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false};
var QuestionWeight = { 1:1, 2:2, 3:2, 4:1, 5:1, 6:1, 7:2, 8:2, 9:3 }; //QUESTION NUMBER : POINTS PER ANSWER
var Answers = {1:0, 2:null, 3:null, 4:null, 5:null, 6:null, 7:0, 8:0, 9:null};
var Answered = {1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false};
var BeerTally = {}; 
function initBeerTally(){
	BeerTally = { //BEER : POINTS
		'90Shilling':0, 
		'LooseLeaf':0, 
		'Levity':0, 
		'Cutthroat':0, 
		'EasyStreet':0, 
		'IPA':0, 
		'FiveBarrel':0, 
		'Runoff':0, 
		'Isolation':0 ,
		'StLupulin':0,
		'Myrcenary':0
	};
}
initBeerTally();

var BeerTallyWeather = {}; 
function initBeerTallyWeather(){
	BeerTallyWeather = {
		'90Shilling':0, 
		'LooseLeaf':0, 
		'Levity':0, 
		'Cutthroat':0, 
		'EasyStreet':0, 
		'IPA':0, 
		'FiveBarrel':0, 
		'Runoff':0, 
		'Isolation':0 ,
		'StLupulin':0,
		'Myrcenary':0
	};
}
initBeerTallyWeather();

var DocketText = [
	'A hot date',
	'Hangin’ out with friends',
	'A snowy wood and a warm fire',
	'Skiing, kayaking, biking. Or all three.',
	'Enjoying the sunshine',
	'Who wants to know?'
];

var Beers = {
	'90Shilling': {
		'title':'90 Shilling',
		'img':'beer-90shilling.png',
		'mood':'ALWAYS APPROPRIATE',
		'body':'Looks like you got a little happy with the skip button? No worries, that’s cool, maybe you just want to drink a beer. Since you didn’t answer enough questions to calculate a mood, we’ll suggest something we think might work well no matter how you’re feeling. Try a 90 Shilling, our flagship beer and the, “Always Appropriate Ale.” A 90 is good at any time, for any occasion, and pairs well with any mood. Enjoy.'	
	}, 
	'LooseLeaf':{
		'title':'Loose Leaf',
		'img':'beer-looseleaf.png',
		'mood':'ADVENTUROUS',
		'body':'It’s seems you’re in a rather adventurous mood, compadre. If our magical mood-detecting machine is correct, then you would be well served with a few Loose Leaf American Session Ales—the perfect beer for an epic day of adventuring and going with the flow.'	
	}, 
	'Levity':{
		'title':'Levity',
		'img':'beer-levity.png',
		'mood':'LIGHT-HEARTED',
		'body':'You are one light-hearted son of a b****. We think right now you would really enjoy a Levity, or two— our lighter take on the traditional amber ale. This beer doesn’t take itself too seriously and, according to your results, neither do you.'	
	}, 
	'Cutthroat':{
		'title':'Cutthroat Porter',
		'img':'beer-cutthroat.png',
		'mood':'CONTEMPLATIVE',
		'body':'Ahhh...The person in the mood for a porter is in a mood just as rich, complex, and deep as the beer itself. Perhaps some cooler weather has you feeling particularly introspective? Or, a long day of hard work has you searching for a beer to quench your thirst and relax your soul? Look no further than the smooth and robust coffee and chocolate notes in our Cutthroat Porter. It may very well be the only thing on earth that can truly understand you right now.'	
	}, 
	'EasyStreet':{
		'title':'Easy Street Wheat',
		'img':'beer-easystreet.png',
		'mood':'MAXED AND RELAXED',
		'body':'Woah, there—quick, take a load off. Shrug your worries to the floor and grab an Easy Street. This beer’s good any time of the year, but for us and probably for you, the way an ice-cold wheat beer feels on a hot, sunny day, is tantamount to heaven on earth. Your easy-going mood will pair well with this light, refreshing, and citrusy beer-in-your-hand type beer.'	
	}, 
	'IPA':{
		'title':'IPA',
		'img':'beer-ipa.png',
		'mood':'RED, WHITE AND BOLD',
		'body':'Saddle up, partner, seems like you’re ready to go for a ride. We took a traditional India Pale Ale and made it bolder and more flavorful—American Style. Sounds like you’re in the mood to be a little bolder and more flavorful yourself. That’s a patriot.'	
	}, 
	'FiveBarrel':{
		'title':'5-Barrel Pale Ale',
		'img':'beer-5barrel.png',
		'mood':'LIVELY',
		'body':'Feeling a little lively today, are we? Good, because we’ve got a beer to match. The 5-Barrel Pale Ale is a beer’s beer. With essential oils extracted from select hops, an infusion of fresh whole hop flowers at the beginning of our process and four more hop additions throughout, this brew packs a fresh, lively flavor and aroma that pairs well with someone feeling as spry as you are.'	
	}, 
	'Runoff':{
		'title':'Run Off Red',
		'img':'beer-isolation.png',
		'mood':'VERNAL',
		'body':'Ah! Even if spring isn’t actually in the air, it is in you. Check your calendar because if it’s between January and April, a delicious Runoff Red IPA will pair perfectly with your spring-like mood. The citrus and pine notes in this dry-hopped ale just might melt your heart and the snow.'	
	}, 
	'Isolation':{
		'title':'Isolation',
		'img':'beer-isolation.png',
		'mood':'SOLITARY',
		'body':'All too often the word ‘solitary’ gets dragged through the mud. But between us, there’s nothing more pleasant than that solitary feeling you get when you look to the sky and see the first flakes of the season. Which is why this sweet, caramel, malty ale with a crisp hop finish is the perfect match for you.'	
	},
	'StLupulin':{
		'title':'St. Lupulin',
		'img':'beer-stlupulin.png',
		'mood':'MAGICAL',
		'body':'The long days and warm nights of an endless summer don’t just make you feel happy, they make you feel magical. Which is why this esoteric extra pale summer ale is named after St. Lupulin, a mystical legend in our brew house and the archetypal hophead. When you want to be swayed by the mysterious powers of the extraordinary oils contained within the hop resin, lupulin, grab one of these and doze off under the summer sun.'	
	},
	'Myrcenary':{
		'title':'Myrcenary',
		'img':'beer-myrcenary.png',
		'mood':'BOLDER THAN BOLD',
		'body':'Ok, since you’re obviously in a cut-the-crap kind of mood, we’re going to give it to you straight. Grab a 4- pack of Myrcenary Double IPA and get to doing whatever it is you feel you need to be doing right now. Myrcenary is a salute to all those who live with a passionate and relentless love affair for recklessly hop- forward beers—so grab a cold one and carry on, soldier.'	
	}
};

$(document).ready(function() {
	
	var base_url = 'http://localhost:8888/c_cactus/odell/wordpress/wp-content/themes/odell/';
	
	setTimeout(function(){
		preloadImages([
			base_url  + 'img/90shilling.png', base_url  + 'img/arrow-left.png', base_url  + 'img/arrow-right.png', base_url  + 'img/beer-5barrel.png', base_url  + 'img/beer-90shilling.png', base_url  + 'img/beer-cutthroat.png', base_url  + 'img/beer-easystreet.png', base_url  + 'img/beer-ipa.png', base_url  + 'img/beer-isolation.png', base_url  + 'img/beer-levity.png', base_url  + 'img/beer-looseleaf.png', base_url  + 'img/beer-myrcenary.png', base_url  + 'img/beer-stlupulin.png', base_url  + 'img/checkbox-checked.jpg', base_url  + 'img/checkbox.jpg', base_url  + 'img/clock-bg.png', base_url  + 'img/clock-bighand.png', base_url  + 'img/clock-smallhand.png', base_url  + 'img/colorwheel-black.png', base_url  + 'img/colorwheel-blue.png', base_url  + 'img/colorwheel-dial.png', base_url  + 'img/colorwheel-dot.png', base_url  + 'img/colorwheel-green.png', base_url  + 'img/colorwheel-purple.png', base_url  + 'img/colorwheel-red.png', base_url  + 'img/colorwheel-yellow.png', base_url  + 'img/colorwheel.png', base_url  + 'img/go.jpg', base_url  + 'img/header', base_url  + 'img/header.jpg', base_url  + 'img/icon-q2-amelia.png', base_url  + 'img/icon-q2-bill.png', base_url  + 'img/icon-q2-charles.png', base_url  + 'img/icon-q2-ellen.png', base_url  + 'img/icon-q2-leonardo.png', base_url  + 'img/icon-q2-teddy.png', base_url  + 'img/icon-q3-beer.png', base_url  + 'img/icon-q3-dessert.png', base_url  + 'img/icon-q3-grill.png', base_url  + 'img/icon-q3-mix.png', base_url  + 'img/icon-q3-pizza.png', base_url  + 'img/icon-q3-salad.png', base_url  + 'img/icon-q3-tortilla.png', base_url  + 'img/icon-q4-2pac.png', base_url  + 'img/icon-q4-cash.png', base_url  + 'img/icon-q4-gaga.png', base_url  + 'img/icon-q4-marley.png', base_url  + 'img/icon-q4-phish.png', base_url  + 'img/icon-q4-zeppelin.png', base_url  + 'img/icon-q6-boots.png', base_url  + 'img/icon-q6-kick.png', base_url  + 'img/icon-q6-nothing.png', base_url  + 'img/icon-q6-out.png', base_url  + 'img/icon-q6-sandals.png', base_url  + 'img/icon-q6-ski.png', base_url  + 'img/icon-selected.png', base_url  + 'img/loader.gif', base_url  + 'img/share-email.jpg', base_url  + 'img/share-fb.jpg', base_url  + 'img/share-twitter.jpg', base_url  + 'img/ticker-button.jpg', base_url  + 'img/time-on.png',
			
			base_url  + 'img/header/OBC580-022_OdellMoodPairing_LAY.V1.2.jpg', base_url  + 'img/header/OBC580022_OdellMoodPairing_LAYV12.jpg', base_url  + 'img/header/bg.jpg',base_url  + 'img/header/leaf_03.png', base_url  + 'img/header/moodpairing.png', base_url  + 'img/header/pairingoutline.png', base_url  + 'img/header/spot.png',
		]);
	}, 100);
	
	resizing();
	$(window).resize(function(e) {
        resizing();
    });	
	
	headerInit(); //HEADER
	pageContentInit();
	navigationInit();
	pageTransition();
});

///////////////////////////////////////////////////////////////
// NAVIGATION /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function navigationInit(){
	$('#mp-nav-prev').click(function(e){
        e.preventDefault();
		prevPage = currentPage;
		currentPage--;
		history.replaceState({page: currentPage}, "title " + currentPage+1);
		navigationUpdateDisplay();
		pageTransition();	
		$('html, body').animate({ scrollTop: $('#mp-header').height() }, 'slow');	
    });
	$('#mp-nav-next').click(function(e){
        e.preventDefault();		
		prevPage = currentPage;
		currentPage++;
		history.pushState({page: currentPage}, "title " + currentPage+1);
		navigationUpdateDisplay();
		pageTransition();
		$('html, body').animate({ scrollTop: $('#mp-header').height() }, 'slow');	
    });
	window.onpopstate = function(event){
		if(event.state !== null){
			prevPage = currentPage;
			currentPage = event.state.page;
			pageTransition();
		}else{ //FIRST PAGE
			prevPage = currentPage;
			currentPage = 0;
			pageTransition();
		}
		navigationUpdateDisplay();
	};
	
	//ROLLOVER ANIMATIONS
	var hoverSpanPrev = $('#mp-nav-prev span');
	$("#mp-nav-prev").mouseenter(function(){
		$(hoverSpanPrev).removeClass('mp-reset').addClass('mp-enter');
	}).mouseleave(function(){
		$(hoverSpanPrev).removeClass('mp-enter').addClass('mp-leave');
		setTimeout(function(){
			$(hoverSpanPrev).removeClass('mp-leave').addClass('mp-reset');
		}, 500);
	});
	var hoverSpanNext = $('#mp-nav-next span');
	$("#mp-nav-next").mouseenter(function() {
		$(hoverSpanNext).removeClass('mp-reset').addClass('mp-enter');
	}).mouseleave(function(){
		$(hoverSpanNext).removeClass('mp-enter').addClass('mp-leave');
		setTimeout(function(){
			$(hoverSpanNext).removeClass('mp-leave').addClass('mp-reset');
		}, 500);
	});

	navigationUpdateDisplay();
}
function navigationUpdateDisplay(){
	if(currentPage === 0){
		$('#mp-nav-prev').addClass('mp-hidden');
	}else if(currentPage == QuestionCount){
		$('#mp-nav-prev, #mp-nav-current, #mp-nav-next').addClass('mp-hidden');
		finalTally();
		animateResultText();
	}else{
		$('#mp-nav-prev, #mp-nav-next').removeClass('mp-hidden');
	}
	$('#mp-nav-current').html((currentPage+1) + "/" + QuestionCount);
}
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for(var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");	
		if(pair[0] == variable) {
			return pair[1];
		}
	}
}
function pageTransition(){
	$('#mp-question-'+prevPage).hide();
	$('#mp-question-'+currentPage).show();
	//var w = $('#mp-question-'+currentPage + ' .mp-q-header').width()+10;
	//$('#mp-question-'+currentPage + ' .mp-q-header').css({'margin-left':-w/2});
}

var transitioning = false;
function autoTransition(){
	if($(window).width() <= 400){
		if(!transitioning){
			/*
			transitioning = true;
			setTimeout(function(){
				prevPage = currentPage;
				currentPage++;
				history.pushState({page: currentPage}, "title " + currentPage+1);
				navigationUpdateDisplay();
				pageTransition();
				$('html, body').animate({ scrollTop: $('#mp-header').height() }, 'slow');	
				transitioning = false;
			}, 1000);
			*/
		}
	}
}

///////////////////////////////////////////////////////////////
// QUESTION/CONTENT ///////////////////////////////////////////
///////////////////////////////////////////////////////////////
function pageContentInit(){
	
	//PAGE 1///////////////////////////////////////////////////
	$('.mp-time-question-link').click(function(e) {
        e.preventDefault();
		if(!$(this).hasClass('mp-time-question-link-on')){
			$('.mp-time-question-link').each(function(index, element) {
                $(element).removeClass('mp-time-question-link-on');
            });
			$(this).addClass('mp-time-question-link-on');
			
			var answer = parseInt($(this).parent().attr('id').split('-')[3], 10);
			switch(answer){
				case 0:
					trackEvent('Q1', '2pm');
					break;
				case 1:
					trackEvent('Q1', '4pm');
					break;	
				case 2:
					trackEvent('Q1', '6pm');
					break;	
				case 3:
					trackEvent('Q1', '8pm');
					break;	
				case 4:
					trackEvent('Q1', '10pm');
					break;	
				case 5:
					trackEvent('Q1', '12am');
					break;	
			}
			Answers[1] = answer;
			Answered[1] = true;
			autoTransition();
		}
    });
	/*var currentclock = 2;
	$('#mp-clock-bighand').css('transform','rotate(60deg)');
	$('#mp-clock').css('zoom',0.95);
	$('#mp-clock').css('padding-top','10px');
	$('#mp-clock').mouseenter(function(e) {
       	$(this).animate({'zoom':1, paddingTop:'0px'}, 200, 'swing');
    });
	$('#mp-clock').mouseleave(function(e) {
        $(this).animate({'zoom':0.95, paddingTop:'10px'}, 200, 'swing');
    });
	
	$('.mp-clock-link').click(function(e) {
        e.preventDefault();
		var idsplit = e.currentTarget.id.split('-');
		var which = idsplit[idsplit.length-1];
		var speed = 500;
		var prevclock = currentclock;
		switch(which){
			case '2':
				currentclock = 2;
				differenceinhours = Math.abs(prevclock - currentclock);
				AnimateRotate('#mp-clock-smallhand', 360*differenceinhours, 0, speed);
				AnimateRotate('#mp-clock-bighand', 30*currentclock, 30*prevclock, speed);
				$('#mp-clock-text').html('According to the position of the sun, it’s daytime.');
				trackEvent('Q1', '2pm');
				break;
			case '4':
				currentclock = 4;
				differenceinhours = Math.abs(prevclock - currentclock);
				AnimateRotate('#mp-clock-smallhand', 360*differenceinhours, 0, speed);
				AnimateRotate('#mp-clock-bighand', 30*currentclock, 30*prevclock, speed);
				$('#mp-clock-text').html('It’s 4:42 somewhere');
				trackEvent('Q1', '4pm');
				break;	
			case '6':
				currentclock = 6;
				differenceinhours = Math.abs(prevclock - currentclock);
				AnimateRotate('#mp-clock-smallhand', 360*differenceinhours, 0, speed);
				AnimateRotate('#mp-clock-bighand', 30*currentclock, 30*prevclock, speed);
				$('#mp-clock-text').html('Dinnertime');
				trackEvent('Q1', '6pm');
				break;	
			case '8':
				currentclock = 8;
				differenceinhours = Math.abs(prevclock - currentclock);
				AnimateRotate('#mp-clock-smallhand', 360*differenceinhours, 0, speed);
				AnimateRotate('#mp-clock-bighand', 30*currentclock, 30*prevclock, speed);
				$('#mp-clock-text').html('Who cares?');
				trackEvent('Q1', '8pm');
				break;	
			case '10':
				currentclock = 10;
				differenceinhours = Math.abs(prevclock - currentclock);
				AnimateRotate('#mp-clock-smallhand', 360*differenceinhours, 0, speed);
				AnimateRotate('#mp-clock-bighand', 30*currentclock, 30*prevclock, speed);
				$('#mp-clock-text').html('Quittin’ time');
				trackEvent('Q1', '10pm');
				break;	
			case '12':
				currentclock = 12;
				differenceinhours = Math.abs(prevclock - currentclock);
				AnimateRotate('#mp-clock-smallhand', 360*differenceinhours, 0, speed);
				AnimateRotate('#mp-clock-bighand', 30*currentclock, 30*prevclock, speed);
				$('#mp-clock-text').html('Quiet time');
				trackEvent('Q1', '12am');
				break;	
		}
		Answers[1] = currentclock/2;
		Answered[1] = true;
    });
	*/
	
	//ICONS////////////////////////////////////////////////////
	$('a.mp-qicon').mouseenter(function(e) {
		if(!$('#' + e.currentTarget.id).hasClass('mp-selected')){
			iconAnimation(e.currentTarget.id, 'in');
		}
    });
	$('a.mp-qicon').mouseleave(function(e) {
		if(!$('#' + e.currentTarget.id).hasClass('mp-selected')){
			iconAnimation(e.currentTarget.id, 'out');
		}
    });
	$('a.mp-qicon').click(function(e) {
        e.preventDefault();
		
		if(!$('#' + e.currentTarget.id).hasClass('mp-selected')){
			
			//PREVIOUSLY SELECTED ELEMENT ANIMATES OUT	
			var selected = $(this).parent().find('.mp-qicon.mp-selected');
			if(selected[0]){
				iconAnimation(selected[0].id, 'out');
			}
			
			//UNCHECK PREVIOUSLY SELECTED ELEMENT
			$(this).parent().find('.mp-qicon').each(function(index, element) {
				$(element).removeClass('mp-selected');
			});
			
			//ADD SELECTED CLASS
			$(this).addClass('mp-selected');
			
			//SAVE ANSWER
			var question = parseInt(e.currentTarget.id.split('-')[2].split('q')[1], 10);
			var answer = parseInt(e.currentTarget.id.split('-')[3], 10);
			Answered[question] = true;
			Answers[question] = answer;
			trackEvent('Q'+question, $(this).find('h3').html());
			autoTransition();
		}else{
			
			//UNSELECT
			$(this).removeClass('mp-selected');
			
			//UNSAVE ANSWER
			var question = parseInt(e.currentTarget.id.split('-')[2].split('q')[1], 10);
			Answered[question] = false;
			Answers[question] = null;
		}
    });
	
	function iconAnimation(id, inout){
		switch(inout){
			case 'in':
				$('#' + id + ' .mp-qicon-img').animate({marginTop:'0px'}, 200, 'swing');
				$('#' + id + ' h3').animate({marginTop:'15px'}, 200, 'swing');
				if($(window).width() > 768){
					$('#' + id + ' p').animate({opacity:1}, 200, 'swing');
				}
				//if('#'+id == '#mp-qicon-q6-5'){
				//	$('#' + id + ' #mp-qicon-q6-5-text').animate({marginTop:'75px'}, 200, 'swing');
				//}
				break;
			case 'out':
				$('#' + id + ' .mp-qicon-img').animate({marginTop:'15px'}, 200, 'swing');
				$('#' + id + ' h3').animate({marginTop:'0px'}, 200, 'swing');
				if($(window).width() > 768){
					$('#' + id + ' p').animate({opacity:0}, 200, 'swing');
				}
				//if('#'+id == '#mp-qicon-q6-5'){
				//	$('#' + id + ' #mp-qicon-q6-5-text').animate({marginTop:'90px'}, 200, 'swing');
				//}
				break;	
		}
	}
	
	//PAGE 5///////////////////////////////////////////////////
	$('#mp-checkbox-old, #mp-oldnew-old').click(function(e) {
        e.preventDefault();
		$('#mp-checkbox-old').addClass('mp-checked');
		$('#mp-checkbox-new').removeClass('mp-checked');
		$('#mp-oldnew-new').removeClass('mp-oldnew-selected');
		$('#mp-oldnew-old').addClass('mp-oldnew-selected');
		Answers[5] = 0;
		Answered[5] = true;
		trackEvent('Q5', 'Old School');
		autoTransition();
    });
	$('#mp-checkbox-old, #mp-oldnew-old').mouseenter(function(e) {
		if(!$('#mp-checkbox-old').hasClass('mp-checked')){
			$('#mp-oldnew-old').addClass('mp-oldnew-selected');
		}
    });
	$('#mp-checkbox-old, #mp-oldnew-old').mouseleave(function(e) {
		if(!$('#mp-checkbox-old').hasClass('mp-checked')){
			$('#mp-oldnew-old').removeClass('mp-oldnew-selected');
		}
    });
	
	$('#mp-checkbox-new, #mp-oldnew-new').click(function(e) {
        e.preventDefault();
		$('#mp-checkbox-new').addClass('mp-checked');
		$('#mp-checkbox-old').removeClass('mp-checked');
		$('#mp-oldnew-old').removeClass('mp-oldnew-selected');
		$('#mp-oldnew-new').addClass('mp-oldnew-selected');
		Answers[5] = 1;
		Answered[5] = true;
		trackEvent('Q5', 'New School');
		autoTransition();
    });
	$('#mp-checkbox-new, #mp-oldnew-new').mouseenter(function(e) {
		if(!$('#mp-checkbox-new').hasClass('mp-checked')){
			$('#mp-oldnew-new').addClass('mp-oldnew-selected');
		}
    });
	$('#mp-checkbox-new, #mp-oldnew-new').mouseleave(function(e) {
		if(!$('#mp-checkbox-new').hasClass('mp-checked')){
			$('#mp-oldnew-new').removeClass('mp-oldnew-selected');
		}
    });
	
	//PAGE 7///////////////////////////////////////////////////
	var prevWheel = 0;
	var currentWheel = 0;
	colorwheelTurn();
	//$('#mp-colorwheel-container').css('zoom',0.95);
	//$('#mp-colorwheel-container').css('padding-top','10px');
	//$('#mp-colorwheel-container').mouseenter(function(e) {
    //    $(this).animate({'zoom':1, paddingTop:'0px'}, 200, 'swing');
    //});
	//$('#mp-colorwheel-container').mouseleave(function(e) {
    //   $(this).animate({'zoom':0.95, paddingTop:'10px'}, 200, 'swing');
    //});
	$('#mp-colorwheel-a-red').click(function(e) {
        e.preventDefault();
		prevWheel = currentWheel;
		currentWheel = 0;
		colorwheelTurn();
		$('#mp-colorwheel-text').html('Red');
		trackEvent('Q7', 'Red');
		autoTransition();
    });
	$('#mp-colorwheel-a-red').mouseenter(function(e) {
        $('#mp-colorwheel-red').addClass('mp-color-on');
    });
	$('#mp-colorwheel-a-red').mouseleave(function(e) {
        $('#mp-colorwheel-red').removeClass('mp-color-on');
    });
	$('#mp-colorwheel-a-blue').click(function(e) {
        e.preventDefault();
		prevWheel = currentWheel;
		currentWheel = 1;
		colorwheelTurn();
		$('#mp-colorwheel-text').html('Blue');
		trackEvent('Q7', 'Blue');
		autoTransition();
    });
	$('#mp-colorwheel-a-blue').mouseenter(function(e) {
        $('#mp-colorwheel-blue').addClass('mp-color-on');
    });
	$('#mp-colorwheel-a-blue').mouseleave(function(e) {
        $('#mp-colorwheel-blue').removeClass('mp-color-on');
    });
	$('#mp-colorwheel-a-yellow').click(function(e) {
        e.preventDefault();
		prevWheel = currentWheel;
		currentWheel = 2;
		colorwheelTurn();
		$('#mp-colorwheel-text').html('Yellow');
		trackEvent('Q7', 'Yellow');
		autoTransition();
    });
	$('#mp-colorwheel-a-yellow').mouseenter(function(e) {
        $('#mp-colorwheel-yellow').addClass('mp-color-on');
    });
	$('#mp-colorwheel-a-yellow').mouseleave(function(e) {
        $('#mp-colorwheel-yellow').removeClass('mp-color-on');
    });
	$('#mp-colorwheel-a-green').click(function(e) {
        e.preventDefault();
		prevWheel = currentWheel;
		currentWheel = 3;
		colorwheelTurn();
		$('#mp-colorwheel-text').html('Green');
		trackEvent('Q7', 'Green');
		autoTransition();
    });
	$('#mp-colorwheel-a-green').mouseenter(function(e) {
        $('#mp-colorwheel-green').addClass('mp-color-on');
    });
	$('#mp-colorwheel-a-green').mouseleave(function(e) {
        $('#mp-colorwheel-green').removeClass('mp-color-on');
    });
	$('#mp-colorwheel-a-purple').click(function(e) {
        e.preventDefault();
		prevWheel = currentWheel;
		currentWheel = 4;
		colorwheelTurn();
		$('#mp-colorwheel-text').html('Purple');
		trackEvent('Q7', 'Purple');
		autoTransition();
    });
	$('#mp-colorwheel-a-purple').mouseenter(function(e) {
        $('#mp-colorwheel-purple').addClass('mp-color-on');
    });
	$('#mp-colorwheel-a-purple').mouseleave(function(e) {
        $('#mp-colorwheel-purple').removeClass('mp-color-on');
    });
	$('#mp-colorwheel-a-black').click(function(e) {
        e.preventDefault();
		prevWheel = currentWheel;
		currentWheel = 5;
		colorwheelTurn();
		$('#mp-colorwheel-text').html('Black');
		trackEvent('Q7', 'Black');
		autoTransition();
    });
	$('#mp-colorwheel-a-black').mouseenter(function(e) {
        $('#mp-colorwheel-black').addClass('mp-color-on');
    });
	$('#mp-colorwheel-a-black').mouseleave(function(e) {
        $('#mp-colorwheel-black').removeClass('mp-color-on');
    });
	$('#mp-colorwheel-a-dial').click(function(e) {
        e.preventDefault();
		prevWheel = currentWheel;
		if(currentWheel < 5){
			currentWheel++;
		}else{
			currentWheel = 0;
		}
		colorwheelTurn();
		switch(currentWheel){
			case 0:
				trackEvent('Q7', 'Red');
				break;
			case 1:
				trackEvent('Q7', 'Blue');
				break;
			case 2:
				trackEvent('Q7', 'Yellow');
				break;
			case 3:
				trackEvent('Q7', 'Green');
				break;
			case 4:
				trackEvent('Q7', 'Purple');
				break;	
			case 5:
				trackEvent('Q7', 'Black');
				break;
		};
		autoTransition();
    });
	function colorwheelTurn(){
		d = currentWheel*60-60;
		pd = prevWheel*60-60;
		AnimateRotate('#mp-colorwheel-dial', d, pd, 500);
		AnimateRotate('#mp-colorwheel-dot', d, pd, 500);
		Answers[7] = currentWheel;
		Answered[7] = true;
	}
	function AnimateRotate(id, angle, currentangle, speed) {
		var $elem = $(id);
		$({deg: currentangle}).animate({deg: angle}, {
			duration: speed,
			step: function(now) {
				$elem.css({
					transform: 'rotate(' + now + 'deg)'
				});
			}
		});
	}

	//PAGE 8///////////////////////////////////////////////////
	var toggling = false;
	var togglespeed = 300;
	var togglecount = DocketText.length;
	var currenttoggle = 0;
	$('#mp-flipper-top .mp-flipper-top-text').html(DocketText[0]);
	$('#mp-flipper-bottom-bg .mp-flipper-bottom-text').html(DocketText[0]);
	$('#mp-ticker-toggle, #mp-ticker-flipper').click(function(e) {
        e.preventDefault();
		if(!toggling){
			toggling = true;
			if(currenttoggle == togglecount-1){
				currenttoggle = 0;
			}else{
				currenttoggle++;
			}
			tickerNext();
		}
    });
	function tickerNext(){
	
		//TOP FLIP
		$('#mp-flipper-top-bg .mp-flipper-top-text').html(DocketText[currenttoggle]);
		$('#mp-flipper-top').animate({
			backgroundColor:'#000000',
			color:'#000000'
		}, togglespeed);
		$({deg: 0}).animate({deg: 90}, {
			duration: togglespeed,
			step: function(now) {
				$('#mp-flipper-top').css({
					transform: 'rotateX(' + now + 'deg)'
				});
			},
			complete: function(){
				//SET TEXT AND RESET ROTATIION
				$('#mp-flipper-top .mp-flipper-top-text').html(DocketText[currenttoggle]);
				$('#mp-flipper-top').removeAttr('style');
				
				//BOTTOM FLIP
				$('#mp-flipper-bottom .mp-flipper-bottom-text').html(DocketText[currenttoggle]);
				$('#mp-flipper-bottom').animate({
					backgroundColor:'#3f3f40',
					color:'#f1ebe5'
				}, togglespeed);
				$('#mp-flipper-bottom-bg').animate({
					backgroundColor:'#000000',
					color:'#000000'
				}, togglespeed);
				$({deg: 90}).animate({deg: 0}, {
					duration: togglespeed,
					step: function(now) {
						$('#mp-flipper-bottom').css({
							transform: 'rotateX(' + now + 'deg)'
						});
					},
					complete: function(){
						//SET TEXT AND RESET ROTATIION
						$('#mp-flipper-bottom-bg .mp-flipper-bottom-text').html(DocketText[currenttoggle]);
						$('#mp-flipper-bottom, #mp-flipper-bottom-bg').removeAttr('style');
						toggling = false;
					}
				});
				
			}
		});
		$('.mp-pagination').each(function(index, element) {
            $(this).removeClass('mp-pagination-on');
        });
		$('#mp-ticker-pagination-'+currenttoggle).addClass('mp-pagination-on');
		Answers[8] = currenttoggle;
		Answered[8] = true;
		autoTransition();
		trackEvent('Q8', DocketText[currenttoggle]);
	}
	//DOCKET PAGINATION
	for(i=0; i<DocketText.length; i++){
		var myclass = 'mp-pagination ';
		if(i==currenttoggle){myclass = 'mp-pagination mp-pagination-on';};
		$('#mp-ticker-pagination').append('<a href="" id="mp-ticker-pagination-'+i+'" class="'+myclass+'"></a>');
	}
	$('#mp-ticker-pagination').width(DocketText.length * (17+20));
	$('.mp-pagination').mouseover(function(){
		var which = parseInt($(this).attr('id').split('-')[3], 10);
		if(which != currenttoggle){
			$(this).addClass('mp-pagination-on');	
		}
	});
	$('.mp-pagination').mouseleave(function(){
		var which = parseInt($(this).attr('id').split('-')[3], 10);
		if(which != currenttoggle){
			$(this).removeClass('mp-pagination-on');	
		}
	});
	$('.mp-pagination').click(function(e){
		e.preventDefault();
		var which = parseInt($(this).attr('id').split('-')[3], 10);
		$('.mp-pagination').each(function(index, element) {
            $(this).removeClass('mp-pagination-on');
        });
		$('#mp-ticker-pagination-'+which).addClass('mp-pagination-on');
		if(which != currenttoggle){
			currenttoggle = which;
			tickerNext();
		}
	});
	
	//PAGE 9////////////////////////////////////////////////////
	$('#mp-enter-zip').submit(function(e) {
        e.preventDefault();
		var zip = $('#mp-enter-zip-field').val();
		Answered[9] = true;
		getWeatherCondition(zip);
    });
	
	//RESULTS///////////////////////////////////////////////////
	$('#mp-result-share-fb').click(function(e) {
        e.preventDefault();
		fbs_click(550, 550);
		trackEvent('Share Button', 'Facebook');
    });
	$('#mp-result-share-twit').click(function(e) {
        e.preventDefault();
		twitter_share();
		trackEvent('Share Button', 'Twitter');
    });
	$('#mp-result-share-email').click(function(e) {
        e.preventDefault();
		sendEmail();
		trackEvent('Share Button', 'Email');
    });

	
}

function animateResultText(){
	$('#mp-result-text h1').animate({
		'marginTop':'50px',
		'opacity':1
	}, 800, 'swing');
	setTimeout(function(){
		$('#mp-result-text h2').animate({
			'marginTop':'100px',
			'opacity':1
		}, 800, 'swing');
	}, 200);
	setTimeout(function(){
		$('#mp-result-text p').animate({
			'marginTop':'150px',
			'opacity':1
		}, 800, 'swing');
	}, 400);
		
}



///////////////////////////////////////////////////////////////
// ANSWERS ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function tallyCalculate(question, answer){
	console.log('question '+question+': '+answer);
	
	switch(question){
		
		case '1': //QUESTION 1 - TIME

			switch(answer){
				case null:
				
					break;
				case 0:
					BeerTally.LooseLeaf += QuestionWeight[1];
					break;
				case 1:
					BeerTally.Levity += QuestionWeight[1];
					BeerTally.Myrcenary += QuestionWeight[1];
					break;
				case 2:
					BeerTally.FiveBarrel += QuestionWeight[1];
					BeerTally.Runoff += QuestionWeight[1];
					break;
				case 3:
					BeerTally.EasyStreet += QuestionWeight[1];
					BeerTally.StLupulin += QuestionWeight[1];
					break;
				case 4:
					BeerTally.Isolation += QuestionWeight[1];
					BeerTally.Cutthroat += QuestionWeight[1];
					break;
				case 5:
					BeerTally.Cutthroat += QuestionWeight[1];
					BeerTally.IPA += QuestionWeight[1];
					break;
			}
			
			break;
		
		case '2': //QUESTION 2 - SPERIT CHANNELLING
		
			switch(answer){
				case null:
				
					break;
				case 0:
					BeerTally.IPA += QuestionWeight[2];
					BeerTally.LooseLeaf += QuestionWeight[2];
					BeerTally.Myrcenary += QuestionWeight[2];
					break;
				case 1:
					BeerTally.EasyStreet += QuestionWeight[2];
					BeerTally.Levity += QuestionWeight[2];
					break;
				case 2:
					BeerTally.FiveBarrel += QuestionWeight[2];
					BeerTally.Levity += QuestionWeight[2];
					break;
				case 3:
					BeerTally.Cutthroat += QuestionWeight[2];
					BeerTally.StLupulin += QuestionWeight[2];
					break;
				case 4:
					BeerTally.Levity += QuestionWeight[2];
					BeerTally.Runoff += QuestionWeight[2];
					break;
				case 5:
					BeerTally.Isolation += QuestionWeight[2];
					BeerTally.Cutthroat += QuestionWeight[2];
					BeerTally.Myrcenary += QuestionWeight[2];
					break;
			}
			
			break;
			
		case '3': //QUESTION 3 - COOKING
		
			switch(answer){
				case null:
				
					break;
				case 0:
					BeerTally.Cutthroat += QuestionWeight[3];
					BeerTally.IPA += QuestionWeight[3];
					BeerTally.Runoff += QuestionWeight[3];
					break;
				case 1:
					BeerTally.Levity += QuestionWeight[3];
					BeerTally.FiveBarrel += QuestionWeight[3];
					break;
				case 2:
					BeerTally.LooseLeaf += QuestionWeight[3];
					break;
				case 3:
					BeerTally.EasyStreet += QuestionWeight[3];
					break;
				case 4:
					BeerTally.IPA += QuestionWeight[3];
					BeerTally.StLupulin += QuestionWeight[3];
					break;
				case 5:
					BeerTally.Cutthroat += QuestionWeight[3];
					BeerTally.Isolation += QuestionWeight[3];
					break;
				case 6:
					BeerTally.Myrcenary += QuestionWeight[3];
					break;
			}
		
			break;
			
		case '4': //QUESTION 4 - JAM
		
			switch(answer){
				case null:
				
					break;
				case 0:
					BeerTally.IPA += QuestionWeight[4];
					BeerTally.Isolation += QuestionWeight[4];
					break;
				case 1:
					BeerTally.LooseLeaf += QuestionWeight[4];
					break;
				case 2:
					BeerTally.Levity += QuestionWeight[4];
					break;
				case 3:
					BeerTally.Cutthroat += QuestionWeight[4];
					BeerTally.IPA += QuestionWeight[4];
					break;
				case 4:
					BeerTally.FiveBarrel += QuestionWeight[4];
					BeerTally.Runoff += QuestionWeight[4];
					break;
				case 5:
					BeerTally.EasyStreet += QuestionWeight[4];
					BeerTally.StLupulin += QuestionWeight[4];
					break;
			}
		
			break;
			
		case '5': //QUESTION 5 - SOUL
		
			switch(answer){
				case null:
				
					break;
				case 0:
					BeerTally.Cutthroat += QuestionWeight[5];
					BeerTally.LooseLeaf += QuestionWeight[5];
					BeerTally.Isolation += QuestionWeight[5];
					BeerTally.StLupulin += QuestionWeight[5];
					break;
				case 1:
					BeerTally.FiveBarrel += QuestionWeight[5];
					BeerTally.IPA += QuestionWeight[5];
					BeerTally.Levity += QuestionWeight[5];
					BeerTally.Runoff += QuestionWeight[5];
					BeerTally.EasyStreet += QuestionWeight[5];
					BeerTally.Myrcenary += QuestionWeight[5];
					break;
			}
		
			break;
			
		case '6': //QUESTION 6 - FEET
		
			switch(answer){
				case null:
				
					break;
				case 0:
					BeerTally.EasyStreet += QuestionWeight[6];
					BeerTally.Levity += QuestionWeight[6];
					break;
				case 1:
					BeerTally.Levity += QuestionWeight[6];
					BeerTally.LooseLeaf += QuestionWeight[6];
					BeerTally.Runoff += QuestionWeight[6];
					break;
				case 2:
					BeerTally.Cutthroat += QuestionWeight[6];
					BeerTally.IPA += QuestionWeight[6];
					BeerTally.Myrcenary += QuestionWeight[6];
					break;
				case 3:
					BeerTally.Isolation += QuestionWeight[6];
					BeerTally.Cutthroat += QuestionWeight[6];
					break;
				case 4:
					BeerTally.FiveBarrel += QuestionWeight[6];
					BeerTally.IPA += QuestionWeight[6];
					break;
				case 5:
					BeerTally.LooseLeaf += QuestionWeight[6];
					BeerTally.StLupulin += QuestionWeight[6];
					break;
			}
		
			break;
			
		case '7': //QUESTION 7 - COLOR
		
			switch(answer){
				case null:
				
					break;
				case 0:
					BeerTally.IPA += QuestionWeight[7];
					BeerTally.Runoff += QuestionWeight[7];
					BeerTally.LooseLeaf += QuestionWeight[7];
					break;
				case 1:
					BeerTally.Cutthroat += QuestionWeight[7];
					BeerTally.Isolation += QuestionWeight[7];
					break;
				case 2:
					BeerTally.EasyStreet += QuestionWeight[7];
					BeerTally.FiveBarrel += QuestionWeight[7];
					break;
				case 3:
					BeerTally.Levity += QuestionWeight[7];
					break;
				case 4:
					BeerTally.StLupulin += QuestionWeight[7];
					BeerTally.Cutthroat += QuestionWeight[7];
					break;
				case 5:
					BeerTally.Myrcenary += QuestionWeight[7];
					BeerTally.Isolation += QuestionWeight[7];
					break;
			}
			
			break;
			
		case '8': //QUESTION 8 - DOCKET
			//trackEvent('Q8', DocketText[answer]);
			switch(answer){
				case null:
				
					break;
				case 0:
					BeerTally.IPA += QuestionWeight[8];
					BeerTally.FiveBarrel += QuestionWeight[8];
					break;
				case 1:
					BeerTally.Levity += QuestionWeight[8];
					BeerTally.EasyStreet += QuestionWeight[8];
					break;
				case 2:
					BeerTally.Cutthroat += QuestionWeight[8];
					BeerTally.Isolation += QuestionWeight[8];
					break;
				case 3:
					BeerTally.LooseLeaf += QuestionWeight[8];
					BeerTally.Runoff += QuestionWeight[8];
					break;
				case 4:
					BeerTally.EasyStreet += QuestionWeight[8];
					BeerTally.StLupulin += QuestionWeight[8];
					break;
				case 5:
					BeerTally.Myrcenary += QuestionWeight[8];
					break;
			}
		
			break;
	}
}



///////////////////////////////////////////////////////////////
// FINAL TALLY ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
var winner = '';
function finalTally(){
	
	//UNANSWERED QUESTIONS
	var unanswered = false;
	$.each(Answered, function(index, value) {
		if(value == false){
			trackEvent('Q'+index, 'Not Answered');
			unanswered = true;
		}
	});
	
	if(unanswered){
		winner = '90Shilling';
	}else{
	
		//CALCULATE TALLY FROM SAVED ANSWERS
		initBeerTally(); //CLEAR BEFORE CALCULATING
		
		//WEATHER TALLY
		$.each(BeerTally, function(index, value){
			BeerTally[index] += BeerTallyWeather[index];
		});
		$.each(Answers, function(index, value) {
			tallyCalculate(index, value);
		});
		
		//FIND HIGHEST SCORE
		var htmlresult = '';
		var tally = 0;
		$.each(BeerTally, function(index, value) {
			console.log(value + ' : ' + index);
			htmlresult += value + ' : ' + index + '<br />';
			if(value > tally){
				tally = value;
				winner = index;	
			}
		});
		
		//CHECK FOR TIES
		var winners = [];
		$.each(BeerTally, function(index, value) {
			if(value == tally){
				winners.push(index);
				console.log('winners: '+value);
			}
		});
		
		if(winners.length > 1){
			var rand = Math.floor(Math.random()*winners.length);
			console.log("rand: " + rand);
			winner = winners[rand];
			htmlresult += 'TIE<br />';
	
		}else{
			htmlresult += 'WINNER: ' + winner + ' at ' + tally + ' points<br />';
		}
	}
	
	console.log('WINNER: ' + winner);
	trackEvent('Result', Beers[winner].title);
	
	//UPDATE THE PAGE
	$('#mp-question-9 .mp-q-header h1').html(Beers[winner].title);
	$('#mp-result-img').html('<img src="img/'+Beers[winner].img+'" />');
	//$('#mp-result-img').attr('href',Beers[winner].link);
	$('#mp-result-text h2').html(Beers[winner].mood);
	$('#mp-result-text p').html(Beers[winner].body);
	
	//$('#mp-result-helper').html(htmlresult);
}

///////////////////////////////////////////////////////////////
// MISC ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
var weather = null;
function getWeatherCondition(zip){
	$('#mp-weather').removeAttr('style');
	$('#mp-weather-loading').css('display','block');
	$('#mp-enter-zip-error').hide();
	trackEvent('Q9', zip);
	$.ajax({
		url: "http://api.wunderground.com/api/afd64d61be45e123/conditions/q/"+zip+".json",
		dataType: "jsonp",
		success: function(parsed_json) {
			console.log(parsed_json);
			if(parsed_json.current_observation){
				weather = parsed_json.current_observation;
				$('#mp-weather-deg').html(weather.temp_f + '&deg;');
				$('#mp-weather-citystate').html(weather.display_location.city+', '+weather.display_location.state);
				var ob = weather.observation_time_rfc822.split(' ');
				var day = ob[0].substring(0, ob[0].length-1);
				var date = ob[1];
				var month = ob[2];
				var year = ob[3];
				$('#mp-weather-date').html(day+': '+month +' '+date+', '+year);
				$('#mp-weather-result').html(weather.weather);
				//$('#mp-weather-icon').html('<img src="http://icons.wxug.com/i/c/i/'+weather.icon+'.gif" />')
				var cssforweathericon = weatherIconMatch(weather.icon);
				$('#mp-weather-icon').addClass('wi');
				$('#mp-weather-icon').addClass(cssforweathericon);
				$('#mp-weather-loading').hide();
				$('#mp-weather').animate({marginTop:'65px', opacity:1}, 500, 'swing');
				
				initBeerTallyWeather();
				
				if(weather.temp_f > 45){
					BeerTallyWeather.Isolation += QuestionWeight[9];
					console.log('weaher: >45');
				}
				if(weather.temp_f > 50 || weather.temp_f > 65 && (weather.weather == 'Partly Cloudy' || weather.weather == 'Cloudy')){
					BeerTallyWeather.Cutthroat += QuestionWeight[9];
					console.log('weaher: >50 or >65 and cloudy');
				}
				if(weather.temp_f > 15 && weather.temp_f < 80){
					BeerTallyWeather.IPA += QuestionWeight[9];
					BeerTallyWeather.Myrcenary += QuestionWeight[9];
					console.log('weaher: >15 and <80');
				}
				if(weather.temp_f > 30 && weather.temp_f < 80){
					BeerTallyWeather.FiveBarrel += QuestionWeight[9];
					console.log('weaher: >30 and <80');
				}
				if(weather.temp_f < 60){
					BeerTallyWeather.Levity += QuestionWeight[9];
					console.log('weaher: <60');
				}
				if(weather.temp_f < 70){
					BeerTallyWeather.EasyStreet += QuestionWeight[9];
					BeerTallyWeather.StLupulin += QuestionWeight[9];
					console.log('weaher: <70');
				}
				BeerTallyWeather.LooseLeaf += QuestionWeight[9];
				BeerTallyWeather.Runoff += QuestionWeight[9];
		
				//SCROLL PAGE
				$("html, body").animate({scrollTop:$('#mp-enter-zip').offset().top}, 1000, 'swing');
				autoTransition();
				
			}else{
				$('#mp-enter-zip-error').show();
				$('#mp-weather-loading').css('display','none');
			}
			
		},
		fial: function(error){
			$('#mp-enter-zip-error').html("Sorry, we can't find your weather report.");
			$('#mp-enter-zip-error').show();
			$('#mp-weather-loading').css('display','none');
		}
	});
}

function resizing(){
	
}

function trackEvent(action, label){
	ga('send', 'event', 'Odell Mood Pairing', action, label);
	console.log('ga: ' + action + ', ' + label);
}

function preloadImages(arrayOfImages) {
    $(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
    });
}

function fbs_click(width, height){
    var leftPosition, topPosition;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    u=location.href;
	
	switch(winner){
		case '90Shilling':
			text = 'a 90 Shilling';
			break;
		case 'LooseLeaf':
			text = 'a Loose Leaf';
			break;
		case 'Levity':
			text = 'a Levity Amber Ale';
			break;
		case 'Cutthroat':
			text = 'a Cutthroat Porter';
			break;
		case 'EasyStreet':
			text = 'an Easy Street Wheat';
			break;
		case 'IPA':
			text = 'an Odell IPA';
			break;
		case 'FiveBarrel' :
			text = 'a 5 Barrel Pale Ale';
			break;
		case 'Runoff':
			text = 'a Run Off Red IPA';
			break;
		case 'Isolation':
			text = 'an Isolation Ale';
			break;
		case 'StLupulin':
			text = 'a St. Lupulin';
			break;
		case 'Myrcenary':
			text = 'a Myrcenary';
			break;
	};
	
    t="My current mood pairs perfectly with" + text;
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer', windowFeatures);
    return false;
}

function twitter_share(){
	var width = 575;
        height = 400;
        left = ($(window).width()  - width)  / 2;
        top = ($(window).height() - height) / 2;

		switch(winner){
			case '90Shilling':
				text = 'a 90 Shilling';
				break;
			case 'LooseLeaf':
				text = 'a Loose Leaf';
				break;
			case 'Levity':
				text = 'a Levity Amber Ale';
				break;
			case 'Cutthroat':
				text = 'a Cutthroat Porter';
				break;
			case 'EasyStreet':
				text = 'an Easy Street Wheat';
				break;
			case 'IPA':
				text = 'an Odell IPA';
				break;
			case 'FiveBarrel' :
				text = 'a 5 Barrel Pale Ale';
				break;
			case 'Runoff':
				text = 'a Run Off Red IPA';
				break;
			case 'Isolation':
				text = 'an Isolation Ale';
				break;
			case 'StLupulin':
				text = 'a St. Lupulin';
				break;
			case 'Myrcenary':
				text = 'a Myrcenary';
				break;
		};
		
		
		url ='http://twitter.com/share?text=' + encodeURIComponent("I used @odellbrewing's Mood Pairing generator. My current mood pairs perfectly with "+text+". Get yours") + '&url=http://bit.lyTBD';
        opts = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
 
    return false;	
}

function sendEmail(){
	var width = 550;
	var height = 580;
	var leftPosition, topPosition;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
	window.open('email/index.html','email', windowFeatures);
}

function weatherIconMatch(icon){
	switch(icon){
		case 'chanceflurries':
			return 'wi-snow';
			break;
		case 'chancerain':
			return 'wi-rain';
			break;
		case 'chancesleet':
			return 'wi-rain-mix	';
			break;
		case 'chancesnow':
			return 'wi-snow';
			break;
		case 'chancetstorms':
			return 'wi-day-thunderstorm';
			break;
		case 'clear':
			return 'wi-day-sunny';
			break;
		case 'cloudy':
			return 'wi-day-cloudy';
			break;
		case 'flurries':
			return 'wi-day-snow';
			break;
		case 'fog':
			return 'wi-day-fog';
			break;
		case 'hazy':
			return 'wi-day-fog';
			break;
		case 'mostlycloudy':
			return 'wi-cloudy';
			break;
		case 'mostlysunny':
			return 'wi-day-sunny-overcast';
			break;
		case 'partlycloudy':
			return 'wi-day-cloudy';
			break;
		case 'partlysunny':
			return 'wi-day-sunny-overcast';
			break;
		case 'sleet':
			return 'wi-day-rain-mix';
			break;
		case 'rain':
			return 'wi-day-rain';
			break;
		case 'snow':
			return 'wi-day-snow';
			break;
		case 'sunny':
			return 'wi-day-sunny';
			break;
		case 'tstorms':
			return 'wi-thunderstorm';
			break;
			
			
		case 'nt_chanceflurries':
			return 'wi-night-alt-snow';
			break;
		case 'nt_chancerain':
			return 'wi-night-alt-rain';
			break;
		case 'nt_chancesleet':
			return 'wi-night-rain-mix';
			break;
		case 'nt_chancesnow':
			return 'wi-night-alt-snow';
			break;
		case 'nt_chancetstorms':
			return 'wi-night-alt-lightning';
			break;
		case 'nt_clear':
			return 'wi-night-clear';
			break;
		case 'nt_cloudy':
			return 'wi-night-cloudy';
			break;
		case 'nt_flurries':
			return 'wi-night-alt-snow';
			break;
		case 'nt_fog':
			return 'wi-fog';
			break;
		case 'nt_hazy':
			return 'wi-fog';
			break;
		case 'nt_mostlycloudy':
			return 'wi-night-cloudy';
			break;
		case 'nt_mostlysunny':
			return 'wi-night-clear';
			break;
		case 'nt_partlycloudy':
			return 'wi-night-cloudy';
			break;
		case 'nt_partlysunny':
			return 'wi-night-cloudy';
			break;
		case 'nt_sleet':
			return 'wi-night-rain-mix';
			break;
		case 'nt_rain':
			return 'wi-night-rain';
			break;
		case 'nt_snow':
			return 'wi-night-alt-snow';
			break;
		case 'nt_sunny':
			return 'wi-night-clear';
			break;
		case 'nt_tstorms':
			return 'wi-thunderstorm';
			break;
	}
}
