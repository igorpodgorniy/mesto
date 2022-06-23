import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, callbackSubmit) {
    super(selector);
    this._form = this._popup.querySelector('form');
    this._callbackSubmit = callbackSubmit;
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const valueList = {};
    this._inputList.forEach(item => {
      valueList[item.name] = item.value;
    });
    return valueList;
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', () => {
      this._callbackSubmit(this._getInputValues())
    });
    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}