
//	Portions from Archetype by Pixelarity pixelarity.com and others
(function($) {
	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right',
				hideDelay: 400
			});


					// Off-Canvas Navigation.

						// Navigation Panel Toggle.
							$('<a href="#navPanel" class="navPanelToggle"></a>')
								.appendTo($header);

						// Navigation Panel.
							$(
								'<div id="navPanel">' +
									'<nav>' +
										$('#nav').navList() +
									'</nav>' +
									'<a href="#navPanel" class="close"></a>' +
								'</div>'
							)
								.appendTo($body)
								.panel({
									delay: 500,
									hideOnClick: true,
									hideOnSwipe: true,
									resetScroll: true,
									resetForms: true,
									side: 'right'
								});


	});

})(jQuery);

jQuery(document).ready(function($) {
	// set up the sticky navbar
	$("#header").sticky({zIndex:10002});

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
