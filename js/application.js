import GreetingScreen from './greeting/greeting-screen.js';
import GameModel from './game-screens/game-model.js';
import GameScreen from './game-screens/game-screen.js';
import StatsScreen from './stats/stats-screen.js';
import {
  changeScreen
} from './util.js';
import IntroScreen from './intro/intro-screen.js';
import RulesScreen from './rules/rules-screen.js';
import {
  showElement,
  crossfadeSwitch
} from './util.js';
import ModalError from './modal/modal-error/modal-error.js';
import Loader from './loader.js';

const onCrossfade = (intro) => {
  return new Promise((resolve) => {
    intro.view.crossfade();
    window.ontransitionend = () => resolve();
  });
};

export default class Application {

  static showIntro() {
    const introScreen = new IntroScreen();
    const greetingScreen = new GreetingScreen();
    crossfadeSwitch(greetingScreen);
    showElement(introScreen);
    Loader.loadData().
    then(() => onCrossfade(introScreen)).
    then(() => Application.showGreeting()).
    catch((error) => showElement(new ModalError(error)));
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    changeScreen(greetingScreen);
  }

  static showRules() {
    const rulesScreen = new RulesScreen();
    changeScreen(rulesScreen);
  }

  static showGame(state, data, name) {
    const model = new GameModel(state, data, name);
    const gameScreen = new GameScreen(model);
    gameScreen.startGame();
    changeScreen(gameScreen);
  }

  static showStats(state, name) {
    Loader.saveResults(state, name).
    then(() => Loader.loadResults(name)).
    then((data) => {
      changeScreen(new StatsScreen(data));
    }).
    catch((error) => showElement(new ModalError(error)));
  }
}
