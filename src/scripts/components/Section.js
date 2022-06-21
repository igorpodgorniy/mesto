export class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this.renderer = renderer;
    this._container = document.querySelector(selector);
  }

  rendererAll() {
    this._items.forEach(item => {
      this.renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}