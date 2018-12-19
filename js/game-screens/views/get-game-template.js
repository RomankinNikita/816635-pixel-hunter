import header from '../header.js';
import answerIndicator from '../../stats/answer-indicator';
import {
  GameType,
  Settings,
  AnswerValue
} from '../../data/data.js';
import {
  resize
} from '../../data/resize.js';
import GameScreenViewDouble from './game-view-double.js';
import GameScreenViewSingle from './game-view-single.js';
import GameScreenViewTriple from './game-view-triple.js';

const GameTypes = {
  [GameType.DOUBLE]: GameScreenViewDouble,
  [GameType.SINGLE]: GameScreenViewSingle,
  [GameType.TRIPLE]: GameScreenViewTriple,
};
const ONE_QUESTIONS_LENGTH = 1;
const THREE_QUESTIONS_LENGTH = 3;

const getGameOption = (state, data, questions) => {
  const getLabel = (index, questionsLength) => {
    if (questionsLength !== THREE_QUESTIONS_LENGTH) {
      return `<label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question${index + 1}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question${index + 1}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>`;
    }
    return ``;
  };

  const getTemplate = (index) => {
    return `<div class="game__option">
    <img src="${data[state.question].answers[index].content}" alt="Option 1" width="100" height="100">
    ${getLabel(index, questions)}
  </div>`;
  };

  return [...Array(questions)].map((it, i) => getTemplate(i)).join(``);
};

const getGameTemplate = (state, data) => {
  const gameContentWide = data[state.question].answers.length === ONE_QUESTIONS_LENGTH ? ` game__content--wide` : ``;

  return `${header(state)}
  <section class="game">
  <p class="game__task">${data[state.question].task}</p>
  <form class="game__content${gameContentWide}">
    ${getGameOption(state, data, data[state.question].answers.length)}
  </form>
  ${answerIndicator(state)}
  </section>`;
};

export const getViewType = (state, data) => {
  const viewType = GameTypes[data[state.question].type];
  return viewType;
};

export const resizeImages = (element) => {
  element.querySelectorAll(`.game__option img`).forEach((img) => {
    img.addEventListener(`load`, () => {
      const frame = {
        width: img.parentElement.clientWidth,
        height: img.parentElement.clientHeight
      };
      const image = {
        width: img.naturalWidth,
        height: img.naturalHeight
      };
      const resizedSize = resize(frame, image);
      img.style.width = resizedSize.width + `px`;
      img.style.height = resizedSize.height + `px`;
    });
  });
};

export const setAnswerForTime = (time, answer) => {
  if (time > (Settings.TIME_FOR_QUESTION - Settings.FAST_ANSWER_TIME)) {
    answer = AnswerValue.FAST;
  }
  if (time < (Settings.TIME_FOR_QUESTION - Settings.SLOW_ANSWER_TIME)) {
    answer = AnswerValue.SLOW;
  }
  return answer;
};

export default getGameTemplate;
