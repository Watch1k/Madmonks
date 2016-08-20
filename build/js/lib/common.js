/* Common JS */
$(document).ready(function () {

  //for IE9
  svg4everybody();

  // Clear placeholder
  (function () {
    var el = $('input, textarea');
    el.focus(function () {
      $(this).data('placeholder', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
    });
    el.blur(function () {
      $(this).attr('placeholder', $(this).data('placeholder'));
    });
  }());

  $('.one').fullpage({
    navigation: true,
    navigationPosition: 'left',
    verticalCentered: false,
    afterLoad: function (anchorLink, index) {
      //fix IE svg text
      $('body').css('font-size', '16px');
      $('body').attr({
        style: 'font-size: 16px;'
      });
    },
    afterRender: function () {
      $('.js-video-1').get(0).play();
    },
    onLeave: function (index, nextIndex, direction) {
      var header = $('.js-header'),
          svgMask = $('.js-svg-mask'),
          svgOverlay = $('.js-svg-overlay'),
          navigation = $('.js-navigation'),
          nav = $('#fp-nav'),
          footer = $('.js-footer'),
          quote = $('.js-quote'),
          hamburgerBtn = $('.js-hamburger');

      quote.each(function () {
        if ($(this).data('quote') == nextIndex) {
          $(this).fadeIn();
        }
        if ($(this).data('quote') == index) {
          $(this).fadeOut();
        }
      });

      if (index == 1) {
        svgMask.addClass('is-active');
        header.addClass('is-active');
        svgOverlay.addClass('is-active');
        hamburgerBtn.fadeIn();
        navigation.fadeOut();
        nav.addClass('is-active');
        footer.addClass('is-hidden');
      }
      if (nextIndex == 1) {
        svgMask.removeClass('is-active');
        header.removeClass('is-active');
        svgOverlay.removeClass('is-active');
        hamburgerBtn.fadeOut();
        navigation.fadeIn();
        nav.removeClass('is-active');
        footer.removeClass('is-hidden');
      }

      if (index < 3 && nextIndex > 2) {
        if ($('.js-video-1').length) {
          $('.js-video-1').get(0).pause();
        }
      }
      if (nextIndex == 1 || nextIndex == 2) {
        if ($('.js-video-1').length) {
          $('.js-video-1').get(0).play();
        }
      }

      if (index == 3) {
        if ($('.js-video-2').length) {
          $('.js-video-2').get(0).pause();
        }
      }
      if (nextIndex == 3) {
        if ($('.js-video-2').length) {
          $('.js-video-2').get(0).play();
        }
      }

      if (index == 4) {
        if ($('.js-video-3').length) {
          $('.js-video-3').get(0).pause();
        }
      }
      if (nextIndex == 4) {
        if ($('.js-video-3').length) {
          $('.js-video-3').get(0).play();
        }
      }
    }
  });

  (function () {
    var scrollBtn = $('.js-next-slide'),
        hamburgerBtn = $('.js-hamburger');

    scrollBtn.on('click', function () {
      $.fn.fullpage.moveTo(2);
    });

    hamburgerBtn.on('click', function () {
      $(this).toggleClass('is-active')
    })
  })();

  // $.fn.fullpage.setAutoScrolling(true);

  // new WOW().init();

});