const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Slides
  slidesPerView: 1,

  // Space between
  spaceBetween: 10,

  // touch
  allowTouchMove: true,

  

  // breakpoints
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  }
});

if(window.innerWidth <= 500) {
  swiper.navigation.destroy()
}