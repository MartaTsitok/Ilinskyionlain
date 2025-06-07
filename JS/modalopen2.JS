$(document).ready(function() {
    $('#openModal2').on('click', function() {
        $('#modal').hide(); // Закрываем первое модальное окно
        $('#modal2').show(); // Открываем второе модальное окно
    });

    // Закрытие модального окна при нажатии на крестик
    $('.close').on('click', function() {
        $('#modal2').hide();
        $('#modal').show(); // Если нужно вернуть первое модальное окно
    });
});