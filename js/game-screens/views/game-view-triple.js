import AbstractView from '../../abstract-view.js';
import getGameTemplate, {
  setAnswerForTime
} from './get-game-template.js';
import {
  Settings,
  AnswerValue,
} from '../../data/data.js';
import {
  getDebugState,
  DEBUG_STYLE
} from '../../data/settings.js';

const TYPE_PAINT = `paint`;
const TYPE_PHOTO = `photo`;

const checkThirdGameTypeAnswer = (state, data) => {
  const answers = data[state.question].answers;
  const paints = answers.filter((it) => it.answer === TYPE_PAINT);

  const setIndex = (answer) => {
    return answers.findIndex((it) => it.answer === answer);
  };

  const resIndex = paints.length === 1 ? setIndex(TYPE_PAINT) : setIndex(TYPE_PHOTO);

  return resIndex;
};


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

  getRightAnswerIndex() {
    return checkThirdGameTypeAnswer(this.state, this.data);
  }

  activateDebugMode() {
    if (getDebugState()) {
      const gameOptions = this.element.querySelectorAll(`.game__option`);
      gameOptions[this.getRightAnswerIndex()].style = DEBUG_STYLE;
    }
  }

  bind() {
    const backBtn = this.element.querySelector(`button.back`);
    backBtn.addEventListener(`click`, this.onBackClick);

    const gameContentForm = this.element.querySelector(`.game__content`);
    gameContentForm.addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `IMG`) {
        let answer = (evt.target.src === this.data[this.state.question].answers[this.getRightAnswerIndex()].content) ? AnswerValue.CORRECT : AnswerValue.WRONG;
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
