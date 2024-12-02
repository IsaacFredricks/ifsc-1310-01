// Alternate Configuation Options Here - https://accessible360.github.io/accessible-slick/#demos

$(document).ready(function() {

    $('.fade').slick({
      dots: false,
      infinite: false,
      speed: 1000,//in ms
      fade: true,
      slide: 'div',//change to section for final project
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000
    });

    $('.variable-width').slick({
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
      });

});