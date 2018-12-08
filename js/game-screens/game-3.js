import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import GameScreenView from './game-view-triple.js';
import {
  getNextScreen
} from './screen.js';
import {
  getNextState
} from '../data/game.js';

const getThirdGameType = (state) => {
  const thirdGameType = new GameScreenView(state);

  thirdGameType.onBackClick = () => {
    changeScreen(greeting());
  };

  thirdGameType.onAnswer = (answer) => {
    const nextState = getNextState(thirdGameType.state, answer);
    getNextScreen(nextState);
  };

  return thirdGameType;
};

export default getThirdGameType;
