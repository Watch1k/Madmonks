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

  //fix IE svg text
  $('body').css('font-size', '16px');
  $('body').attr({
    style: 'font-size: 16px;'
  });
  if ($(window).width() <= 1024) {
    $('.js-svg-size').attr('y', '42%');
    $('.js-svg-size-2').attr('y', '58%');

    var slider = $('.js-bg-list');

    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false
    });

  } else {
    $('.one').fullpage({
      navigation: true,
      navigationPosition: 'left',
      scrollOverflow: true,
      normalScrollElements: '.js-navigation',
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
          hamburgerBtn = $('.js-hamburger');

        if (index == 1) {
          svgMask.addClass('is-active');
          header.addClass('is-active');
          svgOverlay.addClass('is-active');
          hamburgerBtn.fadeIn();
          navigation.hide().addClass('is-mod');
          nav.addClass('is-active');
          footer.addClass('is-hidden');
        }
        if (nextIndex == 1) {
          svgMask.removeClass('is-active');
          header.removeClass('is-active');
          svgOverlay.removeClass('is-active');
          hamburgerBtn.fadeOut();
          navigation.show().removeClass('is-mod');
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
  }

  (function () {
    var scrollBtn = $('.js-next-slide'),
        hamburgerBtn = $('.js-hamburger'),
        navigation = $('.js-navigation'),
        closeBtn = $('.js-nav-close'),
        mobile = false;

    if ($(window).width() <= 1024) mobile = true;

    scrollBtn.on('click', function () {
      $.fn.fullpage.moveTo(2);
    });

    hamburgerBtn.on('click', function () {
      $(this).toggleClass('is-active');
      if (!mobile) {
        navigation.fadeToggle().toggleClass('is-active');
      }
    });

    closeBtn.on('click', function () {
      if (!mobile) {
        navigation.fadeOut().removeClass('is-active');
      }
      hamburgerBtn.removeClass('is-active')
    });
  })();

  (function () {
    if ($(window).width() > 1024) {
      $('.js-bg-list li').hover(function () {
        if (!$(this).hasClass('is-active')) {
          $('.js-bg-list li').removeClass('is-active');
          var index = $(this).index();
          $(this).css('z-index', '2').addClass('is-active').find('.js-for-hidden').show();
          $('.js-bg').fadeOut(function () {
            $(this).css('z-index', '0');
          });
          $('.js-bg').eq(index).css('z-index', '1').fadeIn();
        }
      }, function () {
        $(this).removeClass('is-active').css('z-index', '1');
        $('.js-for-hidden').hide();
      });
    }
  })();

// new WOW().init();

})
;