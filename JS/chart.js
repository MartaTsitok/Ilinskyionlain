document.querySelectorAll('.tochart').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const el = this;
    el.classList.add('animate-click');
    el.addEventListener('animationend', () => {
      el.classList.remove('animate-click');
    }, { once: true });

    // Ваша логика увеличения количества товара в корзине
    let id = el.dataset.id;
    if (chart[id] !== undefined) {
      chart[id]++;
      console.log(`Товар ${id} в корзине: ${chart[id]}`);
    }
  });
});
