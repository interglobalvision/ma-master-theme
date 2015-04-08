/* jshint browser: true, devel: true, indent: 2 */
/* global $, jQuery, document */

function l(data) {
  'use strict';
  console.log(l);
}

jQuery(document).ready(function () {
  'use strict';
  console.log('Hola Globie');

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
	function slickInit() {
		$('.js-slick-container').slick({
			adaptiveHeight: true,
		});
	}
	if ( $('.js-slick-item').length ) {
		slickInit();
	}

});