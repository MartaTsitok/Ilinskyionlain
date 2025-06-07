// Получаем текущую дату
const today = new Date();

// Определяем опции форматирования даты
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Форматируем дату
const formattedDate = today.toLocaleDateString('ru-RU', options);

// Находим элемент на странице и вставляем в него дату
document.getElementById('current-date').textContent = `Сегодня: ${formattedDate}`;
