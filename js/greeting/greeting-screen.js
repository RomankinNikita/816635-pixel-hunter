import GreetingView from './greeting-view.js';
import Application from '../application.js';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
    this.view.onClick = () => {
      Application.showRules();
    };
  }

  crossfadeSwitch() {
    this.view.crossfadeSwitch(this);
  }
}

export default GreetingScreen;
