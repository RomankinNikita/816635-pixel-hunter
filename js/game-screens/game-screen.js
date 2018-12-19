import {
  getViewType
} from './views/get-game-template.js';
import ModalConfirm from '../modal/modal-confirm/modal-confirm.js';
import {
  showModal
} from '../util.js';

class GameScreen {
  constructor(model) {
    this.model = model;
    this.view = null;
  }

  startGame() {
    const View = getViewType(this.model._state, this.model.data);

    this.view = new View(this.model._state, this.model.data);
    this.view.activateDebugMode();

    this.view.onBackClick = () => {
      showModal(new ModalConfirm(this.model));
    };

    this.view.onAnswer = (answer) => {
      this.model.stopTimer();
      this.model.nextScreen(answer);
    };

    this.model.startTimer(this.view);
  }
}

export default GameScreen;
