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
const form = document.querySelector('.popup__container');
const btnClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const nameProfile = document.querySelector('.profile__title');
const descProfile = document.querySelector('.profile__subtitle');
const popupNameProfile = document.querySelector('#nameProfile');
const popupDescProfile = document.querySelector('#descProfile');
const elementTemplate = document.querySelector('#element').content;
const elementParent = document.querySelector('.elements__items');

// Добавление карточек из массива на страницу
initialCards.forEach(item => {
  const elementItem = elementTemplate.querySelector('.elements__item').cloneNode(true);
  elementItem.querySelector('.elements__image').src = item.link;
  elementItem.querySelector('.elements__image').alt = item.name;
  elementItem.querySelector('.elements__title').textContent = item.name;
  elementParent.append(elementItem);
})

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

form.addEventListener('submit', formSubmitHandler);

elementParent.addEventListener('click', (evt) => {
  evt.target.classList.toggle('elements__heart_active');
})