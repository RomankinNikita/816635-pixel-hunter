import {
  renderTemplate
} from './util.js';

export default class AbstractView {
  get template() {
    throw new Error(`Template is not defined`);
  }

  render() {
    return renderTemplate(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
