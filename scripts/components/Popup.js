export class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handlePopupClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._popup.addEventListener('mousedown', this.setEventListeners)
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._popup.removeEventListener('mousedown', this.setEventListeners)
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners = () => {
    
  }
}