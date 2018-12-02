import {
  changeScreen,
  renderTemplate,
} from './util.js';
import greetingScreen from './greeting.js';
import header from './header.js';
import answerIndicator from './answer-indicator';
import {
  testGame
} from './data/data.js';
import {
  getNextScreen,
  checkThirdGameTypeAnswer
} from './screen.js';
import {getNextState} from './data/game.js';

const getThirdGameType = (state) => {
  const template = `${header(state)}
  <section class="game">
  <p class="game__task">Найдите единственный рисунок или фото среди изображений</p>
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
    item.addEventListener(`click`, (evt) => {
      let answer;
      let nextState;
      const currentIndex = checkThirdGameTypeAnswer(state);

      if (evt.target.src === testGame[state.question].answers[currentIndex].content) {
        answer = `correct`;
        nextState = getNextState(state, answer);
      } else {
        answer = `wrong`;
        nextState = getNextState(state, answer);
      }
      getNextScreen(nextState);
    });
  });
  return element;
};

export default getThirdGameType;
