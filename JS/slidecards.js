    const slider = document.querySelector('.cards-row');
    const btnLeft = document.querySelector('.sales-l');
    const btnRight = document.querySelector('.sales-r');
    const cardWidth = 300; // ширина одной карточки, включая отступы

    btnLeft.addEventListener('click', () => {
        // Проверяем, если прокрутка на начало
        if (slider.scrollLeft === 0) {
            // Перемещаем на конец списка
            slider.scrollTo({
                left: slider.scrollWidth - slider.clientWidth,
                behavior: 'smooth'
            });
        } else {
            // Прокручиваем влево
            slider.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        }
    });

    btnRight.addEventListener('click', () => {
        // Проверяем, если прокрутка на конец
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            // Перемещаем на начало списка
            slider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Прокручиваем вправо
            slider.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        }
    });