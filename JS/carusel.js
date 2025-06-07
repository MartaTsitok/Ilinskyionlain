let startX, scrollLeft;

const sliderpromo = document.querySelector(".promocards");

sliderpromo.addEventListener("mousedown", (e) => {
    startX = e.pageX - sliderpromo.offsetLeft;
    scrollLeft = sliderpromo.scrollLeft;
    sliderpromo.style.cursor = "grabbing"; 
});

sliderpromo.addEventListener("mouseleave", () => {
    sliderpromo.style.cursor = "grab";
});

sliderpromo.addEventListener("mouseup", () => {
    sliderpromo.style.cursor = "grab";
    startX = null; // Сброс начальной позиции, чтобы остановить прокрутку
});

sliderpromo.addEventListener("mousemove", (e) => {
    if (startX === null) return; // Если нет начальной позиции
    e.preventDefault();
    const x = e.pageX - sliderpromo.offsetLeft;
    const walk = (x - startX) * 2; // Скорость прокрутки
    sliderpromo.scrollLeft = scrollLeft - walk;
});