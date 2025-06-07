const wrapper = document.querySelector('.sections-wrapper');
const buttons = wrapper.querySelectorAll('button');

function updateVisibility() {
  const wrapperRight = wrapper.getBoundingClientRect().right;
  buttons.forEach(btn => {
    const btnRight = btn.getBoundingClientRect().right;
    if (btnRight > wrapperRight) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'inline-flex';
    }
  });
}

window.addEventListener('resize', updateVisibility);
window.addEventListener('load', updateVisibility);
