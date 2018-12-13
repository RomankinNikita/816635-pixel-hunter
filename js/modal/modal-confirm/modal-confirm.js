import ModalConfirmView from './modal-confirm-view.js';
import Application from '../../application.js';

class ModalConfirm {
  constructor(model = null) {
    this.view = new ModalConfirmView();
    this.model = model;
    this.view.onBack = () => {
      if (this.model) {
        this.model.stopTimer();
      }
      Application.showGreeting();
    };
  }
}

export default ModalConfirm;
