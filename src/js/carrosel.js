$(document).ready(function() {
  var imageSlider = $('.image-slider');

  imageSlider.owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  $('.owl-prev').click(function() {
    imageSlider.trigger('prev.owl.carousel'); 
  });

  $('.owl-next').click(function() {
    imageSlider.trigger('next.owl.carousel'); 
  });
  
});
