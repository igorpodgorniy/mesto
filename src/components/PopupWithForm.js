import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, callbackSubmit) {
    super(selector);
    this.form = this._popup.querySelector('form');
    this._callbackSubmit = callbackSubmit;
    this._inputList = this.form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const valueList = {};
    this._inputList.forEach(item => {
      valueList[item.name] = item.value;
    });
    return valueList;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', () => {
      this._callbackSubmit(this._getInputValues())
    });
  }

  close() {
    this.form.reset();
    super.close();
  }
}