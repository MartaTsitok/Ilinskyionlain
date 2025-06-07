document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.rotating-logo');

    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'rotate(360deg)';
        logo.style.transition = 'transform 0.5s ease';
    });

    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'rotate(0deg)';
    });
});
