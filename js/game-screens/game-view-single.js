import AbstractView from '../abstract-view.js';
import getGameTemplate from './get-game-template.js';
import {
  Settings,
  AnswerValue,
  testGame
} from '../data/data.js';

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
        this.resetTimer();
        let answer = (target.value === testGame[this.state.question].answers[0].answer) ? AnswerValue.CORRECT : AnswerValue.WRONG;
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

  setTimer() {
    const timeIndicator = this.element.querySelector(`.game__timer`);
    const startTimer = () => {
      if (this.time <= Settings.BLINK_TIME) {
        clearInterval(this.interval);
        timeIndicator.style.color = `red`;
        this.interval = setInterval(() => {
          timeIndicator.style.opacity = 1 - (timeIndicator.style.opacity || 1);
        }, 500);
      }
      timeIndicator.textContent = this.time;
      this.time -= 1;
      if (this.time < 0) {
        this.resetTimer();
        const answer = AnswerValue.WRONG;
        this.onAnswer(answer);
      } else {
        this.timer = setTimeout(startTimer, 1000);
      }
    };
    startTimer();
  }

  resetTimer() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
  }

  onAnswer() {

  }

  onBackClick() {

  }
}
