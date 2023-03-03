(function ($) {
 "use strict";
 
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.header-menubar li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Menu collapse
    ------------------------------ */
	$('.header-menubar li a').on('click', function () {
		$('.collapse').removeClass('in');
	});
	
	/*----------------------------
    START - Checked item
    ------------------------------ */
	$(".getin-content-list button").on('click', function () {
		$(this).toggleClass('activ');
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.testimonial-slider').owlCarousel({
		slideBy:3,
		autoplay: true,
		loop:true,
		autoplayTimeout:4000,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			1199:{
				items:3
			},
			1900:{
				items:3
			}
		}
	});
	
	$('.story-content').owlCarousel({
		slideBy:2,
		margin: 30,
		autoplay: true,
		loop:true,
		autoplayTimeout:4000,
		responsive:{
			0:{
				items:1
			},
			700:{
				items:2
			},
			1900:{
				items:2
			}
		}
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	$(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
	
	/*----------------------------
    START - Progress bar animation
    ------------------------------ */
	var bar = new ProgressBar.Line(progress1, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#28D8D8',
	  trailColor: '#E2D7D1',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar.animate(0.90);
	var bar = new ProgressBar.Line(progress2, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#28D8D8',
	  trailColor: '#E2D7D1',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar.animate(0.60);
	var bar = new ProgressBar.Line(progress3, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#28D8D8',
	  trailColor: '#E2D7D1',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar.animate(0.75);
	var bar = new ProgressBar.Line(progress4, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#28D8D8',
	  trailColor: '#E2D7D1',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar.animate(0.45);
	var bar = new ProgressBar.Line(progress5, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#28D8D8',
	  trailColor: '#E2D7D1',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar.animate(0.65);
	var bar = new ProgressBar.Line(progress6, {
	  strokeWidth: 5,
	  easing: 'easeInOut',
	  duration: 2000,
	  color: '#28D8D8',
	  trailColor: '#E2D7D1',
	  trailWidth: 5,
	  svgStyle: {width: '100%', height: '100%'}
	});
	bar.animate(0.80);  // Number from 0.0 to 1.0
	
	/*----------------------------
    START - Circlechart animation
    ------------------------------ */
	$('.demo-1,.demo-2,.demo-3').percentcircle({
		animate : false,
		bgColor: '#E2D7D1',
		fillColor: '#FD5959',
		percentSize: '18px',
	});
	$('.cir').css({
		'width': '85px',
		'height': '87px',
		'top':'7px',
		'left':'7px'
	});		
	$('.perc').css({
		'width': '89px',
		'height': '100px',
		'lineHeight': '90px'
	});
	$(".demo-1 .perc").text("English");
	$(".demo-2 .perc").text("Spanish");
	$(".demo-3 .perc").text("German");
	
	/*----------------------------
    START - mixit Up
    ------------------------------ */
	$('.portfolio-list-one').mixItUp();

})(jQuery); 