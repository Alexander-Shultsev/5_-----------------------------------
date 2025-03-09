document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const progressFill = document.querySelector('.progress-fill');
    
    let currentSlide = 0;
    let slideInterval;

    // Установка начальных позиций слайдов
    function setInitialPositions() {
        slides.forEach((slide, index) => {
            const position = index - currentSlide;
            const translateX = position * 100 + (position > 0 ? 10 : position < 0 ? -10 : 0);
            slide.style.transform = `translateX(${translateX}%)`;
        });
    }

    // Показать слайд
    function showSlide(index, direction = 1) {
        slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Обновляем позиции всех слайдов
        slides.forEach((slide, i) => {
            const position = i - index;
            const translateX = position * 100 + (position > 0 ? 10 : position < 0 ? -10 : 0);
            slide.style.transform = `translateX(${translateX}%)`;
        });
        
        // Сброс и запуск прогресс-бара
        progressFill.style.transition = 'none';
        progressFill.style.width = '0';
        
        // Форсируем перерисовку
        void progressFill.offsetWidth;
        
        // Возвращаем анимацию и запускаем прогресс
        progressFill.style.transition = 'width 3s linear';
        progressFill.style.width = '100%';
        
        // Очищаем предыдущий таймер
        clearTimeout(slideInterval);
        
        // Установка таймера для следующего слайда
        // slideInterval = setTimeout(() => {
        //     nextSlide();
        // }, 3000);
    }

    // Следующий слайд
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide, 1);
    }

    // Предыдущий слайд
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide, -1);
    }

    // Обработчики событий для кнопок
    prevButton.addEventListener('click', () => {
        prevSlide();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
    });

    // Обработчики событий для точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const direction = index > currentSlide ? 1 : -1;
            currentSlide = index;
            showSlide(currentSlide, direction);
        });
    });

    // Инициализация слайдера
    setInitialPositions();
    showSlide(currentSlide);
}); 