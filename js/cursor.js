document.addEventListener('DOMContentLoaded', () => {
    // Создаем элементы курсора
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    // Позиции курсора
    let cursorPos = { x: 0, y: 0 };
    let cursorOutlinePos = { x: 0, y: 0 };

    // Обновление позиции точки курсора
    document.addEventListener('mousemove', (e) => {
        cursorPos.x = e.clientX;
        cursorPos.y = e.clientY;
    });

    // Анимация внешнего круга курсора
    function animateCursor() {
        const ease = 0.7;
        
        cursorOutlinePos.x += (cursorPos.x - cursorOutlinePos.x) * ease;
        cursorOutlinePos.y += (cursorPos.y - cursorOutlinePos.y) * ease;
        
        cursorOutline.style.transform = `translate(${cursorOutlinePos.x - 20}px, ${cursorOutlinePos.y - 20}px)`;
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Эффект при наведении на кликабельные элементы
    const clickables = document.querySelectorAll('a, button, input, textarea');
    clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-20px, -20px) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(222, 43, 73, 0.2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-20px, -20px) scale(1)';
            cursorOutline.style.backgroundColor = 'rgba(222, 43, 73, 0.5)';
        });
    });
}); 