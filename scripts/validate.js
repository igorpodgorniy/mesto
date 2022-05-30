// const showInputError = (inputElement, errorMessage, errorElement, inputErrorClass, errorClass) => {
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(errorClass);
// };

// const hideInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (inputElement, errorElement, inputErrorClass, errorClass) => {
//   if (!inputElement.validity.valid) {
//     showInputError(inputElement, inputElement.validationMessage, errorElement, inputErrorClass, errorClass);
//   } else {
//     hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
//   }
// };

// const setEventListeners = (inputElement, buttonElement, inputList, errorElement, inputErrorClass, errorClass) => {
//   inputElement.addEventListener('input', function () {
//     checkInputValidity(inputElement, errorElement, inputErrorClass, errorClass);
//     toggleButtonState(buttonElement, inputList);
//   });
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some(inputElement => !inputElement.validity.valid)
// };

// const toggleButtonState = (buttonElement, inputList) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.disabled = false;
//   }
// }

// const enableValidation = (objProps) => {
//   const formList = Array.from(document.querySelectorAll(objProps.formSelector));
//   formList.forEach((formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll(objProps.inputSelector));
//     const buttonElement = formElement.querySelector(objProps.submitButtonSelector);
//     const inputErrorClass = objProps.inputErrorClass;
//     const errorClass = objProps.errorClass;
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//       toggleButtonState(buttonElement, inputList);
//     });
//     inputList.forEach(inputElement => {
//       const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//       setEventListeners(inputElement, buttonElement, inputList, errorElement, inputErrorClass, errorClass);
//     })
//   });
// };

// enableValidation({
//   formSelector: '.popup__container',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error'
// });