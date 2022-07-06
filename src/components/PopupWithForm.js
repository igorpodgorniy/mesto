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

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._callbackSubmit(this._getInputValues())
    });
  }

  close() {
    this._form.reset();
    super.close();
  }

  renderLoading(isLoading, buttonText='Сохранить') {
    this._btnSubmit = this._form.querySelector('.popup__button');
    if (isLoading) {
      return (this._btnSubmit.textContent = buttonText);
    }
    return (this._btnSubmit.textContent = buttonText);
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }
}