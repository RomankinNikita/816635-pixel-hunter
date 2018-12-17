import AbstractView from '../abstract-view.js';

export default class IntroView extends AbstractView {
  get template() {
    return `<section class="crossfade">
    <div class="intro">
    <button class="intro__asterisk asterisk loading__spin" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    </section>`;
  }

  crossfade() {
    const mainElement = document.querySelector(`#main`);
    const sectionCrossfades = mainElement.querySelectorAll(`.crossfade`);
    sectionCrossfades.forEach((it) => {
      it.classList.toggle(`crossfade-no-opacity`);
    });
  }

  bind() {
    const startButton = this.element.querySelector(`.intro__asterisk`);
    startButton.addEventListener(`click`, this.onClick);
  }

  onClick() {

  }

  show(elem) {
    elem.view.onClick = null;
    const mainElement = document.querySelector(`#main`);
    mainElement.appendChild(elem.view.element);
    this.hide(elem);
  }

  hide(it) {
    it.view.element.querySelector(`.crossfade`).classList.add(`crossfade-no-opacity`);
  }
}
