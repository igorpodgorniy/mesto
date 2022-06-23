import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._photo = this._popup.querySelector('.popup__image');
    this._title = this._popup.querySelector('.popup__title-image');
  }

  open(text, link) {
    this._photo.src = link;
    this._photo.alt = text;
    this._title.textContent = text;
    super.open();
  }
}