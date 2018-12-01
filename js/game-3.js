import {
  changeScreen,
  renderTemplate,
  getNextScreen
} from './util.js';
import greetingScreen from './greeting.js';
import header from './header.js';
import answerIndicator from './answer-indicator';
import {
  testGame
} from './data/data.js';

const getThirdGameType = (state) => {
  const template = `${header(state)}
  <section class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="${testGame[state.question].answers[0].content}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="${testGame[state.question].answers[1].content}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${testGame[state.question].answers[2].content}" alt="Option 3" width="304" height="455">
    </div>
  </form>
  ${answerIndicator(state)}
  </section>`;

  const element = renderTemplate(template);

  // back to greetingScreen:
  const backBtn = element.querySelector(`button.back`);

  backBtn.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  const gameOptions = element.querySelectorAll(`.game__option`);

  gameOptions.forEach((item) => {
    item.addEventListener(`click`, () => {
      // // const nextState = getNextState(state, answer);
      const nextState = Object.assign({}, state, {question: `1`});
      getNextScreen(nextState);
    });
  });
  return element;
};

export default getThirdGameType;
