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
const nameProfile = document.querySelector('.profile__title');
const descProfile = document.querySelector('.profile__subtitle');
const popupNameProfile = document.querySelector('#nameProfile');
const popupDescProfile = document.querySelector('#descProfile');
const popupNamePhoto = document.querySelector('#namePhoto');
const popupLinkPhoto = document.querySelector('#linkPhoto');
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
}

function openPopup(popupId) {
  popupId.classList.add('popup_opened');
}

function submitFormHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = popupNameProfile.value;
  descProfile.textContent = popupDescProfile.value;
  closePopup(popupEditProfile);
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const item = {
    name: popupNamePhoto.value,
    link: popupLinkPhoto.value
  };
  renderCard(item);
  closePopup(popupAddPhoto);
  popupAddPhoto.querySelector('#formAddPhoto').reset();
}

function openPhoto(photo) {
  popupViewPhoto.querySelector('.popup__image').src = photo.link;
  popupViewPhoto.querySelector('.popup__image').alt = photo.name;
  popupViewPhoto.querySelector('.popup__title-image').textContent = photo.name;
  openPopup(popupViewPhoto);
}

initialCards.forEach(item => {
  renderCard(item);
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

popupEditProfile.addEventListener('submit', submitFormHandler);
popupAddPhoto.addEventListener('submit', addFormSubmitHandler);