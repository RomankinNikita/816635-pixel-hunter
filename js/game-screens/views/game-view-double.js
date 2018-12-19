import AbstractView from '../../abstract-view.js';
import getGameTemplate, {setAnswerForTime} from './get-game-template.js';
import {
  Settings,
  AnswerValue,
} from '../../data/data.js';
import {
  getDebugState,
  DEBUG_STYLE
} from '../../data/settings.js';

const ANSWER_NUMBER = 2;

export default class GameScreenView extends AbstractView {
  constructor(state, data) {
    super();
    this.state = state;
    this.data = data;
    this.time = this.state.time;
  }

  get template() {
    return getGameTemplate(this.state, this.data);
  }

  getRightAnswer(i) {
    return this.data[this.state.question].answers[i].answer;
  }

  activateDebugMode() {
    if (getDebugState()) {
      const gameOptions = this.element.querySelectorAll(`.game__option`);
      gameOptions.forEach((option, i) => {
        option.querySelector(`input[value=${this.getRightAnswer(i)}]`).parentElement.querySelector(`span`).style = DEBUG_STYLE;
      });
    }
  }

  bind() {
    const backBtn = this.element.querySelector(`button.back`);
    backBtn.addEventListener(`click`, this.onBackClick);

    const gameContentForm = this.element.querySelector(`.game__content`);
    gameContentForm.addEventListener(`click`, (evt) => {
      const target = evt.target;
      if (target.type === `radio`) {
        const checkedInputs = gameContentForm.querySelectorAll(`input[type=radio]:checked`);
        if (checkedInputs.length === ANSWER_NUMBER) {
          let answer = ([...checkedInputs].every((it, i) => it.value === this.getRightAnswer(i))) ? AnswerValue.CORRECT : AnswerValue.WRONG;
          answer = setAnswerForTime(this.time, answer);
          this.onAnswer(answer);
        }
      }
    });
  }

  onTick() {
    const timeIndicator = this.element.querySelector(`.game__timer`);
    if (this.time <= Settings.BLINK_TIME) {
      timeIndicator.classList.add(`game__timer-blink`);
    }
    timeIndicator.textContent = this.time;
  }

  onAnswer() {

  }

  onBackClick() {

  }
}
