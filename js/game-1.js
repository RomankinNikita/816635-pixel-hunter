import {
  changeScreen,
  renderTemplate,
} from './util.js';
import greetingScreen from './greeting.js';
import {
  AnswerValue,
  testGame
} from './data/data.js';
import {
  getNextScreen
} from './screen.js';
import {
  getNextState
} from './data/game.js';
import getGameTemplate from './sectionGameTemplate.js';

const getFirstGameType = (state) => {
  const template = getGameTemplate(state);

  const element = renderTemplate(template);

  // back to greetingScreen:
  const backBtn = element.querySelector(`button.back`);
  backBtn.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  const gameContentForm = element.querySelector(`.game__content`);
  gameContentForm.addEventListener(`change`, () => {
    const checkedInputs = gameContentForm.querySelectorAll(`input[type=radio]:checked`);
    if (checkedInputs.length === 2) {
      let answer;
      let nextState;
      answer = ([...checkedInputs].every((it, i) => it.value === testGame[state.question].answers[i].answer)) ? `${AnswerValue.CORRECT}` : `${AnswerValue.WRONG}`;
      nextState = getNextState(state, answer);
      getNextScreen(nextState);
    }
  });
  return element;
};

export default getFirstGameType;
