const MAX_LIVES = 3;
const ANSWER_NUMBER = 10;
const TIME_FOR_QUESTION = 30;
const ANSWER_POINT = 100;
const WRONG_POINT = 0;
const QUICK_ANSWER_POINT = 50;
const LATE_ANSWER_POINT = -50;
const LEFT_LIVES_POINT = 50;

export const AnswerValue = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

export const getInitialState = () => Object.freeze({
  stats: [],
  lives: MAX_LIVES,
  question: 0,
  time: TIME_FOR_QUESTION
});

export const calculatePoints = (answers, lives) => {
  if (answers.length < ANSWER_NUMBER && lives === 0) {
    return -1;
  }
  if ((answers.filter((elem) => elem === AnswerValue.WRONG).length) > MAX_LIVES && lives === 0) {
    throw new Error(`correct answers more then lives allow`);
  }
  if ((answers.filter((elem) => elem === AnswerValue.WRONG).length + lives) !== MAX_LIVES) {
    throw new Error(`the number of lives must match the number of errors`);
  }
  if (answers.length < ANSWER_NUMBER && lives >= 0) {
    throw new Error(`game not ended`);
  }
  let points = 0;
  for (let i = 0; i < answers.length; i++) {
    const element = answers[i];
    if (element === AnswerValue.WRONG) {
      points += WRONG_POINT;
    }
    if (element === AnswerValue.CORRECT) {
      points += ANSWER_POINT;
    }
    if (element === AnswerValue.FAST) {
      points += ANSWER_POINT + QUICK_ANSWER_POINT;
    }
    if (element === AnswerValue.SLOW) {
      points += ANSWER_POINT + LATE_ANSWER_POINT;
    }
  }
  points += lives * LEFT_LIVES_POINT;
  return points;
};
