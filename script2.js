const swiper = document.querySelector('.swiper');
let mySwiper;

function mobileSlider(){
  if (window.innerWidth < 768 && swiper.dataset.mobile == 'false') {  
    mySwiper = new Swiper(swiper, {
    direction: 'horizontal',
    slidesOffsetBefore: 16, 
    
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
    el: '.swiper-pagination',
    clickable: ' true' ,
    }
});
 swiper.dataset.mobile = 'true';
 document.querySelector('.swiper').style.height = '140px'; 
}

if (window.innerWidth >= 768) {
  swiper.dataset.mobile = 'false';
  
  
  if(swiper.classList.contains('swiper-initialized')){
    mySwiper.destroy(true, true);
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
 
});

let btnMore = document.querySelector('.btn-more');
let iconShow = document.querySelector('.icon-show');
let swpHght = document.querySelector('.swiper');
btnMore.onclick = function(){
     if (btnMore.textContent == 'Показать все'){
        btnMore.textContent='Скрыть';
        iconShow.style.transform='rotate(180deg)';
        swpHght.style.height='auto';
    }
     else{
        btnMore.textContent='Показать все';
        iconShow.style.transform='rotate(0deg)'
        swpHght.style.height='210px';
    }
    };
