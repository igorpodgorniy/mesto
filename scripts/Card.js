export class Card {
  constructor(name, link, templateSelector) {
    this.templateSelector = templateSelector;
    this.name = name;
    this.link = link;
    this.elementItem = null;
  }

  createCard() {
    const elementTemplate = document.querySelector('#element').content;
    this.elementItem = elementTemplate.querySelector(this.templateSelector).cloneNode(true);
    const elImage = this.elementItem.querySelector('.elements__image');
    elImage.src = this.link;
    elImage.alt = this.name;
    this.elementItem.querySelector('.elements__title').textContent = this.name;
    elImage.addEventListener('click', () => {
      this.openPhoto();
    })
    this.elementItem.querySelector('.elements__heart').addEventListener('click', this.clickLike);
    this.elementItem.querySelector('.elements__delete').addEventListener('click', () => {
      this.clickDelete()
    });
    return this.elementItem;
  }

  clickLike(evt) {
    evt.target.classList.toggle('elements__heart_active');
  }

  clickDelete() {
    this.elementItem.remove();
    this.elementItem = null;
  }

  renderCard() {
    const elementParent = document.querySelector('.elements__items');
    elementParent.prepend(this.createCard());
  }

  openPhoto() {
    const popupViewPhoto = document.querySelector('#popupViewPhoto');
    popupViewPhoto.querySelector('.popup__image').src = this.link;
    popupViewPhoto.querySelector('.popup__image').alt = this.name;
    popupViewPhoto.querySelector('.popup__title-image').textContent = this.name;
    openPopup(popupViewPhoto);
    closePopupByEsc(popupViewPhoto);
  }
}