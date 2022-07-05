export class UserInfo {
  constructor({selectorNameUser, selectorAboutUser, selectorAvatarUser}) {
    this._nameUser = document.querySelector(selectorNameUser);
    this._aboutUser = document.querySelector(selectorAboutUser);
    this._avatarUser = document.querySelector(selectorAvatarUser);
  }

  getUserInfo() {
    const name = this._nameUser.textContent;
    const about = this._aboutUser.textContent;
    return { name, about };
  }

  setUserInfo({name, about, _id}) {
    this._nameUser.textContent = name;
    this._aboutUser.textContent = about;
    this.id = _id;
  }

  setUserAvatar(avatar) {
    this._avatarUser.src = avatar;
  }
}