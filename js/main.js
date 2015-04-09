/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, jQuery, document, Modernizr */

function l(data) {
  'use strict';
  console.log(data);
}

// VARS

var retina = Modernizr.highresdisplay,
  largeImageThreshold = 800,
  largestImageThreshold = 1400;

// FUNCTIONS

  // LAZY IMAGES

function lazyLoadImages(selector) {
  $(selector).each(function() {
    var $this = $(this);
    var data = $this.data();
    var windowWidth = $(window).width();

    if (retina) {
      if (windowWidth > (largeImageThreshold*1.5)) {
        $this.attr('src', data.largest);
      } else {
        $this.attr('src', data.large);
      }
    } else if (windowWidth > largestImageThreshold) {
      $this.attr('src', data.largest);
    } else if (windowWidth > largeImageThreshold) {
      $this.attr('src', data.large);
    } else {
      $this.attr('src', data.basic);
    }
  });
}

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

  // SLICK

function resizeImages() {
  var margin = 35;
  var windowHeight = $(window).outerHeight();
  var captionHeight = $('.slider-text').outerHeight();

  $('.js-slick-item img').css( 'max-height' , ( windowHeight - captionHeight - margin ) );

  $('.js-slick-container').css({
    'padding-top': margin,
    'height': (windowHeight - captionHeight)
  });
}

function replaceCaption(currentSlide) {
  var caption = $('[data-slick-index="' + currentSlide + '"]').attr('data-caption');
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

      // set length for n of * in captions
      $('#slick-length').html($('.js-slick-item').length-2);

      lazyLoadImages('.slider-img');

      resizeImages();

      $(this).css( 'opacity' , 1 );
    },
    afterChange: function(event, slick, currentSlide, nextSlide){
      replaceCaption(currentSlide);

      // set active index in human readable form
      $('#slick-current-index').html(currentSlide+1);
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

jQuery(document).ready(function () {
  'use strict';
  l('Hola Globie');

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
  var resizeFunction = debounce(function() {
    resizeImages();
  }, 30);

  if ( $('.js-slick-item').length ) {
    slickInit();
  }

  $(window).on('resize', function() {
    resizeImages();
  });

});