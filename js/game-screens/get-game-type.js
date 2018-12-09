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
import {
  Settings,
  AnswerValue
} from '../data/data.js';

const getGameType = (state, GameView) => {
  const gameType = new GameView(state);

  gameType.setTimer = () => {
    const timeIndicator = gameType.element.querySelector(`.game__timer`);
    const startTimer = () => {

      if (gameType.time <= Settings.BLINK_TIME) {
        timeIndicator.classList.add(`game__timer-blink`);
      }

      timeIndicator.textContent = gameType.time;
      gameType.time -= 1;
      if (gameType.time < 0) {
        gameType.resetTimer();
        const answer = AnswerValue.WRONG;
        gameType.onAnswer(answer);
      } else {
        gameType.timer = setTimeout(startTimer, 1000);
      }
    };
    startTimer();
  };

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
