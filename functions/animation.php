<?php 
/*
 * Animations
 */
function headerAnimation($id) { ?>
	<script src="http://code.createjs.com/easeljs-0.7.1.min.js"></script>
	<script src="http://code.createjs.com/tweenjs-0.5.1.min.js"></script>
	<script src="http://code.createjs.com/movieclip-0.7.1.min.js"></script>
	<script src="http://code.createjs.com/preloadjs-0.4.1.min.js"></script>
	
	<?php if(get_field('select_animation',$id)): ?>
	
		<!-- Homepage ============= --> 
		<?php if(get_field('select_animation',$id) == 'homepage'): ?>
			<style type="text/css">
				.canvas-height { margin-bottom: -7px; }
				#canvas {
					left: 50%;
					margin-left: -1025px;
					max-height: 447px;
					position: relative;
					width: 2043px;
				}
				
				@media (max-width:950px) {
					#canvas {
					    margin-left: -105%;
					    min-width: 850px;
					    width: 210%;
					}
				}
				@media (max-width:550px) {
					#canvas {
					    margin-left: -600px;
					    min-height: 250px;
					    width: 1130px;
					}
				}
			</style>
			<script src="<?php echo get_stylesheet_directory_uri(); ?>/animations/90-homepage.js"></script>
			<canvas id="canvas" width="2043" height="447" style="background-color:#E7D0AB"></canvas>
		
		<!-- Gear ============= --> 
		<?php elseif(get_field('select_animation',$id) == 'gear'): ?>
			<style type="text/css">
				#canvas {
					left: 50%;
					margin-left: -539px;
					max-height: 447px;
					position: relative;
					width: 1079px;
					z-index: 1;
				}
				.texture{
					background-image: url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/GearBG.jpg);
					width:100%;
					height:350px;
					position: absolute;
					top: 0;
					z-index: 0;
				}
				@media (max-width:950px) {
					#canvas {
					    margin-left: -55%;
					    min-width: 750px;
					    width: 112%;
					}
					.texture{ display:none; }
				}
				@media (max-width:665px) {
					#canvas {
					    margin-left: -425px;
					    width: 750px;
					}
				}
				@media (max-width:465px) {
				   #canvas { margin-left: -485px; }
				}
			</style>
			<script src="<?php echo get_stylesheet_directory_uri(); ?>/animations/Gear-Animation.js"></script>
			<canvas id="canvas" width="1079" height="348" ></canvas>
			<div class="texture"></div>
			
		<!-- St Lupalin ============= --> 
		<?php elseif(get_field('select_animation',$id) == 'stlupalin'): ?>
			<style type="text/css">
				.canvas-height { margin-bottom: -11px;  }
				#canvas {
					left: 50%;
					margin-left: -1150px;
					max-height: 447px;
					position: relative;
					width: 2950px;
				}
				@media (max-width:950px) {
					#canvas {
					    margin-left: -130%;
					    min-width: 2160px;
					    width: 310.75%;
					}
				}
				@media (max-width:700px) {
					#canvas {
				    	margin-left: -960px;
						width: 2160px;
					}
				}
				@media (max-width:465px) {
				   #canvas { margin-left: -1025px; }
				}
			</style>
			<script src="<?php echo get_stylesheet_directory_uri(); ?>/animations/StLupalin.js"></script>
			<canvas id="canvas" width="2950" height="347" style="background-color:#EBCF76"></canvas>
			
		<!-- IPA ============= --> 
		<?php elseif(get_field('select_animation',$id) == 'ipa'): ?>
			<style type="text/css">
				.canvas-height { margin-bottom: -6px;  }
				#canvas {
					left: 50%;
					margin-left: -700px;
					max-height: 447px;
					position: relative;
					width: 1400px;
					z-index: 1;
				}
				.texture{
					background-image: url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/bg_ipa.jpg);
					width:100%;
					height:355px;
					position: absolute;
					top: 0;
					z-index: 0;
				}
				@media (max-width:950px) {
					#canvas {
					    margin-left: -74%;
						min-width: 990px;
						width: 148%;
					}
					.texture { display:none; }
				}
				@media (max-width:665px) {
					#canvas {
					    margin-left: -493px;
					    width: 990px;
					}
				}
			</style>
			<script src="<?php echo get_stylesheet_directory_uri(); ?>/animations/Odell-IPA-Animation.js"></script>
			<canvas id="canvas" width="1400" height="355" style="background-color:#A8603E"></canvas>
			<div class="texture"></div>
		<?php endif; ?>
		
	<?php endif; ?>	 
	 
<? } ?>