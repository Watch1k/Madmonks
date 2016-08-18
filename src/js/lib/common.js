// /* Common JS */
// $(document).ready(function(){
//
// 	//for IE9
// 	svg4everybody();
//
// 	// Clear placeholder
// 	(function() {
// 		var el = $('input, textarea');
// 		el.focus(function(){
// 			$(this).data('placeholder',$(this).attr('placeholder'));
// 			$(this).attr('placeholder','');
// 		});
// 		el.blur(function(){
// 			$(this).attr('placeholder',$(this).data('placeholder'));
// 		});
// 	}());
//
// 	(function () {
// 		var mainInd = false;
//
// 		if (!mainInd) {
// 			setTimeout(function () {
// 				$('body').css({
// 					overflow: 'hidden',
// 					heigh: '100%'
// 				});
// 			}, 0);
//
// 			$(window).on('wheel', function(e) {
//
// 				var delta = e.originalEvent.deltaY;
//
// 				if (delta > 3) {
// 					$('.js-svg-mask').addClass('is-active');
// 					$('.js-svg-fill').addClass('is-active');
// 				}
// 				if (delta < -3) {
// 					$('.js-svg-mask').removeClass('is-active');
// 					$('.js-svg-fill').removeClass('is-active');
// 				}
//
// 				return false; // this line is only added so the whole page won't scroll in the demo
// 			});
// 		}
// 	})();
//
// 	$('.js-one').fullpage({
// 		scrollOverflow: true,
// 		autoScrolling: false,
// 		afterLoad: function () {
// 			$('.js-one > div').find('.js-video').get(0).play();
// 		}
// 	});
//
// 	// $.fn.fullpage.setAutoScrolling(true);
//
// 	// new WOW().init();
//
// });