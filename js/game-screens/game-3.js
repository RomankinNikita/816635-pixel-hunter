import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import GameScreenView from './game-view-triple.js';

const getThirdGameType = (state) => {
  const thirdGameType = new GameScreenView(state);

  thirdGameType.onBackClick = () => {
    changeScreen(greeting());
  };

  return thirdGameType;
};

export default getThirdGameType;
