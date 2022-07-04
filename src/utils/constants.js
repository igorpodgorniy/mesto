export const initialCards = [
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

export const configFormForValidation = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}

// Поиск необходимых элементов на странице
export const btnEdit = document.querySelector('.profile__edit-button');
export const btnAdd = document.querySelector('.profile__add-button');
export const btnEditAvatar = document.querySelector('.profile__avatar');
export const buttonCloseList = document.querySelectorAll('.popup__close');
export const popupEditProfile = document.querySelector('#popupEditProfile');
export const popupAddPhoto = document.querySelector('#popupAddPhoto');
export const nameProfile = document.querySelector('.profile__title');
export const descProfile = document.querySelector('.profile__subtitle');
export const popupNameProfile = document.querySelector('#name-profile-input');
export const popupDescProfile = document.querySelector('#desc-profile-input');
export const popupNamePhoto = document.querySelector('#name-photo-input');
export const popupLinkPhoto = document.querySelector('#link-photo-input');
export const elementParent = document.querySelector('.elements__items');
export const popupViewPhoto = document.querySelector('#popupViewPhoto');
export const popupPhoto = popupViewPhoto.querySelector('.popup__image');
export const popupPhotoTitle = popupViewPhoto.querySelector('.popup__title-image');