$(document).ready(function(){

    $('.nextBtn').click(function(){
      var currentSlide = $('.slider-item.current');
      var currentSlideIndex = $('.slider-item.current').index();
      var nextSlideIndex = currentSlideIndex + 1;
      var nextSlide = $('.slider-item').eq(nextSlideIndex);
      currentSlide.hide(500);
      currentSlide.removeClass('current');

      if(nextSlideIndex == ($('.slider-item:last').index() + 1 )) {
        $('.slider-item').eq(0).show(500);
        $('.slider-item').eq(0).addClass('current');
      } else {
        nextSlide.show(500);
        nextSlide.addClass('current');
      }
    });
    $('.prevBtn').click(function(){
      var currentSlide = $('.slider-item.current');
      var currentSlideIndex = $('.slider-item.current').index();
      var prevSlideIndex = currentSlideIndex - 1;
      var prevSlide = $('.slider-item').eq(prevSlideIndex);

      currentSlide.hide(500);
      currentSlide.removeClass('current');
      prevSlide.show(500);
      prevSlide.addClass('current');
    });
});