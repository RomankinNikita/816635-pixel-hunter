import {
  changeScreen,
} from './util.js';
import greeting from './greeting/greeting.js';
import {
  AnswerValue,
  testGame
} from './data/data.js';
import {
  getNextScreen,
  checkThirdGameTypeAnswer
} from './screen.js';
import {
  getNextState
} from './data/game.js';
import GameScreenView from './game-screen-view.js';

const getThirdGameType = (state) => {
  const thirdGameType = new GameScreenView(state);

  thirdGameType.onBackClick = () => {
    changeScreen(greeting());
  };

  thirdGameType.onClick = (evt) => {
    if (evt.target.tagName === `IMG`) {
      const currentIndex = checkThirdGameTypeAnswer(thirdGameType.state);
      const answer = (evt.target.src === testGame[thirdGameType.state.question].answers[currentIndex].content) ? `${AnswerValue.CORRECT}` : `${AnswerValue.WRONG}`;
      const nextState = getNextState(thirdGameType.state, answer);
      getNextScreen(nextState);
    }
  };

  return thirdGameType;
};

export default getThirdGameType;
