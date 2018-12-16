import AbstractView from '../abstract-view.js';

export default class IntroView extends AbstractView {
  get template() {
    return `<section class="crossfade crossfade-no-opacity">
    <div class="greeting central--blur">
    <img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
    <div class="greeting__asterisk asterisk"><span class="visually-hidden">Я просто красивая звёздочка</span>*</div>
    <div class="greeting__challenge">
      <h3 class="greeting__challenge-title">Лучшие художники-фотореалисты бросают тебе вызов!</h3>
      <p class="greeting__challenge-text">Правила игры просты:</p>
      <ul class="greeting__challenge-list">
        <li>Нужно отличить рисунок от фотографии и сделать выбор.</li>
        <li>Задача кажется тривиальной, но не думай, что все так просто.</li>
        <li>Фотореализм обманчив и коварен.</li>
        <li>Помни, главное — смотреть очень внимательно.</li>
      </ul>
    </div>
    <button class="greeting__continue" type="button">
      <span class="visually-hidden">Продолжить</span>
      <svg class="icon" width="64" height="64" viewBox="0 0 64 64" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-right"></use>
      </svg>
    </button>
    </div>
    </section>

    <section class="crossfade">
    <div class="intro">
    <button class="intro__asterisk asterisk loading__spin" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    </section>`;
  }

  crossfade() {
    const sectionCrossfades = this.element.querySelectorAll(`.crossfade`);
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
}
