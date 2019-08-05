$(document).ready(function() {

    // Menu Slide //
    $(".mobile-btn").click(function() {
     $(".mobile-btn").toggleClass("active")
   })

   $(".mobile-btn").click(function() {
     $(".sidebar").toggleClass("active")
   })

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

