export class FormValidator {
  constructor(objProps) {
    this._formElement = document.querySelector(objProps.formSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(objProps.inputSelector));
    this._buttonElement = this._formElement.querySelector(objProps.submitButtonSelector);
    this._inputErrorClass = objProps.inputErrorClass;
    this._errorClass = objProps.errorClass;
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputList.forEach(inputElement => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      this._setEventListeners(inputElement, errorElement);
    })
  }

  _setEventListeners(inputElement, errorElement) {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement, errorElement);
      this.toggleButtonState();
    });
  };

  _showInputError(inputElement, errorMessage, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement, errorElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, errorElement);
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  }
}