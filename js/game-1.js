import {
  changeScreen,
  renderTemplate,
  getNextScreen
} from './util.js';
import greetingScreen from './greeting.js';
import header from './header.js';
import answerIndicator from './answer-indicator';
import {testGame} from './data/data.js';

const getFirstGameType = (state) => {
  const template = `${header(state)}
<section class="game">
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  <div class="game__option">
    <img src="${testGame[state.question].answers[0].content}" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="${testGame[state.question].answers[1].content}" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input class="visually-hidden" name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input class="visually-hidden" name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
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

  const gameContentForm = element.querySelector(`.game__content`);
  gameContentForm.addEventListener(`change`, () => {
    if (gameContentForm.querySelectorAll(`input[type=radio]:checked`).length === 2) {
      // // const nextState = getNextState(state, answer);
      const nextState = Object.assign({}, state, {question: `2`});
      getNextScreen(nextState);
    }
  });
  return element;
};

export default getFirstGameType;
