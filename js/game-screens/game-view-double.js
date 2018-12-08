import AbstractView from '../abstract-view.js';
import getGameTemplate from './get-game-template.js';

export default class GameScreenView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return getGameTemplate(this.state);
  }

  bind() {
    const backBtn = this.element.querySelector(`button.back`);
    backBtn.addEventListener(`click`, this.onBackClick);

    const gameContentForm = this.element.querySelector(`.game__content`);
    gameContentForm.addEventListener(`click`, this.onClick);
  }

  onBackClick() {

  }

  onClick() {

  }
}
