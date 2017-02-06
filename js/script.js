$(document).ready(function(){

  /* Slider */

  var sliderSpeed = 3000
  , $slides = $('.slide', '.slider')
  , slidesCount = $slides.length
  , currentSlide = 0;

  $slides.hide().first().show();

  function swapSlides(){

    var $currentSlide = $($slides[currentSlide]);

    if(currentSlide == slidesCount-1) currentSlide = -1;

    var $nextSlide = $($slides[++currentSlide]);

    $currentSlide.hide();

    $nextSlide.show();
  }

  window.setInterval(swapSlides, sliderSpeed);

});
