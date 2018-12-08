import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import GameScreenView from './game-view-double.js';

const getFirstGameType = (state) => {
  const firstGameType = new GameScreenView(state);

  firstGameType.onBackClick = () => {
    changeScreen(greeting());
  };

  return firstGameType;
};

export default getFirstGameType;
