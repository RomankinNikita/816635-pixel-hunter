import AbstractView from '../abstract-view.js';
import getStatsScreen from './get-stats-template.js';

export default class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return getStatsScreen(this.state);
  }

  bind() {
    const backBtn = this.element.querySelector(`button.back`);
    backBtn.addEventListener(`click`, this.onBackClick);
  }

  onBackClick() {

  }
}
