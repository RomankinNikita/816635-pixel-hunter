import {
  testGame,
  GameType
} from '../data/data.js';
import GameScreenViewDouble from './game-view-double.js';
import GameScreenViewSingle from './game-view-single.js';
import GameScreenViewTriple from './game-view-triple.js';

const TYPE_PAINT = `paint`;

const GameTypes = {
  [GameType.DOUBLE]: GameScreenViewDouble,
  [GameType.SINGLE]: GameScreenViewSingle,
  [GameType.TRIPLE]: GameScreenViewTriple,
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
