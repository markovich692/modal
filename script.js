'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const functionCloseModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
}

closeModal.addEventListener('click', functionCloseModal);

overlay.addEventListener('click', functionCloseModal);

document.addEventListener('keydown', function (event) {
  if (!modal.classList.contains('hidden') && event.key === 'Escape') {
    functionCloseModal();
  }
});

// for (let i = 0; i < showModal.length; i++) {
//   showModal[i].addEventListener('click', function () {
//     console.log(showModal[i]);
//     console.log(showModal.length);

//     while (i < showModal.length) {
//       // console.log(showModal[i]);
//       showModal[i].classList.add('hidden');
//       i++;
//     }

//     console.log(overlay.classList.remove('.hidden'));
//     overlay.classList.remove('hidden');
//     modal.classList.remove('hidden');
//   });
// }

// overlay.addEventListener('click', function () {
//   overlay.classList.add('hidden');
//   modal.classList.add('hidden');

//   console.log(showModal);

//   let j = 0;
//   while (j < showModal.length) {
//     console.log(showModal[j].classList.remove('hidden'));
//     showModal[j].classList.remove('hidden');
//     j++;
//   }
// });

// closeModal.addEventListener('click', function () {
//   overlay.classList.add('hidden');
//   modal.classList.add('hidden');

//   console.log(showModal);

//   let j = 0;
//   while (j < showModal.length) {
//     console.log(showModal[j].classList.remove('hidden'));
//     showModal[j].classList.remove('hidden');
//     j++;
//   }
// });

// document.querySelector('body').addEventListener('keydown', function (event) {
//   if (event.key === 'Escape') {
//     overlay.classList.add('hidden');
//     modal.classList.add('hidden');

//     console.log(showModal);

//     let j = 0;
//     while (j < showModal.length) {
//       console.log(showModal[j].classList.remove('hidden'));
//       showModal[j].classList.remove('hidden');
//       j++;
//     }
//   }
// });
