import ModalConfirmView from './modal-confirm-view.js';
import Application from '../../application.js';

class ModalConfirm {
  constructor() {
    this.view = new ModalConfirmView();
    this.view.onBack = () => {
      Application.showGreeting();
    };
  }
}

export default ModalConfirm;
