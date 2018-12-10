import StatsView from './stats-view.js';
import modalConfirm from '../modal/modal-confirm/modal-confirm.js';
import {showModal} from '../util.js';

const getStatsScreen = (state) => {
  const stats = new StatsView(state);

  stats.onBackClick = () => {
    showModal(modalConfirm());
  };

  return stats;
};

export default getStatsScreen;
