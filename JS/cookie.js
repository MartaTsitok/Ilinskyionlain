document.addEventListener('DOMContentLoaded', () => {
        const consentKey = 'cookiesAccepted';
        const consentBanner = document.getElementById('cookie-consent');
        const acceptBtn = document.getElementById('accept-cookies');

        if (!localStorage.getItem(consentKey)) {
            consentBanner.style.display = 'flex';
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem(consentKey, 'true');
            consentBanner.style.display = 'none';
        });
    });