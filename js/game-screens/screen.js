import getGameType from './get-game-type.js';
import {
  Settings,
  testGame,
  GameType
} from '../data/data.js';
import {
  changeScreen
} from '../util.js';
import getStatsScreen from '../stats/stats.js';
import GameScreenViewDouble from './game-view-double.js';
import GameScreenViewSingle from './game-view-single.js';
import GameScreenViewTriple from './game-view-triple.js';

const TYPE_PAINT = `paint`;

const GameTypes = {
  [GameType.DOUBLE]: GameScreenViewDouble,
  [GameType.SINGLE]: GameScreenViewSingle,
  [GameType.TRIPLE]: GameScreenViewTriple,
};

const getGameModule = (state) => {
  return getGameType(state, GameTypes[testGame[state.question].type]);
};

export const getNextScreen = (state) => {
  const next = (state.question <= Settings.NUMBER_OF_GAME_LEVELS && state.lives >= Settings.MIN_LIVES) ? getGameModule(state) : getStatsScreen(state);
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
