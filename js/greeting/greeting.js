import {changeScreen} from '../util.js';
import rules from '../rules/rules.js';
import GreetingView from './greeting-view.js';

const greeting = new GreetingView();

greeting.onClick = () => {
  changeScreen(rules());
};

export default () => greeting;
