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
  popupNamePhoto,
  popupLinkPhoto,
  initialCards,
  btnEdit,
  btnAdd,
  configFormForValidation
 } from "../utils/constants.js";

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(
      item.name,
      item.link,
      '.card',
      () => {
        const popupImage = new PopupWithImage('#popupViewPhoto');
        popupImage.open(item.name, item.link);
      });
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
}, '.elements__items');

const infoProfile = new UserInfo({
  selectorNameUser: '.profile__title',
  selectorAboutUser: '.profile__subtitle'
})

const popupEditProfile = new PopupWithForm(
  '#popupEditProfile',
  () => {
    infoProfile.setUserInfo({
      name: popupNameProfile.value,
      about: popupDescProfile.value});
    popupEditProfile.close();
  }
);

btnEdit.addEventListener('click', () => {
  const userData = infoProfile.getUserInfo();
  popupNameProfile.value = userData.name;
  popupDescProfile.value = userData.about;
  popupEditProfile.open();
})

cardList.rendererAll();

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

const popupAddPhoto = new PopupWithForm(
  '#popupAddPhoto',
  () => {
    const item = {
      name: popupNamePhoto.value,
      link: popupLinkPhoto.value
    }
    const cardItem = new Section({
      items: [],
      renderer: (item) => {
        const card = new Card(
          item.name,
          item.link,
          '.card',
          () => {
            const popupImage = new PopupWithImage('#popupViewPhoto');
            popupImage.open(item.name, item.link);
          });
        const cardElement = card.createCard();
        cardItem.addItem(cardElement);
      }
    }, '.elements__items');
    cardItem.renderer(item);
    popupAddPhoto.close();
  }
);

btnAdd.addEventListener('click', () => {
  popupAddPhoto.open();
})