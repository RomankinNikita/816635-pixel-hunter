import {
  getViewType
} from './screen.js';
import ModalConfirm from '../modal/modal-confirm/modal-confirm.js';
import {
  showModal
} from '../util.js';

class GameScreen {
  constructor(model) {
    this.model = model;
    this.view = null;
  }

  startTimer(view) {
    this.model.startTimer(view);
  }

  stopTimer() {
    clearTimeout(this.model.timer);
  }

  startGame() {
    const View = getViewType(this.model._state);
    this.view = new View(this.model._state);

    this.view.onBackClick = () => {
      showModal(new ModalConfirm());
    };

    this.view.onAnswer = (answer) => {
      this.stopTimer();
      this.model.nextScreen(answer);
    };

    this.startTimer(this.view);
  }
}

export default GameScreen;
