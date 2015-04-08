/* jshint browser: true, devel: true, indent: 2 */
/* global $, jQuery, document */

function l(data) {
  'use strict';
  console.log(l);
}

jQuery(document).ready(function () {
  'use strict';
  console.log('Hola Globie');

// RESIZE
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

// PACKERY
  if ( $('.js-packery-container').length ) {
    $('.js-packery-container').imagesLoaded( function() {
      $('.js-packery-container').packery({
        itemSelector: '.js-packery-item',
        columnWidth: 1,
        gutter: 0,
        transitionDuration: '0s',
      }).css({
        'opacity': 1
      });
    });
  }

// SLICK
  function resizeImages() { 
    var $images = $('.js-slick-item img');
    var windowHeight = $(window).height();
    var margin = 70;
    var captionHeight = -1;

    $('.gallery-caption').each(function() {
      captionHeight = captionHeight > $(this).height() ? captionHeight : $(this).height();
    });

    $images.css( 'height' , (windowHeight - margin - captionHeight) + 'px' );

    $('.js-slick-container').css( 'padding-top' , ( margin / 2 ) );
  }

  var resizeFunction = debounce(function() {
    resizeImages();
  }, 50);

  function slickInit() {
    $('.js-slick-container').slick({
      prevArrow: '<a class="slick-prev arrow arrow-prev">&larr;</a>',
      nextArrow: '<a class="slick-next arrow arrow-next">&rarr;</a>',
    })
    .css({
      'opacity': 1
    });
  }

  if ( $('.js-slick-item').length ) {
    resizeImages();
    slickInit();
  }

});