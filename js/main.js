(function () {
    var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;
	
	window.addInput = addInput;
	window.topFunction = topFunction;
	window.nextSlide = nextSlide;
	function nextSlide() {
	    slides[currentSlide].className = 'slide';
	    currentSlide = (currentSlide+1)%slides.length;
	    slides[currentSlide].className = 'slide showing';
	}


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

	var counter = 1;
	var limit = 3;
	  function addInput(divName){
	       if (counter == limit)  {
	            alert("You have reached the limit of adding " + counter + " inputs");
	       }
	       else {
	            var newdiv = document.createElement('div');
	            newdiv.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
	            document.getElementById(divName).appendChild(newdiv);
	            counter++;
	       }
	  }
 }());

 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
// document.querySelector("#qwerty").onmousemove = function(event){
// 	event = event || window.event;
// 	document.querySelector("#offX").innerHTML = event.offsetX;
// 	document.querySelector("#offY").innerHTML = event.offsetY;
// }

// (function () {
//     var slides = document.querySelectorAll('#slides .slide');
// 	var currentSlide = 0;
	
// 	// window.addInput = addInput;
// 	// window.topFunction = topFunction;
// 	window.nextSlide = nextSlide;
// 	function nextSlide() {
// 	    slides[currentSlide].className = 'slide';
// 	    currentSlide = (currentSlide+1)%slides.length;
// 	    slides[currentSlide].className = 'slide showing';
// 	}

// 		window.onscroll = function() {
// 		// scrollFunction();
// 		myFunction();
// 	};

// 	var navbar = document.getElementById("navbar");
// 	var sticky = navbar.offsetTop;

// 	function myFunction() {
// 	  if (window.pageYOffset >= sticky) {
// 	    navbar.classList.add("sticky")
// 	  } else {
// 	    navbar.classList.remove("sticky");
// 	  }
// 	}
//  })();

