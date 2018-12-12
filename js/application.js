import GreetingScreen from './greeting/greeting.js';
import GameModel from './game-model.js';
import GameScreen from './game-screens/get-game-type.js';
import StatsScreen from './stats/stats.js';
import {changeScreen} from './util.js';
import IntroScreen from './intro/intro.js';
import RulesScreen from './rules/rules.js';

export default class Application {

  static showIntro() {
    const introScreen = new IntroScreen();
    changeScreen(introScreen);
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
    const model = new GameModel(state);
    const gameScreen = new GameScreen(model);
    gameScreen.startGame();
    changeScreen(gameScreen);
  }

  static showStats(state) {
    const statsScreen = new StatsScreen(state);
    changeScreen(statsScreen);
  }

}
