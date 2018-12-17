import StatsView from './stats-view.js';
import ModalConfirm from '../modal/modal-confirm/modal-confirm.js';
import {
  showModal
} from '../util.js';

class StatsScreen {
  constructor(data) {
    this.view = new StatsView(data);
    this.view.onBackClick = () => {
      showModal(new ModalConfirm());
    };
  }
}

export default StatsScreen;
