// Script to open and close a modal window

(() => {
  const modalOpenBtn = document.querySelector('.js__modal-open');
  const modalCloseBtn = document.querySelector('.js__modal-close');
  const backdrop = document.querySelector('.js__backdrop');

  modalOpenBtn.addEventListener('click', toggleModal);
  modalCloseBtn.addEventListener('click', toggleModal);
  backdrop.addEventListener('click', closeBackdropClick);

  function toggleModal() {
    document.body.classList.toggle('modal--open');
    backdrop.classList.toggle('backdrop--hidden');
  }

  function closeBackdropClick(e) {
    if (e.target.classList.contains('backdrop')) {
      document.body.classList.remove('modal--open');
      backdrop.classList.add('backdrop--hidden');
    }
  }
})();
