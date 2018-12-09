import {initialState} from '../data/data.js';
import {getNextScreen} from '../game-screens/screen.js';
import RulesView from './rules-view.js';
import modalConfirm from '../modal/modal-confirm/modal-confirm.js';

const mainElement = document.querySelector(`#main`);

const rules = new RulesView();

rules.onBackClick = () => {
  mainElement.appendChild(modalConfirm().element);

};

rules.onSubmit = (sbmtEvt) => {
  sbmtEvt.preventDefault();
  getNextScreen(initialState);
};

export default () => rules;
