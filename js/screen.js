import getFirstGameType from './game-1.js';
import getSecondGameType from './game-2.js';
import getThirdGameType from './game-3.js';

import {
  Settings,
  testGame,
  GameType
} from './data/data.js';
import {
  changeScreen
} from './util.js';
import getStatsScreen from './stats.js';

const TYPE_PAINT = `paint`;

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
  const next = (state.question <= Settings.NUMBER_OF_GAME_LEVELS && state.lives >= Settings.MIN_LIVES) ? getGameModule(state) : getStatsBlock(state);
  changeScreen(next);
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
