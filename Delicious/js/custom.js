function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

 document.getElementById('result').onclick = getResult;
 
getResult();
 function getResult(){
 var menu = document.getElementsByClassName('menu');
     var cost = 0;
     var kkal = 0;
     for (var i = 0; i<menu.length; i++){
     if (menu[i].checked) {
     cost += parseFloat (menu[i].getAttribute('data-cost'));
     kkal += parseFloat (menu[i].getAttribute('data-cost'));    
     }
     }
     document.getElementById('cost').innerHTML = cost+"$";
     document.getElementById('kkal').innerHTML = kkal;
     
 }



(function($) {

  // Menu filer
  $("#menu-flters li a").click(function() {
    $("#menu-flters li a").removeClass('active');
    $(this).addClass('active');

    var selectedFilter = $(this).data("filter");
    //  $("#menu-wrapper").fadeTo(100, 0);

    $(".menu-restaurant").fadeOut();

    setTimeout(function() {
      $(selectedFilter).slideDown();
      //$("#menu-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // Add smooth scrolling to all links in navbar + footer link
  $(".sidenav a").on('click', function(event) {
    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".sidenav a").on('click', function() {
		closeNav();
	});

})(jQuery);

window.onscroll = function() {
		scrollFunction();
		
		
	};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("myBtn").style.display = "block";
	    } else {
	        document.getElementById("myBtn").style.display = "none";
	    }
	}

	
	function topFunction() {
	    document.body.scrollTop = 0; // For Safari
	    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

