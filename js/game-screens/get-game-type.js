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
import {showModal} from '../util.js';

const startTimer = (game) => {
  let timer;
  game.onTick();
  game.time -= 1;
  if (game.time < 0) {
    clearTimeout(timer);
    const answer = AnswerValue.WRONG;
    game.onAnswer(answer);
  } else {
    timer = setTimeout(() => startTimer(game), 1000);
  }
};

const getGameType = (state, GameView) => {
  const gameType = new GameView(state);

  gameType.onBackClick = () => {
    showModal(modalConfirm());
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
