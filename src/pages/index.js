import '../pages/index.css';

import { Api } from '../components/Api.js';
import { Section } from "../components/Section.js";
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { 
  popupNameProfile,
  popupDescProfile,
  btnEdit,
  btnAdd,
  configFormForValidation
 } from "../utils/constants.js";

let thisProfileId = '';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '93f303b5-489a-4f9c-a73d-101d47521fd1',
    'Content-Type': 'application/json'
  }
});

const popupImage = new PopupWithImage('#popupViewPhoto');

function generateCard(item) {
  const card = new Card(
    item.name,
    item.link,
    item.likes,
    item.owner ? thisProfileId === item.owner._id : true,
    '#element',
    (name, link) => {
      popupImage.setEventListeners();
      popupImage.open(name, link);
    });
    return card.createCard();
}

const photoCard = new Section(
  (item) => {
    const cardElement = generateCard(item);
    photoCard.addItem(cardElement);
  },
  '.elements__items'
);

const infoProfile = new UserInfo({
  selectorNameUser: '.profile__title',
  selectorAboutUser: '.profile__subtitle',
  selectorAvatarUser: '.profile__avatar'
})

const popupEditProfile = new PopupWithForm(
  '#popupEditProfile',
  ({name, about}) => {
    api.editProfile({name, about})
      .then(res => {
        const { name, about } = res;
        infoProfile.setUserInfo({name, about});
        popupEditProfile.close();
      })
      .catch(err => {
        console.log(err);
      });
    
  }
);
popupEditProfile.setEventListeners();

const popupAddPhoto = new PopupWithForm(
  '#popupAddPhoto',
  ({name, link}) => {
    api.addCard({name, link})
      .then(res => {
        const { name, link } = res;
        const cardElement = generateCard({name, link});
        photoCard.addItem(cardElement, true);
        popupAddPhoto.close();
      })
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

// Инициализация данных карточек и информации о пользователе
api.getCards()
  .then(res => {
    photoCard.rendererAll(res);
  })
  .catch(err => {
    console.log(err);
  });

api.getUserInfo()
  .then(res => {
    const { name, about, avatar, _id } = res;
    thisProfileId = _id;
    infoProfile.setUserInfo({name, about});
    infoProfile.setUserAvatar(avatar);
  })
  .catch(err => {
    console.log(err);
  });

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