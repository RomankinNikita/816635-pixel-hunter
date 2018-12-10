import {initialState} from '../data/data.js';
import {getNextScreen} from '../game-screens/screen.js';
import RulesView from './rules-view.js';
import modalConfirm from '../modal/modal-confirm/modal-confirm.js';
import {showModal} from '../util.js';

const rules = new RulesView();

rules.onBackClick = () => {
  showModal(modalConfirm());
};

rules.onSubmit = (sbmtEvt) => {
  sbmtEvt.preventDefault();
  getNextScreen(initialState);
};

export default () => rules;
