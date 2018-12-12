import GreetingView from './greeting-view.js';
import Application from '../application.js';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
    this.view.onClick = () => {
      Application.showRules();
    };
  }
}

export default GreetingScreen;
