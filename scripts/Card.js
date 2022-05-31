import { popupPhoto, popupViewPhoto } from "./constants.js";
import { openPopup } from "./index.js";
export class Card {
  constructor(name, link, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._elementItem = null;
  }

  createCard() {
    const elementTemplate = document.querySelector('#element').content;
    this._elementItem = elementTemplate.querySelector(this._templateSelector).cloneNode(true);
    const elImage = this._elementItem.querySelector('.card__image');
    elImage.src = this._link;
    elImage.alt = this._name;
    this._elementItem.querySelector('.card__title').textContent = this._name;
    elImage.addEventListener('click', () => {
      this._openPhoto();
    })
    this._elementItem.querySelector('.card__heart').addEventListener('click', this._handleClickLike);
    this._elementItem.querySelector('.card__delete').addEventListener('click', () => {
      this._handleClickDelete()
    });
    return this._elementItem;
  }

  _handleClickLike(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _handleClickDelete() {
    this._elementItem.remove();
    this._elementItem = null;
  }

  _openPhoto() {
    popupPhoto.src = this._link;
    popupPhoto.alt = this._name;
    popupViewPhoto.querySelector('.popup__title-image').textContent = this._name;
    openPopup(popupViewPhoto);
  }
}