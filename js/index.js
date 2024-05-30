document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#carouselInterval');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: false, // Disable auto-slide
    });
  
    // Custom navigation buttons
    document.getElementById('prev-btn').addEventListener('click', function() {
      carousel.prev();
    });
  
    document.getElementById('next-btn').addEventListener('click', function() {
      carousel.next();
    });
  
    // Update page information
    myCarousel.addEventListener('slid.bs.carousel', function(event) {
      var totalSlides = document.querySelectorAll('#carouselInterval .carousel-item').length;
      var currentSlide = event.to + 1; // 'to' gives the zero-based index of the current slide
      document.getElementById('page-info').textContent = 'Page ' + currentSlide + ' of ' + totalSlides;
    });
  
    // Initialize page information
    var totalSlides = document.querySelectorAll('#carouselInterval .carousel-item').length;
    document.getElementById('page-info').textContent = 'Page 1 of ' + totalSlides;
  });


  // handle drag
  