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
new Swiper('.swiper',{
  direction: 'horizontal',
  loop: true,
  autoplay:true,
})