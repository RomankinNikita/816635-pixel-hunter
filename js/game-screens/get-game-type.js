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

const startTimer = (game) => {
  game.onTick();
  game.time -= 1;
  if (game.time < 0) {
    clearTimeout(game.timer);
    const answer = AnswerValue.WRONG;
    game.onAnswer(answer);
  } else {
    game.timer = setTimeout(startTimer, 1000);
  }
};

const getGameType = (state, GameView) => {
  const gameType = new GameView(state);

  gameType.onBackClick = () => {
    mainElement.appendChild(modalConfirm().element);
  };

  gameType.onAnswer = (answer) => {
    clearTimeout(gameType.timer);
    const nextState = getNextState(gameType.state, answer);
    getNextScreen(nextState);
  };

  startTimer(gameType);

  return gameType;
};

export default getGameType;
