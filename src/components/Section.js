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

  addItem(item, isFirst = false) {
    isFirst
      ? this._container.prepend(item)
      : this._container.append(item);
  }
}