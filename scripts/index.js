const btnEdit = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__container');
const btnClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const nameProfile = document.querySelector('.profile__title');
const descProfile = document.querySelector('.profile__subtitle');
const popupNameProfile = document.querySelector('#nameProfile');
const popupDescProfile = document.querySelector('#descProfile');

function formSubmitHandler(event) {
  console.log(1);
  event.preventDefault();
  nameProfile.textContent = popupNameProfile.value;
  descProfile.textContent = popupDescProfile.value;
  popup.classList.remove('popup_opened');
}

btnEdit.addEventListener('click', () => {
  popupNameProfile.value = nameProfile.textContent;
  popupDescProfile.value = descProfile.textContent;
  popup.classList.add('popup_opened');
})

btnClose.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
})

form.addEventListener('submit', formSubmitHandler)