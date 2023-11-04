const swiperOptions = new Swiper('.options__swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slideToClickedSlide: true,
  lazy: true,
  preloadImages: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: '.options__swiper--pagination',
    type: 'fraction',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  speed: 500,
});

const swiperFeedback = new Swiper('.feedback__swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slideToClickedSlide: true,
  lazy: true,
  preloadImages: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: '.feedback__swiper--pagination',
    type: 'fraction',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  speed: 500,
});
