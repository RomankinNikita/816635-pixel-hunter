import {
  changeScreen,
} from './util.js';
import greeting from './greeting/greeting.js';
import {
  AnswerValue,
  testGame
} from './data/data.js';
import {
  getNextScreen
} from './screen.js';
import {
  getNextState
} from './data/game.js';
import GameScreenView from './game-screen-view.js';

const getSecondGameType = (state) => {
  const secondGameType = new GameScreenView(state);

  secondGameType.onBackClick = () => {
    changeScreen(greeting());
  };

  secondGameType.onClick = (evt) => {
    const target = evt.target;
    if (target.type === `radio`) {
      const answer = (target.value === testGame[secondGameType.state.question].answers[0].answer) ? `${AnswerValue.CORRECT}` : `${AnswerValue.WRONG}`;
      const nextState = getNextState(secondGameType.state, answer);
      getNextScreen(nextState);
    }
  };

  return secondGameType;
};

export default getSecondGameType;
