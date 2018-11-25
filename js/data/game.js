const MAX_LIVES = 3;
const NUMBER_OF_ANSWERS = 10;
const LEFT_LIVES_POINT = 50;
const TIME_FOR_QUESTION = 30;
const NUMBER_OF_GAME_LEVELS = 10;
export const AnswerValue = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};
const AnswerPoint = {
  [AnswerValue.CORRECT]: 100,
  [AnswerValue.WRONG]: 0,
  [AnswerValue.FAST]: 150,
  [AnswerValue.SLOW]: 50
};

export const getInitialState = () => Object.freeze({
  answers: [],
  lives: MAX_LIVES,
  question: 0,
  time: TIME_FOR_QUESTION
});

// Подсчет очков
export const calculatePoints = (answers, lives) => {
  const wrongAnswers = answers.filter((elem) => elem === AnswerValue.WRONG).length;
  const notAnsweredQuestions = NUMBER_OF_ANSWERS - answers.length;
  if (wrongAnswers + lives !== MAX_LIVES) {
    throw new Error(`the number of lives must match the number of errors`);
  }
  if (notAnsweredQuestions < 0) {
    throw new Error(`answers more than questions`);
  }
  if (lives && notAnsweredQuestions) {
    throw new Error(`game not ended`);
  }
  return answers.length === NUMBER_OF_ANSWERS ? answers.reduce((points, element) => points + AnswerPoint[element], lives * LEFT_LIVES_POINT) : -1;
};

// Переключение уровней
export const changeLevel = (game, question) => {
  if (game === null || typeof game !== `object` || typeof question !== `number` || typeof game.question !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }
  if (isNaN(question) || question < 0 || question > NUMBER_OF_GAME_LEVELS - 1) {
    throw new RangeError(`Level must be between 0...${NUMBER_OF_GAME_LEVELS - 1}.`);
  }
  return Object.assign({}, game, {
    question
  });
};
