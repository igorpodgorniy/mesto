import '../../pages/index.css';

import { Section } from "../components/Section.js";
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { 
  popupNameProfile,
  popupDescProfile,
  popupNamePhoto,
  popupLinkPhoto,
  nameProfile,
  descProfile,
  elementParent,
  initialCards,
  btnEdit,
  btnAdd,
  configFormForValidation
 } from "../utils/constants.js";

function createCard(name, link, selector) {
  const card = new Card(name, link, selector);
  return card.createCard();
}

function renderCard(name, link, selector) {
  return elementParent.prepend(createCard(name, link, selector));
}

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

btnEdit.addEventListener('click', () => {
  popupNameProfile.value = nameProfile.textContent;
  popupDescProfile.value = descProfile.textContent;
  const popupEditProfile = new PopupWithForm(
    '#popupEditProfile',
    () => {
      nameProfile.textContent = popupNameProfile.value;
      descProfile.textContent = popupDescProfile.value;
      popupEditProfile.close();
    }
  );
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

btnAdd.addEventListener('click', () => {
  const popupAddPhoto = new PopupWithForm(
    '#popupAddPhoto',
    () => {
      renderCard(popupNamePhoto.value, popupLinkPhoto.value, '.card');
      popupAddPhoto.close();
    }
  );
  popupAddPhoto.open();
})