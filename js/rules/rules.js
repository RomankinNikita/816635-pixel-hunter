import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import {initialState} from '../data/data.js';
import {getNextScreen} from '../game-screens/screen.js';
import RulesView from './rules-view.js';

const rules = new RulesView();

rules.onBackClick = () => {
  changeScreen(greeting());
};

rules.onSubmit = (sbmtEvt) => {
  sbmtEvt.preventDefault();
  getNextScreen(initialState);
};

export default () => rules;
