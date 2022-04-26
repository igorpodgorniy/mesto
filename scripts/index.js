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
const formEditProfile = document.querySelector('#formEditProfile');
const btnsClose = document.querySelectorAll('.popup__close');
const popupEditProfile = document.querySelector('#popupEditProfile');
const popupAddPhoto = document.querySelector('#popupAddPhoto');
const nameProfile = document.querySelector('.profile__title');
const descProfile = document.querySelector('.profile__subtitle');
const popupNameProfile = document.querySelector('#nameProfile');
const popupDescProfile = document.querySelector('#descProfile');
const popupNamePhoto = document.querySelector('#namePhoto');
const popupLinkPhoto = document.querySelector('#linkPhoto');
const elementTemplate = document.querySelector('#element').content;
const elementParent = document.querySelector('.elements__items');
const formAddPhoto = document.querySelector('#formEditProfile');

// Добавление фотографии на страницу
function addElementOnPage(item) {
  const elementItem = elementTemplate.querySelector('.elements__item').cloneNode(true);
  elementItem.querySelector('.elements__image').src = item.link;
  elementItem.querySelector('.elements__image').alt = item.name;
  elementItem.querySelector('.elements__title').textContent = item.name;
  elementParent.prepend(elementItem);
}

function popupClose(popupId) {
  popupId.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  nameProfile.textContent = popupNameProfile.value;
  descProfile.textContent = popupDescProfile.value;
  popupClose(popupEditProfile);
}

function addFormSubmitHandler(event) {
  event.preventDefault();
  const item = {
    name: popupNamePhoto.value,
    link: popupLinkPhoto.value
  };
  popupNamePhoto.value = '';
  popupLinkPhoto.value = '';
  addElementOnPage(item);
  popupClose(popupAddPhoto);
}

initialCards.forEach(item => {
  addElementOnPage(item);
})

btnEdit.addEventListener('click', () => {
  popupNameProfile.value = nameProfile.textContent;
  popupDescProfile.value = descProfile.textContent;
  popupEditProfile.classList.add('popup_opened');
})

btnAdd.addEventListener('click', () => {
  popupAddPhoto.classList.add('popup_opened');
})

btnsClose.forEach(btnClose => {
  btnClose.addEventListener('click', () => {
    popupClose(popupEditProfile);
    popupClose(popupAddPhoto);
  })
})

formEditProfile.addEventListener('submit', formSubmitHandler);
popupAddPhoto.addEventListener('submit', addFormSubmitHandler);

elementParent.addEventListener('click', (evt) => {
  evt.target.classList.toggle('elements__heart_active');
})