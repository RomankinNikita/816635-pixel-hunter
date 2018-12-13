import GreetingScreen from './greeting/greeting-screen.js';
import GameModel from './game-screens/game-model.js';
import GameScreen from './game-screens/game-screen.js';
import StatsScreen from './stats/stats-screen.js';
import {changeScreen} from './util.js';
import IntroScreen from './intro/intro-screen.js';
import RulesScreen from './rules/rules-screen.js';

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
