
// Initialize and add the map
 function initMap () {
    // The location of Uluru
    const uluru = { lat: 29.994047, lng: 31.434644 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

    //Loading Screen
    $(document).ready(function () {
    
     //Click On The Scroll Button
    var scrollButton = $("#scroll-top"); //Cashing The Scroll Top Element
    $(window).scroll(function (){

      if ( $(this).scrollTop() >= 1400 ){
        scrollButton.fadeIn(1000);
      }
      else {
        scrollButton.fadeOut(1000);
      }

      scrollButton.on('click',function () {
        $("html,body").stop().animate({
          scrollTop : 0
        },1500
        );

      });
    });
    

    $(window).on('load',function (){

      // Spinner in Screen Loading
      $(".loading_overlay .spinner").fadeOut(1000 ,function () {

        $(".loading_overlay").fadeOut(1000 ,function () { 

          $(this).remove();

        });
      });
    });
  });
  
