import '../../pages/index.css';

import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { 
  popupNameProfile,
  popupDescProfile,
  popupNamePhoto,
  popupLinkPhoto,
  nameProfile,
  descProfile,
  popupAddPhoto,
  formAddPhoto,
  elementParent,
  initialCards,
  btnEdit,
  popupEditProfile,
  btnAdd,
  formEditProfile,
  buttonCloseList,
  configFormForValidation
 } from "../utils/constants.js";

function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
  popupId.removeEventListener('mousedown', handlePopupClose)
  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}

function openPopup(popupId) {
  popupId.classList.add('popup_opened');
  popupId.addEventListener('mousedown', handlePopupClose)
  document.addEventListener('keydown', closePopupByEsc);
}

function handleSubmitForm() {
  nameProfile.textContent = popupNameProfile.value;
  descProfile.textContent = popupDescProfile.value;
  closePopup(popupEditProfile);
}

function createCard(name, link, selector) {
  const card = new Card(name, link, selector);
  return card.createCard();
}

function handleAddFormSubmit() {
  renderCard(popupNamePhoto.value, popupLinkPhoto.value, '.card');
  closePopup(popupAddPhoto);
  formAddPhoto.reset();
}

function handlePopupClose(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

function renderCard(name, link, selector) {
  return elementParent.prepend(createCard(name, link, selector));
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, '.card');
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
}, '.elements__items');

btnEdit.addEventListener('click', () => {
  popupNameProfile.value = nameProfile.textContent;
  popupDescProfile.value = descProfile.textContent;
  openPopup(popupEditProfile);
})

btnAdd.addEventListener('click', () => {
  openPopup(popupAddPhoto);
})

buttonCloseList.forEach(btnClose => {
  btnClose.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  })
})

cardList.rendererAll();

formEditProfile.addEventListener('submit', handleSubmitForm);
formAddPhoto.addEventListener('submit', handleAddFormSubmit);

// Включение валидации форм
const photoForm = new FormValidator({
  formSelector: '#formAddPhoto',
  ...configFormForValidation
});

const profileForm = new FormValidator({
  formSelector: '#formEditProfile',
  ...configFormForValidation
});

photoForm.enableValidation();
profileForm.enableValidation();

export { openPopup }