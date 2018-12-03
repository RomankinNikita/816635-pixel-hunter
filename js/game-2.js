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

const getSecondGameType = (state) => {
  const template = getGameTemplate(state);

  const element = renderTemplate(template);

  // back to greetingScreen:
  const backBtn = element.querySelector(`button.back`);
  backBtn.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  const gameContentForm = element.querySelector(`.game__content`);
  gameContentForm.addEventListener(`change`, () => {
    const checkedInput = gameContentForm.querySelector(`input[type=radio]:checked`);
    const answer = (checkedInput.value === testGame[state.question].answers[0].answer) ? `${AnswerValue.CORRECT}` : `${AnswerValue.WRONG}`;
    const nextState = getNextState(state, answer);
    getNextScreen(nextState);
  });
  return element;
};

export default getSecondGameType;
