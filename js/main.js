$(document).ready(function(){
	//set variables
	//hide stuff 
	$("#header-1").css("display","none");
	$("#header-2").css("display","none");
	$("#header-3").css("display","none");
	$("#profile").css("display","none");
	$("#nav").css("display","none");
	$(".project-info").css("opacity", 0.25);
	$(".project-info").css("transform", "scale(0.75)");
	//fade in image and nav
	$("#profile").fadeIn("slow");
	$("#nav").slideDown("slow");
	//type thing
    $(function(){
    $('#header-1').typewrite({
    'callback': function(){
		$("#header-3").fadeIn(750);
	    },
	    'delay': 150
	});
	$("#header-2").typewrite({
    'callback': function(){
	    },
	    'delay': 250
	});
});
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
});

	

	