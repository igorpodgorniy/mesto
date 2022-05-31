export class Card {
  constructor(name, link, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._elementItem = null;
  }

  _createCard() {
    const elementTemplate = document.querySelector('#element').content;
    this._elementItem = elementTemplate.querySelector(this._templateSelector).cloneNode(true);
    const elImage = this._elementItem.querySelector('.elements__image');
    elImage.src = this._link;
    elImage.alt = this._name;
    this._elementItem.querySelector('.elements__title').textContent = this._name;
    elImage.addEventListener('click', () => {
      this._openPhoto();
    })
    this._elementItem.querySelector('.elements__heart').addEventListener('click', this._clickLike);
    this._elementItem.querySelector('.elements__delete').addEventListener('click', () => {
      this._clickDelete()
    });
    return this._elementItem;
  }

  _clickLike(evt) {
    evt.target.classList.toggle('elements__heart_active');
  }

  _clickDelete() {
    this._elementItem.remove();
    this._elementItem = null;
  }

  renderCard() {
    const elementParent = document.querySelector('.elements__items');
    elementParent.prepend(this._createCard());
  }

  _openPhoto() {
    const popupViewPhoto = document.querySelector('#popupViewPhoto');
    popupViewPhoto.querySelector('.popup__image').src = this._link;
    popupViewPhoto.querySelector('.popup__image').alt = this._name;
    popupViewPhoto.querySelector('.popup__title-image').textContent = this._name;
    this._openPopup(popupViewPhoto);
  }

  _openPopup(popupId) {
    popupId.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._closePopupByEsc(evt);
    });
  }

  _closePopup(popupId) {
    popupId.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      this._closePopupByEsc(evt);
    });
  }

  _closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      this._closePopup(openedPopup);
    }
  }
}