

let mql = window.matchMedia('(max-width: 767px)');

mql.addEventListener('change', (e) => {
  if (e.matches) {
    let newSwiper = new Swiper('.steps-slider', {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 8,
      grabCursor: true,
      init: true
    });
  } else {
    newSwiper.destroy();
  }
})
