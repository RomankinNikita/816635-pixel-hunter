import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import GameScreenView from './game-view-double.js';
import {
  getNextScreen
} from './screen.js';
import {
  getNextState
} from '../data/game.js';

const getFirstGameType = (state) => {
  const firstGameType = new GameScreenView(state);

  firstGameType.onBackClick = () => {
    changeScreen(greeting());
  };

  firstGameType.onAnswer = (answer) => {
    const nextState = getNextState(firstGameType.state, answer);
    getNextScreen(nextState);
  };

  return firstGameType;
};

export default getFirstGameType;
