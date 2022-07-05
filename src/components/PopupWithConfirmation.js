import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(selector, callbackSubmit) {
    super(selector);
    this._btnConfirm = this._popup.querySelector('.popup__button');
    this._callbackSubmit = callbackSubmit;
  }

  open(element) {
    super.open();
    this._element = element;
  }

  setEventListeners() {
    super.setEventListeners();
    this._btnConfirm.addEventListener('click', () => {
      this._callbackSubmit(this._element);
    })
  }
}