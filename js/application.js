import GreetingScreen from './greeting/greeting-screen.js';
import GameModel from './game-screens/game-model.js';
import GameScreen from './game-screens/game-screen.js';
import StatsScreen from './stats/stats-screen.js';
import {changeScreen} from './util.js';
import IntroScreen from './intro/intro-screen.js';
import RulesScreen from './rules/rules-screen.js';
import {showModal} from './util.js';
import ModalError from './modal/modal-error/modal-error.js';
import adaptServerData from './data-adapter/data-adapter.js';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    throw new Error(`${response.status}`);
  }
};

const loadImage = (url) => {
  return new Promise((onLoad, onError) => {
    const image = new Image();
    image.onload = () => onLoad(image);
    image.onerror = () => onError(`Не удалось загрузить картинку: ${url}`);
    image.src = url;
  });
};

const onCrossfade = (intro) => {
  return new Promise((resolve) => {
    intro.view.crossfade();
    window.ontransitionend = () => resolve(`a`);
  });
};

let gameData;

export default class Application {

  static showIntro() {
    const introScreen = new IntroScreen();
    changeScreen(introScreen);
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    then(checkStatus).
    then((data) => {
      gameData = adaptServerData(data);
      return gameData;
    }).
    then((questions) => [].concat(...Object.values(questions).map((it) => it.answers))).
    then((answers) => answers.map((it) => loadImage(it.content))).
    then((imagePromises) => Promise.all(imagePromises)).
    then(() => onCrossfade(introScreen)).
    then(() => Application.showGreeting()).
    catch((error) => showModal(new ModalError(error)));
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    changeScreen(greetingScreen);
  }

  static showRules() {
    const rulesScreen = new RulesScreen();
    changeScreen(rulesScreen);
  }

  static showGame(state) {
    const model = new GameModel(state, gameData);
    const gameScreen = new GameScreen(model);
    gameScreen.startGame();
    changeScreen(gameScreen);
  }

  static showStats(state) {
    const statsScreen = new StatsScreen(state);
    changeScreen(statsScreen);
  }

}
