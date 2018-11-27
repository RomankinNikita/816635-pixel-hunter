import {
  Settings,
  AnswerValue,
  AnswerPoint
} from './data.js';

// Подсчет очков
export const calculatePoints = (answers, lives) => {
  const wrongAnswers = answers.filter((elem) => elem === AnswerValue.WRONG).length;
  const notAnsweredQuestions = Settings.NUMBER_OF_ANSWERS - answers.length;
  if (wrongAnswers + lives !== Settings.MAX_LIVES) {
    throw new Error(`the number of lives must match the number of errors`);
  }
  if (notAnsweredQuestions < 0) {
    throw new Error(`answers more than questions`);
  }
  if (lives && notAnsweredQuestions) {
    throw new Error(`game not ended`);
  }
  return answers.length === Settings.NUMBER_OF_ANSWERS ? answers.reduce((points, element) => points + AnswerPoint[element], lives * Settings.LEFT_LIVES_POINT) : -1;
};

// Переключение уровней
export const changeLevel = (game, question) => {
  if (game === null || typeof game !== `object` || typeof question !== `number` || typeof game.question !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }
  if (isNaN(question) || question < 0 || question > Settings.NUMBER_OF_GAME_LEVELS - 1) {
    throw new RangeError(`Level must be between 0...${Settings.NUMBER_OF_GAME_LEVELS - 1}.`);
  }
  return Object.assign({}, game, {
    question
  });
};

// Управление жизнями
export const setLives = (game, lives) => {
  if (game === null || typeof game !== `object` || typeof lives !== `number` || typeof game.lives !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }
  if (isNaN(lives) || lives < 0 || lives > Settings.MAX_LIVES) {
    throw new RangeError(`Lives must be between 0...${Settings.MAX_LIVES}.`);
  }
  return Object.assign({}, game, {
    lives
  });
};

// Управление временем
export const setTime = (game, time) => {
  if (game === null || typeof game !== `object` || typeof time !== `number` || typeof game.time !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }
  if (isNaN(time) || time < 0 || time > Settings.TIME_FOR_QUESTION) {
    throw new RangeError(`Time must be between 0...${Settings.TIME_FOR_QUESTION}.`);
  }
  return Object.assign({}, game, {
    time
  });
};
