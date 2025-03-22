const progressCircle = document.querySelector(".autoplay-progress");
var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
        delay: 10000,
        delay: 10000000000000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
        }
    }
});

// const swiper = new Swiper(".swiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     autoplay: {
//       delay: 3000, // 3 секунды
//       disableOnInteraction: false,
//     },
//     pagination: [
//       {
//         el: ".swiper-pagination-bullets",
//         type: "bullets", // Точки
//         clickable: true,
//       },
//       {
//         el: ".swiper-pagination-progress",
//         type: "progressbar", // Линия загрузки
//       },
//     ],
//   });