import {
  getNextState
} from '../data/game.js';
import {
  Settings,
  AnswerValue
} from '../data/data.js';
import Application from '../application.js';

class GameModel {
  constructor(state) {
    this._state = state;
    this.timer = null;
  }

  nextState(answer) {
    const nextState = getNextState(this._state, answer);
    return Object.freeze(nextState);
  }

  nextScreen(answer) {
    const state = this.nextState(answer);
    if (state.question <= Settings.NUMBER_OF_GAME_LEVELS && state.lives >= Settings.MIN_LIVES) {
      Application.showGame(state);
    } else {
      Application.showStats(this.nextState(answer));
    }
  }

  startTimer(view) {
    const start = () => {
      console.log(this._state.question);

      view.onTick();
      view.time -= 1;
      if (view.time < 0) {
        clearTimeout(this.timer);
        const answer = AnswerValue.WRONG;
        view.onAnswer(answer);
      } else {
        this.timer = setTimeout(() => start(), 1000);
      }
    };
    start();
  }
}

export default GameModel;
