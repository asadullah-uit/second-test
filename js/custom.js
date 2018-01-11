
$(function($){
	"use strict";
	
	/**** Sticky Bar ***/
	$(window).scroll(function(){
	var headerHeight = 110;
	if($(window).width() >= 768){
		if ( ( $(window).scrollTop() >= headerHeight) )   {
		$(".header").addClass("active");
		}
		else {
		$(".header").removeClass("active");
		}
	}
	});

	$('.appear').appear();
	var runOnce = true;

	$('.appear').on('appear', function(data) {
		if(runOnce){

		$('.third.circle').circleProgress({
			value: 0.75,
			size:164,
			thickness: 6,
			fill: {gradient: [['#c7b299', .5], ['#c7b299', .5]], gradientAngle: Math.PI / 4},
			startAngle: -Math.PI / 2,
		}).on('circle-animation-progress', function(event, progress, stepValue) {
			$(this).find('strong').text(stepValue.toFixed(2).substr(1));
			
		});
	}
	runOnce = false;
	});

	
	$('.progress .progress-bar').css("width",
	function() {
		return $(this).attr("aria-valuenow") + "%";
	}
)
	

	
		
	/*START MIXITUP JS*/
	$('.work_all_item').mixItUp();

	// jQuery Lightbox
	$('.lightbox').venobox({
		numeratio: true,
		infinigall: true
	});	

	$('.team-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		navContainer:'.carousel-arrow',
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay:false,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			767:{
				items:2
			},
			991:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	$('.blog-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		navContainer:'.carousel-arrow-blog',
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay:false,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			767:{
				items:2
			},
			991:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});

	$('#clients').owlCarousel({
		loop:true,
		margin:5,
		nav:false,
		dots:true,
		autoplay:true,
		
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	/******* Scroll To Top*********/
	setTimeout( function(){
		var offset = $('.header').height() + $('.banner-bag').height();
		var speed = 1000;
		var duration = 500;
		console.log(offset);
			$(window).scroll(function(){
				if ($(this).scrollTop() < offset) {
					//alert(offset);
					 $('.go-to-top') .fadeOut(duration);
				} else {
					 $('.go-to-top') .fadeIn(duration);
				}
			});
		$('.go-to-top').on('click', function(){
			$('html, body').animate({scrollTop:0}, speed);
			return false;
		});

	} ,3000 )
			
});


/**** Wowo Animation ***/
wow = new WOW(
	{
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       0,          // default
	  mobile:       false,       // default
	  live:         true        // default
	}
);
wow.init();

