import '../pages/index.css';

import { Section } from "../components/Section.js";
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { 
  popupNameProfile,
  popupDescProfile,
  initialCards,
  btnEdit,
  btnAdd,
  configFormForValidation
 } from "../utils/constants.js";

 const popupImage = new PopupWithImage('#popupViewPhoto');

function generateCard(item) {
  const card = new Card(
    item.name,
    item.link,
    '#element',
    (name, link) => {
      popupImage.setEventListeners();
      popupImage.open(name, link);
    });
    return card.createCard();
}

const cardList = new Section(
  (item) => {
    const cardElement = generateCard(item);
    cardList.addItem(cardElement);
  },
  '.elements__items'
);

const cardItem = new Section(
  (item) => {
    const cardElement = generateCard(item);
    cardItem.addItem(cardElement);
  },
  '.elements__items'
);

const infoProfile = new UserInfo({
  selectorNameUser: '.profile__title',
  selectorAboutUser: '.profile__subtitle'
})

const popupEditProfile = new PopupWithForm(
  '#popupEditProfile',
  ({name, about}) => {
    infoProfile.setUserInfo({name, about});
    popupEditProfile.close();
  }
);
popupEditProfile.setEventListeners();

const popupAddPhoto = new PopupWithForm(
  '#popupAddPhoto',
  ({name, link}) => {
    cardItem.renderer({name, link});
    popupAddPhoto.close();
  }
);

popupAddPhoto.setEventListeners();

btnAdd.addEventListener('click', () => {
  popupAddPhoto.open();
})

btnEdit.addEventListener('click', () => {
  const userData = infoProfile.getUserInfo();
  popupNameProfile.value = userData.name;
  popupDescProfile.value = userData.about;
  popupEditProfile.open();
})

cardList.rendererAll(initialCards);

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