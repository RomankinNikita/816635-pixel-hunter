import header from '../header.js';
import answerIndicator from '../../stats/answer-indicator';
import {
  frameSize,
  gameData,
  GameType
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

export const getViewType = (state) => {
  const viewType = GameTypes[gameData[state.question].type];
  return viewType;
};

const getGameOption = (state, questions) => {
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
    const frame = frameSize[gameData[state.question].type];
    const image = gameData[state.question].answers[index].size;
    const resizedSize = resize(frame, image);

    return `<div class="game__option">
    <img src="${gameData[state.question].answers[index].content}" alt="Option 1" width="${resizedSize.width}" height="${resizedSize.height}">
    ${getLabel(index, questions)}
  </div>`;
  };

  return [...Array(questions)].map((it, i) => getTemplate(i)).join(``);
};

const getGameTemplate = (state) => {
  const gameContentWide = gameData[state.question].answers.length === ONE_QUESTIONS_LENGTH ? ` game__content--wide` : ``;

  return `${header(state)}
  <section class="game">
  <p class="game__task">${gameData[state.question].task}</p>
  <form class="game__content${gameContentWide}">
    ${getGameOption(state, gameData[state.question].answers.length)}
  </form>
  ${answerIndicator(state)}
  </section>`;
};

export default getGameTemplate;
