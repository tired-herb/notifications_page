console.log('hi');

const button = document.querySelector('.button');
const notifsNew = document.querySelectorAll('.notification-new');
const icons = document.querySelectorAll('.fa-solid');
let notifQuant = (document.querySelector('.notifQuant').innerHTML =
  notifsNew.length);
let result = document.querySelector('.notifQuant');

button.addEventListener('click', readAll);

function readAll(e) {
  e.preventDefault();

  notifsNew.forEach((el) =>
    el.classList.replace('notification-new', 'notification')
  );

  icons.forEach((elem) => elem.classList.remove('fa-circle'));
  icons.forEach((elem) => elem.classList.replace('fa-solid', 'iconHidden'));

  result.textContent = parseInt(notifQuant) - notifsNew.length;
}
