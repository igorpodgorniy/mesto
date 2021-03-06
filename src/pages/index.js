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
popupImage.setEventListeners();

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
    popupEditProfile.renderLoading(true, 'Сохранение...');
    api.editProfile({name, about})
      .then(res => {
        infoProfile.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false);
      });
  }
);
popupEditProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm(
  '#popupEditAvatar',
  ({link}) => {
    popupEditAvatar.renderLoading(true, 'Сохранение...');
    api.changeAvatar(link)
      .then(res => {
        infoProfile.setUserInfo(res);
        popupEditAvatar.close();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupEditAvatar.renderLoading(false);
      });
  }
)
popupEditAvatar.setEventListeners();

const popupAddPhoto = new PopupWithForm(
  '#popupAddPhoto',
  ({name, link}) => {
    popupAddPhoto.renderLoading(true, 'Создание...');
    api.addCard({name, link})
      .then(res => {
        const cardElement = generateCard(res);
        photoCard.addItem(cardElement, true);
        popupAddPhoto.close();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupAddPhoto.renderLoading(false, 'Создать');
      });
  }
);
popupAddPhoto.setEventListeners();

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
      })
  }
);
popupDeletePhoto.setEventListeners();

btnAdd.addEventListener('click', () => {
  popupAddPhoto.open();
  formValidators['formAddPhoto'].resetValidation();
})

btnEdit.addEventListener('click', () => {
  const userData = infoProfile.getUserInfo();
  popupEditProfile.setInputValues(userData)
  // popupNameProfile.value = userData.name;
  // popupDescProfile.value = userData.about;
  popupEditProfile.open();
  formValidators['formEditProfile'].resetValidation();
})

btnEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  formValidators['formEditAvatar'].resetValidation();
})

// Инициализация данных карточек и информации о пользователе
Promise.all([api.getCards(), api.getUserInfo()])
  .then(([cardList, userInfo]) => {
    infoProfile.setUserInfo(userInfo);
    photoCard.rendererAll(cardList);
  })
  .catch(err => {
    console.log(err);
  });

const formValidators = {}
// Включение валидации
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formElement => {
    const formName = formElement.getAttribute('name');
    const validator = new FormValidator(formElement, {...config})
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(configFormForValidation);