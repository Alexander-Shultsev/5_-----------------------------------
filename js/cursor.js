document.addEventListener('DOMContentLoaded', () => {
    // Создаем элементы курсора
    // const cursorOutline = document.createElement('div');
    const cursorOutline = document.getElementsByClassName('cursor-outline')[0];
    // cursorOutline.className = 'cursor-outline';
    // document.body.appendChild(cursorOutline);

    // Позиции курсора
    let cursorPos = { x: 0, y: 0 };
    let cursorOutlinePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };

    // Обновление позиции точки курсора с учетом прокрутки
    document.addEventListener('mousemove', (e) => {
        lastMousePos.x = e.clientX;
        lastMousePos.y = e.clientY;
        cursorPos.x = lastMousePos.x + window.scrollX;
        cursorPos.y = lastMousePos.y + window.scrollY;
    });

    // Обновление позиции при прокрутке
    window.addEventListener('scroll', () => {
        cursorPos.x = lastMousePos.x + window.scrollX;
        cursorPos.y = lastMousePos.y + window.scrollY;
    });

    // Анимация внешнего круга курсора
    function animateCursor() {
        const ease = 0.7;
        
        cursorOutlinePos.x += (cursorPos.x - cursorOutlinePos.x) * ease;
        cursorOutlinePos.y += (cursorPos.y - cursorOutlinePos.y) * ease;
        
        // cursorOutline.style.transform = `translate(${cursorOutlinePos.x - 80}px, ${cursorOutlinePos.y - 80}px)`;

        cursorOutline.style.setProperty('--tx', `${cursorOutlinePos.x - 80}px`);
        cursorOutline.style.setProperty('--ty', `${cursorOutlinePos.y - 80}px`);
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Эффект при наведении на кликабельные элементы
    const clickables = document.querySelectorAll('a, button, input, textarea, .swiper-button, .swiper-pagination-bullet');
    clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.setProperty('--scale', '0.7');
            cursorOutline.style.setProperty('--opacity', '0.2');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.setProperty('--scale', '1');
            cursorOutline.style.setProperty('--opacity', '0.7');
        });
    });

    const clickablesImage = document.querySelectorAll('img');
    clickablesImage.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.setProperty('--opacity', '0.1');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.setProperty('--opacity', '0.7');
        });
    });

    // Таймер обратного отсчета
    function updateTimer() {
        const targetDate = new Date('2025-07-08T00:00:00');
        const now = new Date();
        const difference = targetDate - now;

        // Вычисляем месяцы
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const remainingDays = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Обновляем значения в HTML
        const timeCircles = document.querySelectorAll('.time-circle');
        if (timeCircles.length >= 4) {
            timeCircles[0].querySelector('.circle-number').textContent = String(months).padStart(2, '0');
            timeCircles[1].querySelector('.circle-number').textContent = String(remainingDays).padStart(2, '0');
            timeCircles[2].querySelector('.circle-number').textContent = String(hours).padStart(2, '0');
            timeCircles[3].querySelector('.circle-number').textContent = String(minutes).padStart(2, '0');
            timeCircles[4].querySelector('.circle-number').textContent = String(seconds).padStart(2, '0');
        }
    }

    // Обновляем таймер каждую секунду
    setInterval(updateTimer, 1000);
    updateTimer(); // Запускаем сразу
}); 