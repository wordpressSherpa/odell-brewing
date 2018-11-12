<!-- Logo & Primary Menu -->
<div class="top-bar-container contain-to-grid show-for-medium-up primary-header">
    <nav class="top-bar" data-topbar role="navigation">
	    <div class="row">
	    
        	<div class="columns medium-2 large-5 logo-area ">
        		<ul class="title-area">
        		    <li class="name">
        		        <h1><a href="<?php echo home_url(); ?>"></a></h1>
        		    </li>
        		</ul>
        	</div>
        	
        	<div class="columns medium-10 large-7 navigation-area">
        		<?php foundationPress_top_bar_r(); ?>
        		<div class="header-cart">
	        		
		        	<?php if (sizeof(WC()->cart->get_cart()) != 0): ?>
			        	<a href="<?php echo home_url(); ?>/cart" class="cart-full">
		        	<?php else: ?>
		        		<a href="<?php echo home_url(); ?>/cart" class="cart-empty">
					<?php endif; ?>
	        			</a>
        		</div>
        	</div>
        
        </div>
    </nav>
</div>

<!-- Secondary Menu --> 
<div class="row secondary-header show-for-medium-up">
	<div class="columns medium-5 secondary-nav-area">
		<nav class="top-bar" data-topbar role="navigation">
			<section class="top-bar-section">
				<?php foundationPress_top_bar_l(); ?>
			</section>
		</nav>
	</div>
	<div class="columns medium-0 large-7 empty-area hide-for-medium">
		
	</div>
</div>