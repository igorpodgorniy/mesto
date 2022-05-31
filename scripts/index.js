import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import * as data from "./constants.js";

function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
  document.removeEventListener('mousedown', handlePopupClose)
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
  document.addEventListener('mousedown', handlePopupClose)
  document.addEventListener('keydown', closePopupByEsc);
}

function handleSubmitForm() {
  data.nameProfile.textContent = data.popupNameProfile.value;
  data.descProfile.textContent = data.popupDescProfile.value;
  closePopup(popupEditProfile);
}

function createAndRenderCard(name, link, selector) {
  const itemPhoto = new Card (name, link, selector);
  renderCard(itemPhoto.createCard());
}

function handleAddFormSubmit() {
  createAndRenderCard(data.popupNamePhoto.value, data.popupLinkPhoto.value, '.card');
  closePopup(data.popupAddPhoto);
  data.formAddPhoto.reset();
}

function handlePopupClose(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

function renderCard(item) {
  data.elementParent.prepend(item);
}

data.initialCards.forEach(item => {
  createAndRenderCard(item.name, item.link, '.card');
})

data.btnEdit.addEventListener('click', () => {
  data.popupNameProfile.value = data.nameProfile.textContent;
  data.popupDescProfile.value = data.descProfile.textContent;
  openPopup(data.popupEditProfile);
  closePopupByEsc(data.popupEditProfile);
})

data.btnAdd.addEventListener('click', () => {
  openPopup(data.popupAddPhoto);
  closePopupByEsc(data.popupAddPhoto);
})

data.buttonCloseList.forEach(btnClose => {
  btnClose.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  })
})

data.formEditProfile.addEventListener('submit', handleSubmitForm);
data.formAddPhoto.addEventListener('submit', handleAddFormSubmit);


// Включение валидации форм
const photoForm = new FormValidator({
  formSelector: '#formAddPhoto',
  ...data.configFormForValidation
});

const profileForm = new FormValidator({
  formSelector: '#formEditProfile',
  ...data.configFormForValidation
});

photoForm.enableValidation();
profileForm.enableValidation();

export { openPopup }