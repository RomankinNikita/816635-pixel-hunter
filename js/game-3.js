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
  getNextScreen,
  checkThirdGameTypeAnswer
} from './screen.js';
import {
  getNextState
} from './data/game.js';
import getGameTemplate from './sectionGameTemplate.js';

const getThirdGameType = (state) => {
  const template = getGameTemplate(state);

  const element = renderTemplate(template);

  // back to greetingScreen:
  const backBtn = element.querySelector(`button.back`);
  backBtn.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  const gameOptions = element.querySelectorAll(`.game__option`);
  gameOptions.forEach((item) => {
    item.addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `IMG`) {
        let answer;
        let nextState;
        const currentIndex = checkThirdGameTypeAnswer(state);
        answer = (evt.target.src === testGame[state.question].answers[currentIndex].content) ? `${AnswerValue.CORRECT}` : `${AnswerValue.WRONG}`;
        nextState = getNextState(state, answer);
        getNextScreen(nextState);
      }
    });
  });
  return element;
};

export default getThirdGameType;
