import {
  changeScreen,
} from '../../util.js';
import greeting from '../../greeting/greeting.js';

import ModalConfirmView from './modal-confirm-view.js';

const modalConfirm = new ModalConfirmView();

modalConfirm.onBack = () => {
  changeScreen(greeting());
};

export default () => modalConfirm;
