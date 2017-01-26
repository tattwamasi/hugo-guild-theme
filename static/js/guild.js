jQuery(document).ready(function($) {
	// set up the sticky navbar
	$("#header").sticky({zIndex:10002});
/*
	$(".banner").parallaxScroll({
		friction: .1,
		direction: "vertical"
	});
	
	$("#footer").parallaxScroll({
		friction: 1,
		direction: "vertical"
	});
*/
/*
	// set the footer banner background image height to be same as the footer
	// so that the fixed background scroll is properly sized.
	var footerheight = $(".footer").outerHeight();
	$('#footer').css({
		'background-size' : "cover"
	});
*/
	// set up the banner image parallax scroll / fade effect
	$(window).scroll(function(e){
			$('.banner').css({
				'bottom' : -($(this).scrollTop()/2)+"px"
			});

			var thisdist = $(this).scrollTop();
			var bannerheight = $(".banner").outerHeight();
			$('.banner-text').css({
				'opacity' : (1 - thisdist/bannerheight)
			});
	});

});
