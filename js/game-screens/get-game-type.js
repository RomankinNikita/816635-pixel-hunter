import {
  getNextScreen
} from './screen.js';
import {
  getNextState
} from '../data/game.js';
import {
  AnswerValue
} from '../data/data.js';
import modalConfirm from '../modal/modal-confirm/modal-confirm.js';

const mainElement = document.querySelector(`#main`);

const getGameType = (state, GameView) => {
  const gameType = new GameView(state);

  gameType.setTimer = () => {
    const startTimer = () => {
      gameType.onTick();
      gameType.time -= 1;
      if (gameType.time < 0) {
        clearTimeout(gameType.timer);
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
    console.log(1);

    mainElement.appendChild(modalConfirm().element);
  };

  gameType.onAnswer = (answer) => {
    clearTimeout(gameType.timer);
    const nextState = getNextState(gameType.state, answer);
    getNextScreen(nextState);
  };

  return gameType;
};

export default getGameType;
