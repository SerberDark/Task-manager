; (function	($) {
	var moreOptionBtn = $('.more-option');
	var secondForm = $('.second-form');
	var searchButton = $('.search-button'); 

		moreOptionBtn.on('click', function () {
			secondForm.slideToggle();
			moreOptionBtn.toggleClass('open');
		});
		searchButton.on('click', function () {
			searchButton.toggleClass('search-on');
		});
})(jQuery);

// add select-box style
;(function($) {
$(function() {

  $('select').styler();

});

// add slick
$('.areas-slick-js').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
      }
    },
   ]

});
})(jQuery);

