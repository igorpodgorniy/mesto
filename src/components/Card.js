export class Card {
  constructor(name, link, _id, likes, owner, ownerPage, templateSelector, handleCardClick, handleDeleteCardClick, handleLikeCard) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._id = _id;
    this._likesArr = likes;
    this._owner = owner;
    this._ownerPage = ownerPage;
    this._elementItem = null;
    this.isLiked = false;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeCard = handleLikeCard;
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
    this._heartBtn = this._elementItem.querySelector('.card__heart');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._likesArr
      ? this._likeCounter.textContent = this._likesArr.length
      : this._likeCounter.textContent;
    this._elementItem.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    if (this._owner._id !== this._ownerPage) this._btnDel.remove();
    if (this._likesArr.filter(item => item._id === this._ownerPage).length > 0) {
      this._toggleLike();
      this.isLiked = true;
    }
    return this._elementItem;
  }

  _setEventListeners = () => {
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._heartBtn.addEventListener('click', () => this._handleLikeCard(this));
    this._btnDel.addEventListener('click', () => {
      this._handleDeleteCardClick();
    });
  }

  deleteCard() {
    this._elementItem.remove();
    this._elementItem = null;
  }

  setLike(likes) {
    this._likeCounter.textContent = likes.length;
    this._likesArr = likes;
    this._toggleLike();
  }

  _toggleLike() {
    this._heartBtn.classList.toggle('card__heart_active');
    this.isLiked = !this.isLiked;
  }
}