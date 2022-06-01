import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
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
 } from "./constants.js";

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
  return new Card (name, link, selector);
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
  const item = createCard(name, link, selector).createCard();
  elementParent.prepend(item);
}

initialCards.forEach(item => {
  renderCard(item.name, item.link, '.card');
})

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