import {
  initialState
} from '../data/data.js';
import RulesView from './rules-view.js';
import ModalConfirm from '../modal/modal-confirm/modal-confirm.js';
import {
  showModal
} from '../util.js';
import Application from '../application.js';
import {gameData} from '../loader.js';

class RulesScreen {
  constructor() {
    this.view = new RulesView();
    this.view.onBackClick = () => {
      showModal(new ModalConfirm());
    };
    this.view.onSubmit = (sbmtEvt) => {
      sbmtEvt.preventDefault();
      const name = this.view.name;
      Application.showGame(initialState, gameData, name);
    };
  }
}

export default RulesScreen;
