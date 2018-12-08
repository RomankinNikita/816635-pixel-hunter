import AbstractView from '../abstract-view.js';
import getGameTemplate from './get-game-template.js';
import {
  AnswerValue,
  testGame
} from '../data/data.js';

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
    gameContentForm.addEventListener(`click`, (evt) => {
      const target = evt.target;
      if (target.type === `radio`) {
        const answer = (target.value === testGame[this.state.question].answers[0].answer) ? `${AnswerValue.CORRECT}` : `${AnswerValue.WRONG}`;
        this.onAnswer(answer);
      }
    });
  }

  onAnswer() {

  }

  onBackClick() {

  }
}
