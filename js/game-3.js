import {changeScreen, renderTemplate} from './util.js';
import statsScreen from './stats.js';
import greetingScreen from './greeting.js';
import header from './header.js';

const template = `${header}
<section class="game">
<p class="game__task">Найдите рисунок среди изображений</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
    <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
  </div>
</form>
<ul class="stats">
  <li class="stats__result stats__result--wrong"></li>
  <li class="stats__result stats__result--slow"></li>
  <li class="stats__result stats__result--fast"></li>
  <li class="stats__result stats__result--correct"></li>
  <li class="stats__result stats__result--wrong"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--slow"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--fast"></li>
  <li class="stats__result stats__result--unknown"></li>
</ul>
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
    changeScreen(statsScreen);
  });
});

export default element;
