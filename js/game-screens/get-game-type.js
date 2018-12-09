import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import {
  getNextScreen
} from './screen.js';
import {
  getNextState
} from '../data/game.js';

const getGameType = (state, GameView) => {
  const gameType = new GameView(state);

  gameType.setTimer();

  gameType.onBackClick = () => {
    changeScreen(greeting());
  };

  gameType.onAnswer = (answer) => {
    const nextState = getNextState(gameType.state, answer);
    getNextScreen(nextState);
  };

  return gameType;
};

export default getGameType;
