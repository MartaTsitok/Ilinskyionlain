document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const chatClose = document.getElementById('chat-close');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Открыть/закрыть чат по кнопке
    chatToggle.addEventListener('click', () => {
        chatContainer.style.display = 'flex';
        chatToggle.style.display = 'none';
        chatInput.focus();
    });

    chatClose.addEventListener('click', () => {
        chatContainer.style.display = 'none';
        chatToggle.style.display = 'block';
    });

    // Функция добавить сообщение в чат
    function addMessage(text, sender = 'user') {
        const msgDiv = document.createElement('div');
        msgDiv.textContent = text;
        msgDiv.style.marginBottom = '8px';
        msgDiv.style.padding = '6px 10px';
        msgDiv.style.borderRadius = '10px';
        msgDiv.style.maxWidth = '80%';
        msgDiv.style.wordWrap = 'break-word';

        if (sender === 'user') {
            msgDiv.style.backgroundColor = '#FFA900';
            msgDiv.style.color = 'white';
            msgDiv.style.alignSelf = 'flex-end';
        } else {
            msgDiv.style.backgroundColor = '#eee';
            msgDiv.style.color = '#333';
            msgDiv.style.alignSelf = 'flex-start';
        }

        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Пример простого ответа помощника
    function botResponse(userText) {
        let response = "Извините, я пока не понимаю это.";
        const text = userText.toLowerCase();

        if (text.includes('привет') || text.includes('здравствуйте')) {
            response = 'Здравствуйте! Чем могу помочь?';
        } else if (text.includes('как') && text.includes('работать')) {
            response = 'Вы можете использовать меню слева для навигации.';
        } else if (text.includes('спасибо')) {
            response = 'Пожалуйста! Обращайтесь.';
        }

        setTimeout(() => addMessage(response, 'bot'), 500);
    }

    // Обработка отправки формы
    chatForm.addEventListener('submit', e => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        chatInput.value = '';
        botResponse(text);
    });
});

