import IntroView from './intro-view.js';
import Application from '../application.js';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
    this.view.onClick = () => {
      Application.showGreeting();
    };
  }
}

export default IntroScreen;
