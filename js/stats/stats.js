import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import StatsView from './stats-view.js';

const getStatsScreen = (state) => {
  const stats = new StatsView(state);

  stats.onBackClick = () => {
    changeScreen(greeting());
  };

  return stats;
};

export default getStatsScreen;
