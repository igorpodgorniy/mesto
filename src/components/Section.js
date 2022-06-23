export class Section {
  constructor(renderer, selector) {
    this.renderer = renderer;
    this._container = document.querySelector(selector);
  }

  rendererAll(items) {
    items.forEach(item => {
      this.renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}