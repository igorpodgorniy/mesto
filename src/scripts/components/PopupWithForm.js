import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, callbackSubmit) {
    super(selector);
    this._popup = document.querySelector(selector);
    this._form = this._popup.querySelector('form');
    this._callbackSubmit = callbackSubmit;
  }

  _getInputValues() {
    const inputList = this._popup.querySelectorAll('.popup__input');
    const valueList = [];
    inputList.forEach(item => {
      valueList.push(item.value);
    });
    return valueList;
  }

  setEventListeners = (evt) => {
    this._form.addEventListener('submit', this._callbackSubmit);
    this._handlePopupClose(evt);
    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._popup.removeEventListener('mousedown', this.setEventListeners);
    document.removeEventListener('keydown', this._handleEscClose);
    this._form.reset();
  }
}