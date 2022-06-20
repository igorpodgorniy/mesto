export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._elementItem = null;
    this._handleCardClick = handleCardClick;
  }

  createCard() {
    const elementTemplate = document.querySelector('#element').content;
    this._elementItem = elementTemplate.querySelector(this._templateSelector).cloneNode(true);
    const elImage = this._elementItem.querySelector('.card__image');
    elImage.src = this._link;
    elImage.alt = this._name;
    this._elementItem.querySelector('.card__title').textContent = this._name;
    this._setEventListeners(elImage);
    this._elementItem.querySelector('.card__heart').addEventListener('click', this._handleClickLike);
    this._elementItem.querySelector('.card__delete').addEventListener('click', () => {
      this._handleClickDelete()
    });
    return this._elementItem;
  }

  _setEventListeners(element) {
    element.addEventListener('click', () => {
      this._handleCardClick();
    })
  }

  _handleClickLike(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _handleClickDelete() {
    this._elementItem.remove();
    this._elementItem = null;
  }
}