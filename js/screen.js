import getFirstGameType from './game-1.js';
import getSecondGameType from './game-2.js';
import getThirdGameType from './game-3.js';

import {
  testGame,
  GameType
} from './data/data.js';
import {
  changeScreen
} from './util.js';
import getStatsScreen from './stats.js';

const GameTypes = {
  [GameType.DOUBLE]: getFirstGameType,
  [GameType.SINGLE]: getSecondGameType,
  [GameType.TRIPLE]: getThirdGameType,
};

const getGameModule = (state) => {
  return GameTypes[testGame[state.question].type](state);
};
const getStatsBlock = (state) => {
  return getStatsScreen(state);
};

export const getNextScreen = (state) => {
  console.log(state);

  if (state.question <= 10 && state.lives >= 0) {
    changeScreen(getGameModule(state));
  } else {
    changeScreen(getStatsBlock(state));
  }
  // console.log(state);
};

export const checkThirdGameTypeAnswer = (state) => {
  let paintIndexArr = [];
  let photoIndexArr = [];
  let currentIndex;
  testGame[state.question].answers.forEach((it, index) => {
    if (it.answer === `paint`) {
      paintIndexArr.push(index);
    } else {
      photoIndexArr.push(index);
    }
    currentIndex = paintIndexArr.length < photoIndexArr.length ? paintIndexArr[0] : photoIndexArr[0];
  });
  return currentIndex;
};
