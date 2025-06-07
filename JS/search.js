document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;

    fetch(`/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = ''; // Очистить предыдущие результаты

            data.results.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.textContent = item.title; // или другой атрибут
                resultsContainer.appendChild(resultItem);
            });
        })
        .catch(error => console.error('Ошибка:', error));
});
