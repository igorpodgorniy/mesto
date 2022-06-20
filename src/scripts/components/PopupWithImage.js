import { Popup } from "./Popup.js";
import { popupPhoto, popupPhotoTitle } from "../utils/constants.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popup = document.querySelector(selector);
  }

  open(text, link) {
    popupPhoto.src = link;
    popupPhoto.alt = text;
    popupPhotoTitle.textContent = text;
    this._popup.classList.add('popup_opened');
    this._popup.addEventListener('mousedown', this.setEventListeners);
    document.addEventListener('keydown', this._handleEscClose);
  }
}