import header from './header.js';
import answerIndicator from './answer-indicator';
import {
  frameSize,
  testGame
} from './data/data.js';
import resize from './data/resize.js';

const QUESTIONS_LENGTH = 3;

const getGameOption = (state, questions) => {
  const getLabel = (index, questionsLength) => {
    if (questionsLength !== QUESTIONS_LENGTH) {
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
    const frame = frameSize[testGame[state.question].type];
    const image = testGame[state.question].answers[index].size;
    const resizedSize = resize(frame, image);

    return `<div class="game__option">
    <img src="${testGame[state.question].answers[index].content}" alt="Option 1" width="${resizedSize.width}" height="${resizedSize.height}">
    ${getLabel(index, questions)}
  </div>`;
  };

  return [...Array(questions)].map((it, i) => getTemplate(i)).join(``);
};

const getGameTemplate = (state) => `${header(state)}
<section class="game">
<p class="game__task">${testGame[state.question].task}</p>
<form class="game__content">
  ${getGameOption(state, testGame[state.question].answers.length)}
</form>
${answerIndicator(state)}
</section>`;
export default getGameTemplate;
