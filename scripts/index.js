import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const buttonCloseList = document.querySelectorAll('.popup__close');
const popupEditProfile = document.querySelector('#popupEditProfile');
const popupAddPhoto = document.querySelector('#popupAddPhoto');
const popupViewPhoto = document.querySelector('#popupViewPhoto');
const formAddPhoto = popupAddPhoto.querySelector('#formAddPhoto');
const formEditProfile = popupEditProfile.querySelector('#formEditProfile');
const nameProfile = document.querySelector('.profile__title');
const descProfile = document.querySelector('.profile__subtitle');
const popupNameProfile = document.querySelector('#name-profile-input');
const popupDescProfile = document.querySelector('#desc-profile-input');
const popupNamePhoto = document.querySelector('#name-photo-input');
const popupLinkPhoto = document.querySelector('#link-photo-input');
const elementTemplate = document.querySelector('#element').content;
const elementParent = document.querySelector('.elements__items');

function createCard(item) {
  const elementItem = elementTemplate.querySelector('.elements__item').cloneNode(true);
  const elImage = elementItem.querySelector('.elements__image');
  elImage.src = item.link;
  elImage.alt = item.name;
  elementItem.querySelector('.elements__title').textContent = item.name;
  elImage.addEventListener('click', () => {
    openPhoto(item);
  })
  elementItem.querySelector('.elements__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__heart_active');
  })
  elementItem.querySelector('.elements__delete').addEventListener('click', () => {
    elementItem.remove();
  })
  return elementItem;
}

function renderCard(item) {
  elementParent.prepend(createCard(item));
}

function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
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
  document.addEventListener('keydown', closePopupByEsc);
}

function submitFormHandler() {
  nameProfile.textContent = popupNameProfile.value;
  descProfile.textContent = popupDescProfile.value;
  closePopup(popupEditProfile);
}

function addFormSubmitHandler() {
  const item = {
    name: popupNamePhoto.value,
    link: popupLinkPhoto.value
  };
  renderCard(item);
  closePopup(popupAddPhoto);
  formAddPhoto.reset();
}

function openPhoto(photo) {
  popupViewPhoto.querySelector('.popup__image').src = photo.link;
  popupViewPhoto.querySelector('.popup__image').alt = photo.name;
  popupViewPhoto.querySelector('.popup__title-image').textContent = photo.name;
  openPopup(popupViewPhoto);
  closePopupByEsc(popupViewPhoto);
}

initialCards.forEach(item => {
  renderCard(item);
})

btnEdit.addEventListener('click', () => {
  popupNameProfile.value = nameProfile.textContent;
  popupDescProfile.value = descProfile.textContent;
  openPopup(popupEditProfile);
  closePopupByEsc(popupEditProfile);
})

btnAdd.addEventListener('click', () => {
  openPopup(popupAddPhoto);
  closePopupByEsc(popupAddPhoto);
})

buttonCloseList.forEach(btnClose => {
  btnClose.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  })
})

document.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
})

formEditProfile.addEventListener('submit', submitFormHandler);
formAddPhoto.addEventListener('submit', addFormSubmitHandler);

const photoForm = new FormValidator({
  formSelector: '#formAddPhoto',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
});

const profileForm = new FormValidator({
  formSelector: '#formEditProfile',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
});

photoForm.enableValidation();
profileForm.enableValidation();