'use strict';

//Variable Declarations
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Function for Opening Modal Window
const modalOpened = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Function for Closing Modal Window
const modalClosed = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Iterate through the Show Modal Classes
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', modalOpened);
}

//Close Modal Windows
btnCloseModal.addEventListener('click', modalClosed);
overlay.addEventListener('click', modalClosed);

//Close on Escape Key Press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClosed();
  }
});
