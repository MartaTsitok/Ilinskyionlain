const carousel = document.getElementById('carousel');

  // Скорость прокрутки в пикселях за кадр
  const speed = 0.5;

  // Начальное смещение
  let scrollPosition = 0;

  function animate() {
    scrollPosition += speed;
    if (scrollPosition >= carousel.scrollWidth / 2) {
      // Вернуть скролл в начало для бесконечного цикла
      scrollPosition = 0;
    }
    carousel.scrollLeft = scrollPosition;
    requestAnimationFrame(animate);
  }

  animate();