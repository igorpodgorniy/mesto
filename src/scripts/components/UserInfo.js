export class UserInfo {
  constructor({selectorNameUser, selectorAboutUser}) {
    this._nameUser = document.querySelector(selectorNameUser);
    this._aboutUser = document.querySelector(selectorAboutUser);
  }

  getUserInfo() {
    const name = this._nameUser.textContent;
    const about = this._aboutUser.textContent;
    return { name, about };
  }

  setUserInfo({name, about}) {
    this._nameUser.textContent = name;
    this._aboutUser.textContent = about;
  }
}