$(document).ready(function(){
	//set variables
	//hide stuff 
	$("#profile").css("display","none");
	$("#nav").css("display","none");
	$(".project-info").css("opacity", 0.25);
	$(".project-info").css("transform", "scale(0.75)");
	//fade in image and nav
	$("#profile").fadeIn("slow");
	$("#nav").slideDown(1000);
	//type thing
    $(function(){
    $('#header-2').typewrite({
    'callback': function(){
	    },
	    'delay': 180
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

	

	