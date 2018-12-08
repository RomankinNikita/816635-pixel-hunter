import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import GameScreenView from './game-view-double.js';
import {
  AnswerValue,
  testGame
} from '../data/data.js';
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

  firstGameType.onClick = (evt) => {
    const gameContentForm = firstGameType.element.querySelector(`.game__content`);
    const target = evt.target;
    if (target.type === `radio`) {
      const checkedInputs = gameContentForm.querySelectorAll(`input[type=radio]:checked`);
      if (checkedInputs.length === 2) {
        const answer = ([...checkedInputs].every((it, i) => it.value === testGame[firstGameType.state.question].answers[i].answer)) ? `${AnswerValue.CORRECT}` : `${AnswerValue.WRONG}`;
        const nextState = getNextState(firstGameType.state, answer);
        getNextScreen(nextState);
      }
    }

  };

  return firstGameType;
};

export default getFirstGameType;
