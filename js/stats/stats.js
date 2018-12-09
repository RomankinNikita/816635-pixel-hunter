import StatsView from './stats-view.js';
import modalConfirm from '../modal/modal-confirm/modal-confirm.js';

const mainElement = document.querySelector(`#main`);

const getStatsScreen = (state) => {
  const stats = new StatsView(state);

  stats.onBackClick = () => {
    mainElement.appendChild(modalConfirm().element);
  };

  return stats;
};

export default getStatsScreen;
