$(document).ready(function(){
	$(".project-info").css("opacity", 0.25);
	$(".project-info").css("transform", "scale(0.75)");
	$("form").animate({'opacity': '0.25'});
	$("form").css('transform', 'scale(0.75)');

	//type thing
	$("#header-2").typed({
	    strings: ["Front End Developer.", "Fitness Guru.", "Lifelong Learner."],
	    typeSpeed: 90,
	    backSpeed: 10,
	    loop:true,
	    contentType: 'html' // or 'text'
	});
// });
	//scroll stuff
	$(window).scroll(function(){

		$('.project-info').each( function(i){		    
		    var bottom_of_object = $(this).offset().top + $(this).outerHeight(); 
		    var bottom_of_window = $(window).scrollTop() + $(window).height();
			    if( bottom_of_window > bottom_of_object ){			    	
			        $(this).animate({'opacity':'1'});
			        $(this).css("transform", "scale(1)");
                }
            });
		$('form').each( function(i){		    
		    var bottom_of_object = $(this).offset().top + $(this).outerHeight(); 
		    var bottom_of_window = $(window).scrollTop() + $(window).height();
			    if( bottom_of_window > bottom_of_object ){			    	
			        $(this).animate({'opacity':'1'});
			        $(this).css("transform", "scale(1)");
			    }
			});
		//nav fade{
			var scroll = $(window).scrollTop();
	    	var headerHeight = $("#about").offset().top;
	    	if(scroll > headerHeight){
	    		$("nav.nav-menu").css("background", "white");
	    		$("nav.nav-menu a").addClass('anchor');
	    		$("nav.nav-menu").addClass("fixed animated slideInDown");
			}
	});
	//smoothscroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
	//nav click function and browser resize
	$(".hamburger-menu").click(function(){
		$(".hamburger-nav").slideDown();
		$(".hamburger-menu").hide();
	});
	$(".close").click(function(){
		$(".hamburger-nav").slideUp();
		$(".hamburger-menu").show();
	}); 


}); //doc end

	

	