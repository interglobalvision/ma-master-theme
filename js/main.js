/* jshint browser: true, devel: true, indent: 2 */
/* global $, jQuery, document */

function l(data) {
  'use strict';
  console.log(data);
}

jQuery(document).ready(function () {
  'use strict';
  l('Hola Globie');

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
  }

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
    var margin = 35;
    var windowHeight = $(window).outerHeight();
    var captionHeight = $('.slider-text').outerHeight();

    $('.js-slick-item img').css( 'max-height' , ( windowHeight - captionHeight - margin ) );

    $('.js-slick-container').css( 'padding-top' , margin );
  }

  var resizeFunction = debounce(function() {
    resizeImages();
  }, 50);

  function replaceCaption(currentSlide) {
    var caption = $('[data-slick-index="'+currentSlide+'"]').attr('data-caption');
    if (! caption || caption === undefined || caption === null) {
      $('.slider-text .caption').html(' ');
    } else {
      $('.slider-text .caption').html(caption);
    }
  }

  function slickInit() {
    $('.js-slick-container').on({
      init: function(event, slick){
        var currentSlideIndex = $('.slick-active').attr('data-slick-index');
        replaceCaption(currentSlideIndex);
        resizeImages();
        $(this).css( 'opacity' , 1 );
      }, 
      afterChange: function(event, slick, currentSlide, nextSlide){
        replaceCaption(currentSlide);
      }
    })
    .slick({
      prevArrow: '<a class="slick-prev" data-arrow="prev">Prev</a>',
      nextArrow: '<a class="slick-next" data-arrow="next">Next</a>',
    });

    $('[data-arrow="prev"]').appendTo('.slider-text span.arrow-prev');
    $('[data-arrow="next"]').appendTo('.slider-text span.arrow-next');

    $('.js-slick-item').on('click', function() {
      $('.js-slick-container').slick('slickNext');
    });
  }

  if ( $('.js-slick-item').length ) {
    slickInit();
  }

  $(window).on('resize', function() {
    resizeImages();
  });

});