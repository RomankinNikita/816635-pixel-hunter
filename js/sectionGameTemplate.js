import header from './header.js';
import answerIndicator from './answer-indicator';
import {
  testGame
} from './data/data.js';

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

  const getTemplate = (index) => `<div class="game__option">
    <img src="${testGame[state.question].answers[index].content}" alt="Option 1" width="468" height="458">
    ${getLabel(index, questions)}
  </div>`;

  const result = new Array(questions);
  for (let i = 0; i < questions; i++) {
    result.push(getTemplate(i));
  }
  return result.join(``);
};

const getGameTemplate = (state) => {
  const template = `${header(state)}
  <section class="game">
  <p class="game__task">${testGame[state.question].task}</p>
  <form class="game__content">
    ${getGameOption(state, testGame[state.question].answers.length)}
  </form>
  ${answerIndicator(state)}
  </section>`;
  return template;
};
export default getGameTemplate;
