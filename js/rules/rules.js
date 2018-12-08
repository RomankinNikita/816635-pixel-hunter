import {
  changeScreen,
} from '../util.js';
import greeting from '../greeting/greeting.js';
import {initialState} from '../data/data.js';
import {getNextScreen} from '../screen.js';
import RulesView from './rules-view.js';

const rules = new RulesView();

rules.onBackClick = () => {
  changeScreen(greeting());
};

rules.onInput = () => {
  const rulesButton = rules.element.querySelector(`.rules__button`);
  const rulesInput = rules.element.querySelector(`.rules__input`);
  rulesButton.disabled = !rulesInput.value.length;
};

rules.onSubmit = (sbmtEvt) => {
  sbmtEvt.preventDefault();
  getNextScreen(initialState);
};

export default () => rules;
