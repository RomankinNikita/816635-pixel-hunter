import StatsView from './stats-view.js';
import ModalConfirm from '../modal/modal-confirm/modal-confirm.js';
import {
  showModal
} from '../util.js';

class StatsScreen {
  constructor(state) {
    this.view = new StatsView(state);
    this.view.onBackClick = () => {
      showModal(new ModalConfirm());
    };
  }
}

export default StatsScreen;
