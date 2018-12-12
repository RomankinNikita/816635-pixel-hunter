import {
  Settings,
  AnswerValue,
  AnswerPoint,
  testGame,
  GameType
} from './data.js';
import GameScreenViewDouble from '../game-screens/views/game-view-double.js';
import GameScreenViewSingle from '../game-screens/views/game-view-single.js';
import GameScreenViewTriple from '../game-screens/views/game-view-triple.js';

const TYPE_PAINT = `paint`;

const GameTypes = {
  [GameType.DOUBLE]: GameScreenViewDouble,
  [GameType.SINGLE]: GameScreenViewSingle,
  [GameType.TRIPLE]: GameScreenViewTriple,
};

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
  if (lives > -1 && notAnsweredQuestions) {
    throw new Error(`game not ended`);
  }
  return answers.length === Settings.NUMBER_OF_ANSWERS ? answers.reduce((points, element) => points + AnswerPoint[element], lives * Settings.LEFT_LIVES_POINT) : -1;
};

// Переключение уровней
export const changeLevel = (game, question) => {
  if (game === null || typeof game !== `object` || typeof question !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }
  if (isNaN(question) || question < 1 || question > Settings.NUMBER_OF_GAME_LEVELS + 2) {
    throw new RangeError(`Level must be between 1...${Settings.NUMBER_OF_GAME_LEVELS + 1}.`);
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
  if (isNaN(lives) || lives < -1 || lives > Settings.MAX_LIVES) {
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

export const getNextState = (state, answer) => {
  const answers = state.answers.slice();
  let question = state.question;
  let lives = state.lives;
  answers.push(answer);
  question += 1;
  state = changeLevel(state, question);
  lives = answer === AnswerValue.WRONG ? lives -= 1 : lives;
  state = Object.assign({}, setLives(state, lives), {
    answers
  });
  state = setTime(state, Settings.TIME_FOR_QUESTION);
  return state;
};

export const getViewType = (state) => {
  const viewType = GameTypes[testGame[state.question].type];
  return viewType;
};

export const checkThirdGameTypeAnswer = (state) => {
  const paintIndexArr = [];
  const photoIndexArr = [];
  testGame[state.question].answers.forEach((it, index) => {
    if (it.answer === TYPE_PAINT) {
      paintIndexArr.push(index);
    } else {
      photoIndexArr.push(index);
    }
  });
  const currentIndex = paintIndexArr.length < photoIndexArr.length ? paintIndexArr[0] : photoIndexArr[0];
  return currentIndex;
};

export const clearAllTimers = () => {
  let maxId = setTimeout(function () {});
  while (maxId--) {
    clearTimeout(maxId);
  }
};
