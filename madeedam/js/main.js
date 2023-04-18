// 메인 헤더 좌측에 notice 이미지 슬라이드 쇼
// const imgEls = document.querySelectorAll('.main-header-notice > a > img');

// let current = 0;

// function imgSlides() {
//   for (let i = 0; i < imgEls.length; i++) {
//     imgEls[i].style.display = "none";
//   }
//   current++; // 다음 이미지로 이동
//   if (current > imgEls.length) {
//     current = 1; // 첫 번째로 이동
//   }
//   imgEls[current - 1].style.display = "block";
//   setTimeout(imgSlides, 5000);
// }

// imgSlides(); // 기본적으로 첫 번째 이미지 표시

// 메인 헤더 좌측에 notice 이미지 슬라이드 swiper 라이브러리 이용
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(선택자, 옵션:{});

new Swiper('.main-header .swiper',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  direction: 'horizontal',
  loop: true,
  autoplay:true,
});

new Swiper('.visual .swiper',{
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.visual .swiper-pagination',
    clickable: true
  },
  navigation: { 
    prevEl: '.visual .swiper-button-prev',
    nextEl: '.visaul .swiper-button-next'
  }
});

