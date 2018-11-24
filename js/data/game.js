const MAX_LIVES = 3;
const ANSWER_NUMBER = 10;
// const TIME_FOR_QUESTION = 30;
export const AnswerValue = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};
const AnswerPoint = {
  [AnswerValue.CORRECT]: 100,
  [AnswerValue.WRONG]: 0,
  [AnswerValue.FAST]: 150,
  [AnswerValue.SLOW]: 50
};
const LEFT_LIVES_POINT = 50;

// export const getInitialState = () => Object.freeze({
//   answers: [],
//   lives: MAX_LIVES,
//   question: 0,
//   time: TIME_FOR_QUESTION
// });

export const calculatePoints = (answers, lives) => {
  const wrongAnswersLength = answers.filter((elem) => elem === AnswerValue.WRONG).length;
  if (answers.length < ANSWER_NUMBER && lives === 0) {
    return -1;
  }
  if ((wrongAnswersLength) > MAX_LIVES) {
    throw new Error(`correct answers more then lives allow`);
  }
  if ((wrongAnswersLength + lives) !== MAX_LIVES) {
    throw new Error(`the number of lives must match the number of errors`);
  }
  if (answers.length < ANSWER_NUMBER && lives >= 0) {
    throw new Error(`game not ended`);
  }
  let result = answers.reduce((points, element) => points + AnswerPoint[element], lives * LEFT_LIVES_POINT);
  return result;
};
