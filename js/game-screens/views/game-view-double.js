import AbstractView from '../../abstract-view.js';
import getGameTemplate from './get-game-template.js';
import {
  Settings,
  AnswerValue,
  gameData
} from '../../data/data.js';

export default class GameScreenView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.time = this.state.time;
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
          let answer = ([...checkedInputs].every((it, i) => it.value === gameData[this.state.question].answers[i].answer)) ? AnswerValue.CORRECT : AnswerValue.WRONG;
          if (answer === AnswerValue.CORRECT) {
            if (this.time > (Settings.TIME_FOR_QUESTION - Settings.FAST_ANSWER_TIME)) {
              answer = AnswerValue.FAST;
            }
            if (this.time < (Settings.TIME_FOR_QUESTION - Settings.SLOW_ANSWER_TIME)) {
              answer = AnswerValue.SLOW;
            }
          }
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
