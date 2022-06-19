export class UserInfo {
  constructor({selectorNameUser, selectorAboutUser}) {
    this._nameUser = document.querySelector(selectorNameUser).textContent;
    this._aboutUser = document.querySelector(selectorAboutUser).textContent;
  }

  getUserInfo() {
    const name = this._nameUser;
    const about = this._aboutUser;
    return { name, about };
  }

  setUserInfo(name, about) {
    this._nameUser = name;
    this._aboutUser = about;
  }
}