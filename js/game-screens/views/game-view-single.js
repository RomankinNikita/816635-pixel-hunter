import AbstractView from '../../abstract-view.js';
import getGameTemplate, {setAnswerForTime} from './get-game-template.js';
import {
  Settings,
  AnswerValue,
} from '../../data/data.js';
import {getDebugState, DEBUG_STYLE} from '../../data/settings.js';

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

  getRightAnswer() {
    return this.data[this.state.question].answers[0].answer;
  }

  activateDebugMode() {
    if (getDebugState()) {
      const gameOption = this.element.querySelector(`.game__option`);
      gameOption.querySelector(`input[value=${this.getRightAnswer()}]`).parentElement.querySelector(`span`).style = DEBUG_STYLE;
    }
  }

  bind() {
    const backBtn = this.element.querySelector(`button.back`);
    backBtn.addEventListener(`click`, this.onBackClick);

    const gameContentForm = this.element.querySelector(`.game__content`);
    gameContentForm.addEventListener(`click`, (evt) => {
      const target = evt.target;
      if (target.type === `radio`) {
        let answer = (target.value === this.getRightAnswer()) ? AnswerValue.CORRECT : AnswerValue.WRONG;
        answer = setAnswerForTime(this.time, answer);
        this.onAnswer(answer);
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
