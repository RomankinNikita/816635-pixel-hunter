import AbstractView from '../abstract-view.js';

export default class IntroView extends AbstractView {
  get template() {
    return `<section class="intro">
    <button class="intro__asterisk asterisk loading__spin" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </section>`;
  }

  bind() {
    const startButton = this.element.querySelector(`.intro__asterisk`);
    startButton.addEventListener(`click`, this.onClick);
  }

  onClick() {

  }
}
