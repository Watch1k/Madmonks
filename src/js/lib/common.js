/* Common JS */
$(document).ready(function(){

	//for IE9
	svg4everybody();

	// Clear placeholder
	(function() {
		var el = $('input, textarea');
		el.focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		el.blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

	(function () {
		var mainInd = false;

		if (!mainInd) {
			setTimeout(function () {
				$('body').css({
					overflow: 'hidden',
					heigh: '100%'
				});
			}, 0);

			$(window).on('wheel', function(e) {

				var delta = e.originalEvent.deltaY;

				if (delta > 3) {
					$('.js-svg-overlay').addClass('is-active');
					$('.js-svg-mask').addClass('is-active');
				}
				if (delta < -3) {
					$('.js-svg-overlay').removeClass('is-active');
					$('.js-svg-mask').removeClass('is-active');
				}

				return false; // this line is only added so the whole page won't scroll in the demo
			});
		}
	})();

	$('.js-one').fullpage({
		scrollOverflow: true,
		autoScrolling: false,
		afterLoad: function () {
			var jsVideo = $('.js-video');

			if (jsVideo.length) {
			 jsVideo.get(0).play();
			}

			//fix IE svg text
			$('body').css('font-size', '16px');
			$('body').attr({
				style: 'font-size: 16px;'
			});
		}
	});

	// $.fn.fullpage.setAutoScrolling(true);

	// new WOW().init();

});