
const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block"; // Показываем кнопку
    } else {
        scrollToTopButton.style.display = "none"; // Скрываем кнопку
    }
};

scrollToTopButton.onclick = function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};
