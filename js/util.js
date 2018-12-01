import {
  GameType,
  testGame
} from './data/data.js';
import getFirstGameType from './game-1.js';
import getSecondGameType from './game-2.js';
import getThirdGameType from './game-3.js';

const mainElement = document.querySelector(`#main`);

export const renderTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template.trim();
  return container;
};

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

const getGameModule = (state) => {
  const GameTypes = {
    [GameType.DOUBLE]: getFirstGameType,
    [GameType.SINGLE]: getSecondGameType,
    [GameType.TRIPLE]: getThirdGameType,
  };
  GameTypes[testGame[state.question].type](state);
};

export const getNextScreen = (state) => {
  changeScreen(getGameModule(state));
};
