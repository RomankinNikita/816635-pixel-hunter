import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import GameScreenView from './game-view-single.js';
import {
  getNextScreen
} from './screen.js';
import {
  getNextState
} from '../data/game.js';

const getSecondGameType = (state) => {
  const secondGameType = new GameScreenView(state);

  secondGameType.onBackClick = () => {
    changeScreen(greeting());
  };

  secondGameType.onAnswer = (answer) => {
    const nextState = getNextState(secondGameType.state, answer);
    getNextScreen(nextState);
  };

  return secondGameType;
};

export default getSecondGameType;
