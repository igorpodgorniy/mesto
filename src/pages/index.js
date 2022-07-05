import '../pages/index.css';

import { Api } from '../components/Api.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { 
  popupNameProfile,
  popupDescProfile,
  btnEditAvatar,
  btnEdit,
  btnAdd,
  configFormForValidation,
  TOKEN
 } from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: TOKEN,
    'Content-Type': 'application/json'
  }
});

const popupImage = new PopupWithImage('#popupViewPhoto');

function generateCard(item) {
  const card = new Card(
    item.name,
    item.link,
    item._id,
    item.likes,
    item.owner,
    infoProfile.id,
    '#element',
    (name, link) => {
      popupImage.setEventListeners();
      popupImage.open(name, link);
    },
    () => {
      popupDeletePhoto.open(card);
    },
    () => {
      api.likePost(card._id, !card.isLiked)
        .then((res) => {
          card.setLike(res.likes);
        })
        .catch((err) => console.log(err.status));
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

const popupEditAvatar = new PopupWithForm(
  '#popupEditAvatar',
  ({link}) => {
    api.changeAvatar(link)
      .then(res => {
        infoProfile.setUserAvatar(res.avatar);
        popupEditAvatar.close();
      })
      .catch(err => {
        console.log(err);
      });
  }
)
popupEditAvatar.setEventListeners();

const popupDeletePhoto = new PopupWithConfirmation(
  '#popupDeletePhoto',
  (card) => {
    api.deleteCard(card._id)
      .then(() => card.deleteCard())
      .then(() => {
        popupDeletePhoto.close();
      })
      .catch(err => {
        console.log(err);
      });
  }
);
popupDeletePhoto.setEventListeners();

const popupAddPhoto = new PopupWithForm(
  '#popupAddPhoto',
  ({name, link}) => {
    api.addCard({name, link})
      .then(res => {
        const cardElement = generateCard(res);
        photoCard.addItem(cardElement, true);
        popupAddPhoto.close();
        photoForm.toggleButtonState();
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

btnEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
})

// Инициализация данных карточек и информации о пользователе
Promise.all([api.getCards(), api.getUserInfo()])
  .then(([cardList, userInfo]) => {
    const { name, about, avatar, _id } = userInfo;
    infoProfile.setUserInfo({name, about, _id});
    infoProfile.setUserAvatar(avatar);

    photoCard.rendererAll(cardList);
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

const avatarForm = new FormValidator({
  formSelector: '#formEditAvatar',
  ...configFormForValidation
});

photoForm.enableValidation();
profileForm.enableValidation();
avatarForm.enableValidation();