import {
  changeScreen,
  renderTemplate
} from './util.js';
import gameTwoScreen from './game-2.js';
import greetingScreen from './greeting.js';
import header from './header.js';
import stats from './stats.js';
import {initialState} from './data/data.js';

const template = `${header(initialState)}
<section class="game">
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
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
    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
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
${stats(initialState)}
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
    changeScreen(gameTwoScreen);
  }
});

export default element;
