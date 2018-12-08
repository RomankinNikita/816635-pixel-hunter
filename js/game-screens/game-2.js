import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import GameScreenView from './game-view-single.js';

const getSecondGameType = (state) => {
  const secondGameType = new GameScreenView(state);

  secondGameType.onBackClick = () => {
    changeScreen(greeting());
  };

  return secondGameType;
};

export default getSecondGameType;
