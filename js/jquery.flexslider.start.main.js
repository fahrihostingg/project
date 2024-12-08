jQuery(window).load(function() {
/*global jQuery:false */
"use strict";

  jQuery('.mainflex').flexslider({
	animation: "fade",
	slideshow: true,                //Boolean: Animate slider automatically
	slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationDuration: 600,
	smoothHeight: false,
	useCSS: false,
	pauseOnHover: true,
	controlNav: true,
	directionNav: true,
	manualControls: ".slide-nav li",
	prevText: "",
	nextText: "",
	start: function(slider) {
  		slider.removeClass('loading');
		}
    });

      // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 900) ? 3 : 3;
  }

jQuery('.carousel').flexslider({
    animation: "slide",
    itemWidth: 390,
    itemMargin: 0,
    itemHeight: 185,
    pauseOnHover: true,
    animationLoop: true,
    slideshowSpeed: 11000,
    start: function(slider) {
        slider.removeClass('loading');
        },
    minItems: getGridSize(), // use function to pull in initial value
    maxItems: getGridSize() // use function to pull in initial value
})

});
