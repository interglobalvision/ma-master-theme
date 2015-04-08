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
	  $('.js-packery-container').packery({
	  	itemSelector: '.js-packery-item',
	  	columnWidth: '.grid-sizer',
	  	gutter: '.gutter-sizer',
	  	transitionDuration: '0s',
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