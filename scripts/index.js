const btnEdit = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__container');
const btnClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const nameProfile = document.querySelector('.profile__title');
const descProfile = document.querySelector('.profile__subtitle');
const popupNameProfile = document.querySelector('#nameProfile');
const popupDescProfile = document.querySelector('#descProfile');

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  nameProfile.textContent = popupNameProfile.value;
  descProfile.textContent = popupDescProfile.value;
  popupClose();
}

btnEdit.addEventListener('click', () => {
  popupNameProfile.value = nameProfile.textContent;
  popupDescProfile.value = descProfile.textContent;
  popup.classList.add('popup_opened');
})

btnClose.addEventListener('click', () => {
  popupClose();
})

form.addEventListener('submit', formSubmitHandler)