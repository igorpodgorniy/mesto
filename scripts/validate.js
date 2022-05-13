const showInputError = (formElement, inputElement, errorMessage, objProps) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objProps.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objProps.errorClass);
};

const hideInputError = (formElement, inputElement, objProps) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objProps.inputErrorClass);
  errorElement.classList.remove(objProps.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, objProps) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, objProps);
  } else {
    hideInputError(formElement, inputElement, objProps);
  }
};

const setEventListeners = (inputElement, objProps) => {
  const formElement = inputElement.closest(objProps.formSelector);
  const buttonElement = formElement.querySelector(objProps.submitButtonSelector);
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement, objProps);
    toggleButtonState(formElement, buttonElement, objProps);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid)
};

const toggleButtonState = (formElement, buttonElement, objProps) => {
  const inputList = Array.from(formElement.querySelectorAll(objProps.inputSelector));
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(objProps.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(objProps.inactiveButtonClass);
  }
}

const enableValidation = (objProps) => {
  const formList = Array.from(document.querySelectorAll(objProps.formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(objProps.inputSelector));
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      if(evt.target.id === 'formEditProfile' && !hasInvalidInput(inputList)) {
        submitFormHandler(evt);
      } else if (evt.target.id === 'formAddPhoto' && !hasInvalidInput(inputList)) {
        addFormSubmitHandler(evt);
      }
    });
    inputList.forEach(inputElement => {
      setEventListeners(inputElement, objProps);
    })
  });
};

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
});