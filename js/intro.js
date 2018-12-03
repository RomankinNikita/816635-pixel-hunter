import {changeScreen, renderTemplate} from './util.js';
import greetingScreen from './greeting.js';

const template = `<section class="intro">
<button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`;

const element = renderTemplate(template);

const starButton = element.querySelector(`.intro__asterisk`);

starButton.addEventListener(`click`, () => {
  changeScreen(greetingScreen);
});

export default element;
