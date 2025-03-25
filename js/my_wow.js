function updateWowDelays() {
    const isMobile = window.innerWidth <= 768;

    const wowElements = document.querySelectorAll('[data-wow-delay]');
 
    wowElements.forEach(el => {
        const originalDelay = el.getAttribute('data-wow-delay-original') || el.dataset.wowDelay;
        el.setAttribute('data-wow-delay-original', originalDelay); // Сохраняем исходное значение

        // Уменьшаем задержку на 40% для мобильных
        el.dataset.wowDelay = isMobile ?
            `${parseFloat(originalDelay) * 0.3}s` :
            originalDelay;
    });

    // Переинициализация WOW.js
    new WOW().init();
}

// Запуск при загрузке и изменении размера
window.addEventListener('load', updateWowDelays);


//   window.addEventListener('resize', updateWowDelays);

// let wowInstance = null; // Храним экземпляр WOW

// function updateWowDelays() {
//   const isMobile = window.innerWidth <= 768;
//   const wowElements = document.querySelectorAll('[data-wow-delay]');

//   // Сбрасываем анимацию
//   if (wowInstance) {
//     wowInstance = null;
//   }

//   wowElements.forEach(el => {
//     const originalDelay = el.getAttribute('data-wow-delay-original') || el.dataset.wowDelay;
//     el.setAttribute('data-wow-delay-original', originalDelay);
    
//     // Удаляем классы анимации
//     el.classList.remove('wow', 'fadeInDown', 'fadeInLeft', 'fadeIn', 'fadeInUp');
    
//     // Обновляем задержку
//     el.dataset.wowDelay = isMobile ? 
//       `${(parseFloat(originalDelay) * 0.6).toFixed(2)}s` : 
//       originalDelay;

//     // Восстанавливаем классы с задержкой
//     setTimeout(() => {
//       el.classList.add('wow', el.classList.contains('grid-bank-image') ? 'fadeInLeft' : '');
//     }, 10);
//   });

//   // Пересоздаем WOW.js с новыми настройками
//   wowInstance = new WOW({
//     boxClass: 'wow',
//     animateClass: 'animated',
//     offset: 150,
//     mobile: false,
//     live: true
//   }).init();
// }

// // Запуск при загрузке и ресайзе
// window.addEventListener('load', () => {
//   updateWowDelays();
//   window.dispatchEvent(new Event('scroll')); // Форсируем проверку позиций
// });

// window.addEventListener('resize', updateWowDelays);