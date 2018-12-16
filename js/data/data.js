export const Settings = {
  MAX_LIVES: 3,
  MIN_LIVES: 0,
  NUMBER_OF_ANSWERS: 10,
  LEFT_LIVES_POINT: 50,
  FAST_BONUS: 50,
  SLOW_PENALTY: -50,
  TIME_FOR_QUESTION: 30,
  FAST_ANSWER_TIME: 10,
  SLOW_ANSWER_TIME: 20,
  NUMBER_OF_GAME_LEVELS: 10,
  BLINK_TIME: 5
};

export const AnswerValue = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`,
  UNKNOWN: `unknown`
};

export const AnswerPoint = {
  [AnswerValue.CORRECT]: 100,
  [AnswerValue.WRONG]: 0,
  [AnswerValue.FAST]: 150,
  [AnswerValue.SLOW]: 50,
  [AnswerValue.UNKNOWN]: 50,
};

export const statsClass = {
  [AnswerValue.WRONG]: `stats__result--wrong`,
  [AnswerValue.SLOW]: `stats__result--slow`,
  [AnswerValue.FAST]: `stats__result--fast`,
  [AnswerValue.CORRECT]: `stats__result--correct`,
  [AnswerValue.UNKNOWN]: `stats__result--unknown`
};

export const initialState = Object.freeze({
  answers: [],
  lives: Settings.MAX_LIVES,
  question: 1,
  time: Settings.TIME_FOR_QUESTION
});

export const GameType = {
  SINGLE: `single`,
  DOUBLE: `double`,
  TRIPLE: `triple`
};

export const frameSize = {
  [GameType.DOUBLE]: {
    width: 468,
    height: 458
  },
  [GameType.SINGLE]: {
    width: 705,
    height: 455
  },
  [GameType.TRIPLE]: {
    width: 304,
    height: 455
  }
};
