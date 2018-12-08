import {
  changeScreen
} from '../util.js';
import greeting from '../greeting/greeting.js';
import IntroView from './intro-view.js';

const intro = new IntroView();

intro.onClick = () => {
  changeScreen(greeting());
};

export default () => intro;
