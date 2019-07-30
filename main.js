$(document).ready(function() {

    // Menu Slide //
   
  
  // smooth scroll //
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    //
  });
  
  var typed = new Typed(".type", {
    strings: ["Front-End Developer...",
              "Back-End Developer...",
              "Web Designer..."],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true
  });
  
  // Resume Download //
  $(".resume-btn").attr('title', 'DOWNLOAD RESUME');
  