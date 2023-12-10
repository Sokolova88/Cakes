// A script for the button scroll to top

const btnUp = document.querySelector('.js__btn-up');

window.onscroll = () => {
  window.scrollY > 600
    ? btnUp.classList.remove('btn-up--hidden')
    : btnUp.classList.add('btn-up--hidden');
};

btnUp.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
