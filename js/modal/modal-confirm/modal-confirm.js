import ModalConfirmView from './modal-confirm-view.js';
import Application from '../../application.js';
import {clearAllTimers} from '../../data/game.js';

class ModalConfirm {
  constructor() {
    this.view = new ModalConfirmView();
    this.view.onBack = () => {
      clearAllTimers();
      Application.showGreeting();
    };
  }
}

export default ModalConfirm;
