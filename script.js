

var swiper_mode = function(swp_disbl) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,  
    slidesOffsetBefore: 15,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
swiper.destroy(swp_disbl, swp_disbl)
}

if (window.innerWidth>=768){
  swp_disbl=true;
  swiper_mode(swp_disbl);}
else {
  swp_disbl=false;
  swiper_mode(swp_disbl)};  


window.addEventListener('resize', () => {
  var swp_disbl;
  if (window.innerWidth>=768 && !swp_disbl){swiper_mode(swp_disbl);
    console.log('off');
    swp_disbl=true;
  }
  else {
    swp_disbl=false;
    swiper_mode(swp_disbl);
    console.log('on')
    console.log(swp_disbl);
  }
});

