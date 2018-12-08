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
        const checkedInputs = gameContentForm.querySelectorAll(`input[type=radio]:checked`);
        if (checkedInputs.length === 2) {
          const answer = ([...checkedInputs].every((it, i) => it.value === testGame[this.state.question].answers[i].answer)) ? `${AnswerValue.CORRECT}` : `${AnswerValue.WRONG}`;
          this.onAnswer(answer);
        }
      }
    });
  }

  onAnswer() {

  }

  onBackClick() {

  }
}
