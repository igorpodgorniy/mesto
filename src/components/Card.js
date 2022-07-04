export class Card {
  constructor(name, link, likes, isOwner, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._likesArr = likes;
    this._isOwner = isOwner;
    this._elementItem = null;
    this._handleCardClick = handleCardClick;
  }

  createCard() {
    this._elementItem = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    
    this._btnDel = this._elementItem.querySelector('.card__delete');
    this._image = this._elementItem.querySelector('.card__image');
    this._likeCounter = this._elementItem.querySelector('.card__like-counter');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._likesArr
      ? this._likeCounter.textContent = this._likesArr.length
      : this._likeCounter.textContent;
    this._elementItem.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    if(!this._isOwner) this._btnDel.remove();
    return this._elementItem;
  }

  _setEventListeners = () => {
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._elementItem.querySelector('.card__heart').addEventListener('click', this._handleClickLike);
    this._elementItem.querySelector('.card__delete').addEventListener('click', () => {
      this._handleClickDelete();
    });
  }

  _handleClickLike(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _handleClickDelete() {
    this._elementItem.remove();
    this._elementItem = null;
  }
}