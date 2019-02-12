$(document).ready(function(){

    $('.slider__next_btn').click(function(){
      var currentSlide = $('.slider__item.current');
      var currentSlideIndex = $('.slider__item.current').index();
      var nextSlideIndex = currentSlideIndex + 1;
      var nextSlide = $('.slider__item').eq(nextSlideIndex);
      currentSlide.fadeOut(1000);
      currentSlide.removeClass('current');

      if(nextSlideIndex == ($('.slider__item:last').index() + 1 )) {
        $('.slider__item').eq(0).fadeIn(1000);
        $('.slider__item').eq(0).addClass('current');
      } else {
        nextSlide.fadeIn(1000);
        nextSlide.addClass('current');
      }
    });
    $('.slider__prev_btn').click(function(){
      var currentSlide = $('.slider__item.current');
      var currentSlideIndex = $('.slider__item.current').index();
      var prevSlideIndex = currentSlideIndex - 1;
      var prevSlide = $('.slider__item').eq(prevSlideIndex);

      currentSlide.fadeOut(1000);
      currentSlide.removeClass('current');
      prevSlide.fadeIn(1000);
      prevSlide.addClass('current');
    });
});