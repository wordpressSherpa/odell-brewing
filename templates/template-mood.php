<?php
/*
 * Template Name: Mood Paring
 */
?>

<?php get_header(); ?>

<div class="row  page-header home-canvas">
	<div class="small-12 columns canvas-height">
		<?php if(get_field('header_image_or_animation') == 'image' ): ?>
			<?php $header_image = get_field('header_image');  ?>
			<img src="<?php echo $header_image['url'] ?>" alt="<?php echo $header_image['alt'] ?>" />
		<?php elseif(get_field('header_image_or_animation') == 'animation' ): ?>
			<?php echo headerAnimation($post->ID); ?>
		<?php endif; ?>
	</div>
</div> <!-- End .home-canvas -->

<div class="row" <?php post_class() ?> id="post-<?php the_ID(); ?>">
	<div class="small-12 columns" role="main" >
		
	<?php do_action('foundationPress_before_content'); ?>
	
	
	
	<div id="mp-container">
	<div id="mp-header">
		<canvas id="mp-header-canvas" width="1699" height="370"></canvas>
    </div>
    <div id="mp-questions-container">
        <div id="mp-question-0" class="mp-question">
            <div class="mp-q-header">
            	<div class="mp-q-header-num">1</div>
                <div class="mp-q-header-line"></div>
            	<h1>What time is it?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            	<div id="mp-time-questions">
                    <div id="mp-time-question-0" class="mp-time-question">
                        <a href="#" class="mp-time-question-link"></a>
                        <div class="mp-time-question-text">According to the position of the sun, it's daytime</div>
                    </div>
                    <div id="mp-time-question-1" class="mp-time-question">
                        <a href="#" class="mp-time-question-link"></a>
                        <div class="mp-time-question-text mp-time-question-text-oneline">It's 4:42 somewhere</div>
                    </div>
                    <div id="mp-time-question-2" class="mp-time-question">
                        <a href="#" class="mp-time-question-link"></a>
                        <div class="mp-time-question-text mp-time-question-text-oneline">Dinnertime</div>
                    </div>
                    <div id="mp-time-question-3" class="mp-time-question">
                        <a href="#" class="mp-time-question-link"></a>
                        <div class="mp-time-question-text mp-time-question-text-oneline">Who cares?</div>
                    </div>
                    <div id="mp-time-question-4" class="mp-time-question">
                        <a href="#" class="mp-time-question-link"></a>
                        <div class="mp-time-question-text mp-time-question-text-oneline">Quiet time</div>
                    </div>
                    <div id="mp-time-question-5" class="mp-time-question">
                        <a href="#" class="mp-time-question-link"></a>
                        <div class="mp-time-question-text mp-time-question-text-oneline">Quittin' time</div>
                    </div>
            	</div>
            	<!--<div id="mp-clock">
                	<img id="mp-clock-bg" src="img/clock-bg.png" />
                    <img id="mp-clock-smallhand" src="img/clock-smallhand.png" />
                    <img id="mp-clock-bighand" src="img/clock-bighand.png" />
                    <a href="#" id="mp-clock-link-2" class="mp-clock-link"></a>
                    <a href="#" id="mp-clock-link-4" class="mp-clock-link"></a>
                    <a href="#" id="mp-clock-link-6" class="mp-clock-link"></a>
                    <a href="#" id="mp-clock-link-8" class="mp-clock-link"></a>
                    <a href="#" id="mp-clock-link-10" class="mp-clock-link"></a>
                    <a href="#" id="mp-clock-link-12" class="mp-clock-link"></a>
                </div>
                <div id="mp-clock-text">
                	According to the position of the sun, it’s daytime.
                </div>-->
            </div>
        </div>
        <div id="mp-question-1" class="mp-question">
            <div class="mp-q-header">
            	<div class="mp-q-header-num">2</div>
                <div class="mp-q-header-line"></div>
            	<h1>Whose spirit are you currently channeling?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            <div class="mp-q-content-inner">
            	<a href="#" id="mp-qicon-q2-0" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Teddy Roosevelt</h3>
                    <p>Speak softly &amp; drink good beer</p>
                </a>
                <a href="#" id="mp-qicon-q2-1" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Bill Murray</h3>
                    <p>Keep Earth Weird</p>
                </a>  
                <a href="#" id="mp-qicon-q2-2" class="mp-qicon mp-qicon-nomarginright">
                	<div class="mp-qicon-img"></div>
                    <h3>Charles Barkley</h3>
                    <p>Turrible, just turrible</p>
                </a> 
                <a href="#" id="mp-qicon-q2-3" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Leonardo Da Vinci</h3>
                    <p>Feeling like a renaissance man?</p>
                </a> 
                <a href="#" id="mp-qicon-q2-4" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Ellen DeGeneres</h3>
                    <p>Hey, there’s always room for a laugh</p>
                </a> 
                <a href="#" id="mp-qicon-q2-5" class="mp-qicon mp-qicon-nomarginright">
                	<div class="mp-qicon-img"></div>
                    <h3>Amelia Earhart</h3>
                    <p>Sometimes you have to fly solo</p>
                </a>   
                <div class="mp-clearboth"></div>
           	</div> 
            </div>
        </div>
        <div id="mp-question-2" class="mp-question">
            <div class="mp-q-header">
            	<div class="mp-q-header-num">3</div>
                <div class="mp-q-header-line"></div>
            	<h1>What’s cookin’?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            <div class="mp-q-content-inner">
            	<a href="#" id="mp-qicon-q3-0" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Just fired up the grill</h3>
                </a>
                <a href="#" id="mp-qicon-q3-1" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>The pizza guy’s on his way</h3>
                </a>
                <a href="#" id="mp-qicon-q3-2" class="mp-qicon mp-qicon-nomarginright">
                	<div class="mp-qicon-img"></div>
                    <h3>Trail Mix</h3>
                </a>
                <a href="#" id="mp-qicon-q3-3" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>They’re making me eat salad</h3>
                </a>
                <a href="#" id="mp-qicon-q3-4" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Anything wrapped in a tortilla</h3>
                </a>
                <a href="#" id="mp-qicon-q3-5" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Dessert!</h3>
                </a>
                <a href="#" id="mp-qicon-q3-6" class="mp-qicon mp-qicon-nomarginright">
                	<div class="mp-qicon-img"></div>
                    <h3>Beer is food</h3>
                </a>
            	<div class="mp-clearboth"></div>
            </div>
            </div>
        </div>
        <div id="mp-question-3" class="mp-question">
            <div class="mp-q-header">
            	<div class="mp-q-header-num">4</div>
                <div class="mp-q-header-line"></div>
            	<h1>What’s your jam?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            <div class="mp-q-content-inner">
            	<a href="#" id="mp-qicon-q4-0" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Johnny Cash</h3>
                    <p>The original man in black</p>
                </a> 
                <a href="#" id="mp-qicon-q4-1" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>2Pac</h3>
                    <p>There is a heaven for a ‘G’</p>
                </a> 
                <a href="#" id="mp-qicon-q4-2" class="mp-qicon mp-qicon-nomarginright">
                	<div class="mp-qicon-img"></div>
                    <h3>Phish</h3>
                    <p>Jam on</p>
                </a> 
                <a href="#" id="mp-qicon-q4-3" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Led Zeppelin</h3>
                    <p>Life is incomplete without getting the Led out</p>
                </a> 
                <a href="#" id="mp-qicon-q4-4" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Lady GaGa</h3>
                    <p>Make your b-b-b-beer face</p>
                </a> 
                <a href="#" id="mp-qicon-q4-5" class="mp-qicon mp-qicon-nomarginright">
                	<div class="mp-qicon-img"></div>
                    <h3>Bob Marley</h3>
                    <p>Stir it up, mon</p>
                </a> 
                <div class="mp-clearboth"></div>
           	</div>
            </div>
        </div>
        <div id="mp-question-4" class="mp-question">
            <div class="mp-q-header">
            	<div class="mp-q-header-num">5</div>
                <div class="mp-q-header-line"></div>
            	<h1>Which one?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            	<div id="mp-oldnew">
                    <a href="#" id="mp-checkbox-old" class="mp-checkbox"></a>
                    <a href="#" id="mp-oldnew-old" class="mp-oldnew">OLD SOUL</a>
                    <div id="mp-oldnew-or" class="mp-clearboth">
                        <div id="mp-oldnew-or-line-right" class="mp-oldnew-or-line"></div>
                        <div id="mp-oldnew-or-line-left" class="mp-oldnew-or-line"></div>
                        <div id="mp-oldnew-or-text">OR</div>
                    </div>
                    <a href="#" id="mp-checkbox-new" class="mp-checkbox mp-clearboth"></a>
                    <a href="#" id="mp-oldnew-new" class="mp-oldnew">NEW SOUL</a>
                </div>
            </div>
        </div>
        <div id="mp-question-5" class="mp-question">
            <div class="mp-q-header">
            	<div class="mp-q-header-num">6</div>
                <div class="mp-q-header-line"></div>
            	<h1>What’s been on your feet today?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            <div class="mp-q-content-inner">
            	<a href="#" id="mp-qicon-q6-0" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Sandals</h3>
                </a>
                <a href="#" id="mp-qicon-q6-1" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Kick-around shoes</h3>
                </a>
				<a href="#" id="mp-qicon-q6-2" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Boots</h3>
                </a>
				<a href="#" id="mp-qicon-q6-3" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Ski Boots</h3>
                </a>
				<a href="#" id="mp-qicon-q6-4" class="mp-qicon">
                	<div class="mp-qicon-img"></div>
                    <h3>Goin’ out shoes</h3>
                </a>
				<a href="#" id="mp-qicon-q6-5" class="mp-qicon">
                	<!--<div id="mp-qicon-q6-5-text">All of the above</div>-->
                	<div class="mp-qicon-img"></div>
                    <h3>Nothing</h3>
                </a>
                <div class="mp-clearboth"></div>
			</div>
            </div>
        </div>
        <div id="mp-question-6" class="mp-question">
            <div class="mp-q-header">
            	<div class="mp-q-header-num">7</div>
                <div class="mp-q-header-line"></div>
            	<h1>Which color speaks to you?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            	<div id="mp-colorwheel-container">
                    <div id="mp-colorwheel">
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel.png" id="mp-colorwheel-bg" />
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel-red.png" id="mp-colorwheel-red" />
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel-blue.png" id="mp-colorwheel-blue" />
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel-yellow.png" id="mp-colorwheel-yellow" />
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel-green.png" id="mp-colorwheel-green" />
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel-purple.png" id="mp-colorwheel-purple" />
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel-black.png" id="mp-colorwheel-black" />
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel-dial.png" id="mp-colorwheel-dial" />
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/colorwheel-dot.png" id="mp-colorwheel-dot" />
                    </div>
                    <div id="mp-colorwheel-anchors">
                    	<a href="#" id="mp-colorwheel-a-red" class="mp-colorwheel-a"></a>
                    	<a href="#" id="mp-colorwheel-a-blue" class="mp-colorwheel-a"></a>
                        <a href="#" id="mp-colorwheel-a-yellow" class="mp-colorwheel-a"></a>
                        <a href="#" id="mp-colorwheel-a-green" class="mp-colorwheel-a"></a>
                        <a href="#" id="mp-colorwheel-a-purple" class="mp-colorwheel-a"></a>
                        <a href="#" id="mp-colorwheel-a-black" class="mp-colorwheel-a"></a>
                        <a href="#" id="mp-colorwheel-a-dial" class="mp-colorwheel-a"></a>
                    </div>
                </div>
                <div id="mp-colorwheel-text">Red</div>
            </div>
        </div>
        <div id="mp-question-7" class="mp-question">
            <div class="mp-q-header">
            	<div class="mp-q-header-num">8</div>
                <div class="mp-q-header-line"></div>
            	<h1>What’s on the ol’ docket?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            	<div id="mp-ticker">
                	<a href="#" id="mp-ticker-flipper">
                        <div id="mp-flipper-top-bg" class="mp-flipper-panel">
                        	<div class="mp-flipper-top-text">FLIPPER</div>
                        </div>
                        <div id="mp-flipper-top" class="mp-flipper-panel">
                        	<div class="mp-flipper-top-text">FLIPPER</div>
                        </div>
                        <div id="mp-flipper-bottom-bg" class="mp-flipper-panel">
                        	<div class="mp-flipper-bottom-text">FLIPPER</div>
                        </div>
                        <div id="mp-flipper-bottom" class="mp-flipper-panel">
                        	<div class="mp-flipper-bottom-text">FLIPPER</div>
                        </div>
                    </a>
                    <a href="#" id="mp-ticker-toggle"></a>
                </div>
                <div id="mp-ticker-pagination">
                
                </div>
            </div>
        </div>
        <div id="mp-question-8" class="mp-question">
        	<div class="mp-q-header">
            	<div class="mp-q-header-num">9</div>
                <div class="mp-q-header-line"></div>
            	<h1>What’s the weather doin’?</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            	<p>Enter your zip code and we’ll calculate it:</p>
                <form id="mp-enter-zip" name="mp-enter-zip">
                    <input type="text" maxlength="5" minlength="5" id="mp-enter-zip-field" placeholder="80524" onfocus="this.placeholder=''" onblur="this.placeholder='80524'" ></input>
                    <input type="submit" value=""> 
                </form>
                <p id="mp-enter-zip-error">Hmmm . . . the zip code you typed is invalid. You might want to try again.</p>
                <img id="mp-weather-loading" src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/loader.gif" />
                <div id="mp-weather">
                	<div id="mp-weather-deg">73&deg;</div>
                    <div id="mp-weather-middle">
                    	<h2 id="mp-weather-citystate">Denver, CO</h2>
                        <p id="mp-weather-date">Thursday 12:00 PM</p>
                        <p id="mp-weather-result">Sunny</p>
                    </div>
                    <div id="mp-weather-icon"></div>
                </div>
            </div>
        </div>
        <div id="mp-question-9" class="mp-question">
            <div class="mp-q-header">
            	<h1>RESULT</h1>
            </div>
            <div class="mp-q-header-underline"></div>
            <div class="mp-q-content">
            	<div id="mp-result-imglinecover"></div>
                <div id="mp-result-text">
                	<h1>YOUR MOOD:</h1>
                    <h2>RED, WHITE AND BOLD</h2>
                    <p>Saddle up, partner, seems like you’re ready to go for a ride. We took a traditional India Pale Ale and made it bolder and more flavorful—American Style. Sounds like you’re in the mood to be a little bolder and more flavorful yourself. That’s a patriot.</p>
                    <div class="mp-clearboth"></div>
                </div>
                <div id="mp-result-img">img</div>
                <div class="mp-clearboth"></div>
            </div>
            <div class="mp-q-header-underline"></div>
            <div id="mp-result-share">
            	<h2>SHARE YOUR MOOD:</h2>
                <a href="#" class="mp-result-share-a" id="mp-result-share-fb"></a>
                <a href="#" class="mp-result-share-a" id="mp-result-share-twit"></a>
                <a href="#" class="mp-result-share-a mp-last" id="mp-result-share-email"></a>
                <div class="mp-clearboth"></div>
            </div>
            <div class="mp-q-header-underline"></div>
            <div id="mp-result-90shill">
            	<img id="mp-result-90shill-logo" src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/90shilling.png" />
                <p>Note: If you find yourself in doubt of your current paired beverages, try a 90 Shilling—the Always Appropriate Ale.</p>
            </div>
            <div id="mp-result-helper"></div>
        </div>
   	</div>
    <div id="mp-nav">
    	<a href="#" id="mp-nav-prev" class="mp-btn mp-skip">
          	<span class="mp-hover-bg mp-reset"><span class="mp-hover-text mp-reset">Previous</span></span>
          	Previous
        </a>
        <div id="mp-nav-current">1/9</div>
        <a href="#" id="mp-nav-next" class="mp-btn mp-skip">
          	<span class="mp-hover-bg mp-reset"><span class="mp-hover-text mp-reset">Next</span></span>
          	Next
        </a>
    </div>
</div>
	
	
	
	
	<?php do_action('foundationPress_after_content'); ?>

	</div>
</div> 
<?php get_footer(); ?>
