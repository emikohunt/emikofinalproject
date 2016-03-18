$(document).ready(function(){
	
			//Jquery for menu items in mobile view
		//to make the menu go over the top, use position: fixed, width: 100%
	
		$(".menu").click(function(){
		$(this).next().slideToggle();
	})

/* When you click my profile image on ABOUT ME page, the image changes to a different photo of me
	
	$(".profile-image").click(function(){
		$(this).css("background-image", "url(img/cactus.jpg)");
	});
	

/* When service box's 'More Info' button is clicked, turn background to a different colour and have the ".service-item-text p" display over the top.*/
		
//	$('.find-out-more-button').click(function(){
//		$(this).parent().closest(".service-item-block").find('.overlayText').fadeIn();
//	});
	$('.find-out-more-button').click(function(){
		$(this).parent().next().fadeIn();
	});
	$('.overlayText').click(function(){
		$(this).fadeOut();
		
	});
	
	/* On HOMEPAGE When .servicebox (that turns green) is clicked, turn background to a stronger green and have the ".servicebox-hidden-text p" display over the top.*/
		
//	$('.find-out-more-button').click(function(){
//		$(this).parent().closest(".service-item-block").find('.overlayText').fadeIn();
//	});
	$('.servicebox').click(function(){
		$(this).css("background-color","#d3d8db");
	});
	//$('.servicebox').click(function(){
	//	$(this).toggle();
		
//	});
	
	
		
});