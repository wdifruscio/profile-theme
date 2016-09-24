

$(document).ready(function(){
	// $("#nav").hide();
	//check if window is smart phone to display hamburger. 
		var width = $(window).width();
		if (width < 480){
			$(".gif").fadeIn(1000);
			console.log("big");
		}
		if	(width > 480){
			$("nav").slideDown();
			console.log("sm");
		}
 
	$("#profile").css("display","none");
	$(".project-info").css("opacity", 0.25);
	$(".project-info").css("transform", "scale(0.75)");
	//fade in image and nav
	$("#profile").fadeIn("slow");
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
}); //doc end

	

	