$(document).ready(function(){

    $('.nextBtn').click(function(){
      var currentSlide = $('.slider-item.current');
      var currentSlideIndex = $('.slider-item.current').index();
      var nextSlideIndex = currentSlideIndex + 1;
      var nextSlide = $('.slider-item').eq(nextSlideIndex);
      currentSlide.fadeOut(1000); //hide - fadeOut show-fadeIn
      currentSlide.removeClass('current');

      if(nextSlideIndex == ($('.slider-item:last').index() + 1 )) {
        $('.slider-item').eq(0).fadeIn(1000);//hide - fadeOut show-fadeIn
        $('.slider-item').eq(0).addClass('current');
      } else {
        nextSlide.fadeIn(1000);//hide - fadeOut show-fadeIn
        nextSlide.addClass('current');
      }
    });
    $('.prevBtn').click(function(){
      var currentSlide = $('.slider-item.current');
      var currentSlideIndex = $('.slider-item.current').index();
      var prevSlideIndex = currentSlideIndex - 1;
      var prevSlide = $('.slider-item').eq(prevSlideIndex);

      currentSlide.fadeOut(1000);//hide - fadeOut show-fadeIn
      currentSlide.removeClass('current');
      prevSlide.fadeIn(1000);//hide - fadeOut show-fadeIn
      prevSlide.addClass('current');
    });
});