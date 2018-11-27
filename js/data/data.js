export const Settings = {
  MAX_LIVES: 3,
  NUMBER_OF_ANSWERS: 10,
  LEFT_LIVES_POINT: 50,
  TIME_FOR_QUESTION: 30,
  NUMBER_OF_GAME_LEVELS: 10
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
  answers: [`correct`, `wrong`, `fast`, `slow`, `unknown`, `correct`, `wrong`, `fast`, `slow`, `unknown`],
  lives: Settings.MAX_LIVES,
  question: 1,
  time: Settings.TIME_FOR_QUESTION
});
