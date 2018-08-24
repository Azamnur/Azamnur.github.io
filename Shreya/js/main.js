$(document).ready(function() {
	$('.navbar-toggler').on('click', function() {
		menu = $('.navbar-toggler');
		menu.toggleClass('collapsed');
		if(!menu.hasClass('collapsed')) {
			$('.fa-bars').removeClass('fa-bars').addClass('fa-times');
		}
		else{
			$('.fa-times').removeClass('fa-times').addClass('fa-bars');
		}
	});

	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 20) {
	        $(".fixed-top").addClass("fixed-to-top");
	    } else {
	        $(".fixed-top").removeClass("fixed-to-top");
	    }
	});

});
