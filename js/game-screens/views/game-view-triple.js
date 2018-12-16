import AbstractView from '../../abstract-view.js';
import getGameTemplate from './get-game-template.js';
import {
  Settings,
  AnswerValue,
} from '../../data/data.js';

const TYPE_PAINT = `paint`;

const checkThirdGameTypeAnswer = (state, data) => {
  const paintIndexArr = [];
  const photoIndexArr = [];
  data[state.question].answers.forEach((it, index) => {
    if (it.answer === TYPE_PAINT) {
      paintIndexArr.push(index);
    } else {
      photoIndexArr.push(index);
    }
  });
  const currentIndex = paintIndexArr.length < photoIndexArr.length ? paintIndexArr[0] : photoIndexArr[0];
  return currentIndex;
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

  bind() {
    const backBtn = this.element.querySelector(`button.back`);
    backBtn.addEventListener(`click`, this.onBackClick);

    const gameContentForm = this.element.querySelector(`.game__content`);
    gameContentForm.addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `IMG`) {
        const currentIndex = checkThirdGameTypeAnswer(this.state, this.data);
        let answer = (evt.target.src === this.data[this.state.question].answers[currentIndex].content) ? AnswerValue.CORRECT : AnswerValue.WRONG;
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
