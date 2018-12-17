import ModalErrorView from './modal-error-view.js';

export default class ModalError {
  constructor(error) {
    this.view = new ModalErrorView(error);
  }
}
