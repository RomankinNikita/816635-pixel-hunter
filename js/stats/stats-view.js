import AbstractView from '../abstract-view.js';
import getStatsScreen from './get-stats-template.js';

export default class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return getStatsScreen(this.data);
  }

  bind() {
    const backBtn = this.element.querySelector(`button.back`);
    backBtn.addEventListener(`click`, this.onBackClick);
  }

  onBackClick() {

  }
}
