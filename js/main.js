$(document).ready(function(){
	window.sr = ScrollReveal();
// $(".active-1").css("background", "white");
	//type thing
	$("#header-2").typed({
	    strings: ["Front End Developer.^2000", "Fitness Guru.^2000", "Tecnhology Wizard^20000", "if((this).is('cool')^1000{hire me}^1000 else{console.log('sadface :(')}^1000" ],
	    typeSpeed: 90,
	    backSpeed: 10,
	    loop:true,
	    contentType: 'html' // or 'text'
	});
	//scroll stuff
	$(window).scroll(function(){
		sr.reveal('.half-container');
		sr.reveal('#skills');
		sr.reveal('#contact');
			// var scroll = $(window).scrollTop();
			// var workHeight = $("#work").offset().top - 20;
			// var skillsHeight = $('#skills').offset().top + $(this).outerHeight();
	  //   	var headerHeight = $("#about").offset().top;
	  //   	var contactHeight = $("#contact").offset().top;

	  //   	if(scroll > headerHeight){
	  //   		$(".active-1").css("background", "white");
	  //   		$(".active-2").css("background", "transparent");
	  //   		$(".active-3").css("background", "transparent");
	  //   		$(".active-4").css("background", "transparent");
			// }
	  //   	if(scroll > workHeight){
	  //   		$(".active-2").css("background", "white");
	  //   		$(".active-1").css("background", "transparent");
	  //   		$(".active-3").css("background", "transparent");
	  //   		$(".active-4").css("background", "transparent");
			// }
	  //   	if(scroll > skillsHeight){
	  //   		$(".active-3").css("background", "white");
	  //   		$(".active-2").css("background", "transparent");
	  //   		$(".active-1").css("background", "transparent");
	  //   		$(".active-4").css("background", "transparent");
			// }
	  //   	if(scroll > contactHeight){
	  //   		$(".active-4").css("background", "white");
	  //   		$(".active-2").css("background", "transparent");
	  //   		$(".active-3").css("background", "transparent");
	  //   		$(".active-1").css("background", "transparent");
			// }
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

	

	