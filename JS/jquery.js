
  $(document).ready(function() {
    // Открыть модальное окно по клику на кнопку с id openModal
    $('#openModal').click(function() {
      $('#modal').fadeIn();
    });

    // Закрыть модальное окно по клику на крестик
    $('.close').click(function() {
      $('#modal').fadeOut();
    });

    // Закрыть модальное окно по клику вне содержимого
    $('#modal').click(function(e) {
      if (e.target === this) {
        $(this).fadeOut();
      }
    });

    // Обработка отправки формы
    $('#registrationForm').submit(function(e) {
      e.preventDefault();
      alert('Регистрация прошла успешно!');
      $('#modal').fadeOut();
      this.reset();
    });
  });

