(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var n,r;return n=t,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"likePost",value:function(e,t){var n=t?"PUT":"DELETE";return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:n,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=t,this._container=document.querySelector(n)}var t,r;return t=e,r=[{key:"rendererAll",value:function(e){var t=this;e.forEach((function(e){t.renderer(e)}))}},{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this._container.prepend(e):this._container.append(e)}}],r&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),i(this,"_handlePopupClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._popup.addEventListener("mousedown",this._handlePopupClose),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._popup.removeEventListener("mousedown",this._handlePopupClose),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._buttonClose.addEventListener("click",(function(){e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._photo=t._popup.querySelector(".popup__image"),t._title=t._popup.querySelector(".popup__title-image"),t}return t=c,(n=[{key:"open",value:function(e,t){this._photo.src=t,this._photo.alt=e,this._title.textContent=e,l(h(c.prototype),"open",this).call(this)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(c);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e)).form=n._popup.querySelector("form"),n._callbackSubmit=t,n._inputList=n.form.querySelectorAll(".popup__input"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;_(k(c.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(){e._callbackSubmit(e._getInputValues())}))}},{key:"close",value:function(){this.form.reset(),_(k(c.prototype),"close",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(c);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function C(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._btnConfirm=n._popup.querySelector(".popup__button"),n._callbackSubmit=t,n}return t=c,(n=[{key:"open",value:function(e){P(L(c.prototype),"open",this).call(this),this._element=e}},{key:"setEventListeners",value:function(){var e=this;P(L(c.prototype),"setEventListeners",this).call(this),this._btnConfirm.addEventListener("click",(function(){e._callbackSubmit(e._element)}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(c);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.selectorNameUser,r=t.selectorAboutUser,o=t.selectorAvatarUser;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=document.querySelector(n),this._aboutUser=document.querySelector(r),this._avatarUser=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,about:this._aboutUser.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e._id;this._nameUser.textContent=t,this._aboutUser.textContent=n,this.id=r}},{key:"setUserAvatar",value:function(e){this._avatarUser.src=e}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=document.querySelector(t.formSelector),this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector),this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){var n=e._formElement.querySelector(".".concat(t.id,"-error"));e._setEventListeners(t,n)}))}},{key:"_setEventListeners",value:function(e,t){var n=this;e.addEventListener("input",(function(){n._checkInputValidity(e,t),n.toggleButtonState()}))}},{key:"_showInputError",value:function(e,t,n){e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,e.validationMessage,t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.disabled=!0:this._buttonElement.disabled=!1}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n,r,o,i,c,u,a,l,s){var f,p,h=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p=function(){h._image.addEventListener("click",(function(){h._handleCardClick(h._name,h._link)})),h._heartBtn.addEventListener("click",(function(){return h._handleLikeCard(h)})),h._btnDel.addEventListener("click",(function(){h._handleDeleteCardClick()}))},(f="_setEventListeners")in this?Object.defineProperty(this,f,{value:p,enumerable:!0,configurable:!0,writable:!0}):this[f]=p,this._templateSelector=u,this._name=t,this._link=n,this._id=r,this._likesArr=o,this._owner=i,this._ownerPage=c,this._elementItem=null,this.isLiked=!1,this._handleCardClick=a,this._handleDeleteCardClick=l,this._handleLikeCard=s}var t,n;return t=e,(n=[{key:"createCard",value:function(){var e=this;return this._elementItem=document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0),this._btnDel=this._elementItem.querySelector(".card__delete"),this._image=this._elementItem.querySelector(".card__image"),this._likeCounter=this._elementItem.querySelector(".card__like-counter"),this._heartBtn=this._elementItem.querySelector(".card__heart"),this._image.src=this._link,this._image.alt=this._name,this._likesArr?this._likeCounter.textContent=this._likesArr.length:this._likeCounter.textContent,this._elementItem.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this._owner._id!==this._ownerPage&&this._btnDel.remove(),this._likesArr.filter((function(t){return t._id===e._ownerPage})).length>0&&(this._toggleLike(),this.isLiked=!0),this._elementItem}},{key:"deleteCard",value:function(){this._elementItem.remove(),this._elementItem=null}},{key:"setLike",value:function(e){this._likeCounter.textContent=e.length,this._likesArr=e,this._toggleLike()}},{key:"_toggleLike",value:function(){this._heartBtn.classList.toggle("card__heart_active"),this.isLiked=!this.isLiked}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D={inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error"},B=document.querySelector(".profile__edit-button"),V=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__avatar"),J=(document.querySelectorAll(".popup__close"),document.querySelector("#popupEditProfile"),document.querySelector("#popupAddPhoto"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector("#name-profile-input")),G=document.querySelector("#desc-profile-input"),H=(document.querySelector("#name-photo-input"),document.querySelector("#link-photo-input"),document.querySelector(".elements__items"),document.querySelector("#popupViewPhoto")),M=(H.querySelector(".popup__image"),H.querySelector(".popup__title-image"),".popup__button");function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"93f303b5-489a-4f9c-a73d-101d47521fd1","Content-Type":"application/json"}}),W=new y("#popupViewPhoto");function X(e){var t=new x(e.name,e.link,e._id,e.likes,e.owner,ee.id,"#element",(function(e,t){W.setEventListeners(),W.open(e,t)}),(function(){oe.open(t)}),(function(){Q.likePost(t._id,!t.isLiked).then((function(e){t.setLike(e.likes)})).catch((function(e){return console.log(e.status)}))}));return t.createCard()}function Y(e,t,n,r){return e.querySelector(t).textContent=r}var Z=new r((function(e){var t=X(e);Z.addItem(t)}),".elements__items"),ee=new I({selectorNameUser:".profile__title",selectorAboutUser:".profile__subtitle",selectorAvatarUser:".profile__avatar"}),te=new w("#popupEditProfile",(function(e){var t=e.name,n=e.about;Y(te.form,M,0,"Сохранение..."),Q.editProfile({name:t,about:n}).then((function(e){var t=e.name,n=e.about;ee.setUserInfo({name:t,about:n}),te.close()})).catch((function(e){console.log(e)})).finally((function(){Y(te.form,M,0,"Сохранить")}))}));te.setEventListeners();var ne=new w("#popupEditAvatar",(function(e){var t=e.link;Y(ne.form,M,0,"Сохранение..."),Q.changeAvatar(t).then((function(e){ee.setUserAvatar(e.avatar),ne.close()})).catch((function(e){console.log(e)})).finally((function(){Y(ne.form,M,0,"Сохранить")}))}));ne.setEventListeners();var re=new w("#popupAddPhoto",(function(e){var t=e.name,n=e.link;Y(re.form,M,0,"Создание..."),Q.addCard({name:t,link:n}).then((function(e){var t=X(e);Z.addItem(t,!0),re.close(),ie.toggleButtonState()})).catch((function(e){console.log(e)})).finally((function(){Y(re.form,M,0,"Создать")}))}));re.setEventListeners();var oe=new q("#popupDeletePhoto",(function(e){Q.deleteCard(e._id).then((function(){return e.deleteCard()})).then((function(){oe.close()})).catch((function(e){console.log(e)}))}));oe.setEventListeners(),V.addEventListener("click",(function(){re.open()})),B.addEventListener("click",(function(){var e=ee.getUserInfo();J.value=e.name,G.value=e.about,te.open()})),N.addEventListener("click",(function(){ne.open()})),Promise.all([Q.getCards(),Q.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],c=i.name,u=i.about,a=i.avatar,l=i._id;ee.setUserInfo({name:c,about:u,_id:l}),ee.setUserAvatar(a),Z.rendererAll(o)})).catch((function(e){console.log(e)}));var ie=new R($({formSelector:"#formAddPhoto"},D)),ce=new R($({formSelector:"#formEditProfile"},D)),ue=new R($({formSelector:"#formEditAvatar"},D));ie.enableValidation(),ce.enableValidation(),ue.enableValidation()})();
//# sourceMappingURL=main.js.map