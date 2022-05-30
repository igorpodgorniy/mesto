export class FormValidator {
  constructor(objProps) {
    this.formElement = document.querySelector(objProps.formSelector);
    this.inputList = Array.from(this.formElement.querySelectorAll(objProps.inputSelector));
    this.buttonElement = this.formElement.querySelector(objProps.submitButtonSelector);
    this.inputErrorClass = objProps.inputErrorClass;
    this.errorClass = objProps.errorClass;
  }

  enableValidation() {
    this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.toggleButtonState();
    });
    this.inputList.forEach(inputElement => {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      this.setEventListeners(inputElement, errorElement);
    })
  }

  setEventListeners(inputElement, errorElement) {
    inputElement.addEventListener('input', () => {
      this.checkInputValidity(inputElement, errorElement);
      this.toggleButtonState();
    });
  };

  showInputError(inputElement, errorMessage, errorElement) {
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
  }

  hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorClass);
    errorElement.textContent = '';
  }

  checkInputValidity(inputElement, errorElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage, errorElement);
    } else {
      this.hideInputError(inputElement, errorElement);
    }
  }

  hasInvalidInput() {
    return this.inputList.some(inputElement => !inputElement.validity.valid);
  }

  toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.disabled = false;
    }
  }
}