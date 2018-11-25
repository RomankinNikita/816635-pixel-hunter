/* eslint-disable max-nested-callbacks */
import {
  assert
} from 'chai';
import {
  calculatePoints,
  AnswerValue,
  changeLevel,
  getInitialState,
  setLives,
  setTime
} from './game.js';

const testNineAnswers = [...new Array(6).fill(AnswerValue.CORRECT), ...new Array(3).fill(AnswerValue.WRONG)];
const testTenAnswers = new Array(10).fill(AnswerValue.CORRECT);
const testMinAnswers = [...new Array(7).fill(AnswerValue.SLOW), ...new Array(3).fill(AnswerValue.WRONG)];
const testMaxAnswers = new Array(10).fill(AnswerValue.FAST);
const threeMistakesAnswers = [...testMinAnswers];
const twoMistakesAnswers = [...new Array(8).fill(AnswerValue.CORRECT), ...new Array(2).fill(AnswerValue.WRONG)];
const oneMistakesAnswers = [...new Array(9).fill(AnswerValue.CORRECT), ...new Array(1).fill(AnswerValue.WRONG)];
const noMistakesAnswers = [...testTenAnswers];
const nineAnswersTwoMistakes = [...new Array(7).fill(AnswerValue.CORRECT), ...new Array(2).fill(AnswerValue.WRONG)];
const answersMoreQuestions = new Array(11).fill(AnswerValue.CORRECT);

describe(`Calculate Points`, () => {
  describe(`should check if data correct`, () => {
    it(`the number of lives must match the number of errors`, () => {
      assert.throws(() => calculatePoints(threeMistakesAnswers, 1), /the number of lives must match the number of errors/);
      assert.throws(() => calculatePoints(twoMistakesAnswers, 0), /the number of lives must match the number of errors/);
      assert.throws(() => calculatePoints(noMistakesAnswers, 2), /the number of lives must match the number of errors/);
      assert.throws(() => calculatePoints(oneMistakesAnswers, 3), /the number of lives must match the number of errors/);
    });
    it(`game not ended`, () => {
      assert.throws(() => calculatePoints(nineAnswersTwoMistakes, 1), /game not ended/);
    });
    it(`answers more than questions`, () => {
      assert.throws(() => calculatePoints(answersMoreQuestions, 3), /answers more than questions/);
    });
  });
  describe(`should calculate points`, () => {
    it(`should answer not less than 10 questions`, () => {
      assert.equal(calculatePoints(testNineAnswers, 0), -1);
    });

    it(`if all answers are slow and no lives left should return 350 points`, () => {
      assert.equal(calculatePoints(testMinAnswers, 0), 350);
    });
    it(`if all answers are usual and all three lives are left should return 1150 points`, () => {
      assert.equal(calculatePoints(testTenAnswers, 3), 1150);
    });
    it(`if all answers are fast and all three lives are left should return 1650 points`, () => {
      assert.equal(calculatePoints(testMaxAnswers, 3), 1650);
    });
  });
});

describe(`Change level`, () => {
  it(`Parameters shouldn't be incorrect parameter type`, () => {
    assert.throws(() => changeLevel({}, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel([], 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(0, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(null, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(NaN, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(`string`, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(undefined, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(getInitialState(), {}), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(getInitialState(), []), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(getInitialState(), null), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(getInitialState(), `string`), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => changeLevel(getInitialState(), undefined), /Parameters shouldn't be undefined or incorrect parameter type/);
  });
  it(`should throw range error`, () => {
    assert.throws(() => changeLevel(getInitialState(), -1), /Level must be between 0...9/);
    assert.throws(() => changeLevel(getInitialState(), 10), /Level must be between 0...9/);
    assert.throws(() => changeLevel(getInitialState(), NaN), /Level must be between 0...9/);
  });
  it(`should change level`, () => {
    assert.equal(changeLevel(getInitialState(), 0).question, 0);
    assert.equal(changeLevel(getInitialState(), 5).question, 5);
    assert.equal(changeLevel(getInitialState(), 9).question, 9);
  });
});

describe(`Set lives`, () => {
  it(`Parameters shouldn't be incorrect parameter type`, () => {
    assert.throws(() => setLives({}, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives([], 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(0, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(null, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(NaN, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(`string`, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(undefined, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(getInitialState(), {}), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(getInitialState(), []), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(getInitialState(), null), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(getInitialState(), `string`), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setLives(getInitialState(), undefined), /Parameters shouldn't be undefined or incorrect parameter type/);
  });
  it(`should throw range error`, () => {
    assert.throws(() => setLives(getInitialState(), -1), /Lives must be between 0...3/);
    assert.throws(() => setLives(getInitialState(), 4), /Lives must be between 0...3/);
    assert.throws(() => setLives(getInitialState(), NaN), /Lives must be between 0...3/);
  });
  it(`should set lives`, () => {
    assert.equal(setLives(getInitialState(), 0).lives, 0);
    assert.equal(setLives(getInitialState(), 1).lives, 1);
    assert.equal(setLives(getInitialState(), 3).lives, 3);
  });
});

describe(`Set time`, () => {
  it(`Parameters shouldn't be incorrect parameter type`, () => {
    assert.throws(() => setTime({}, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime([], 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(0, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(null, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(NaN, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(`string`, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(undefined, 1), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(getInitialState(), {}), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(getInitialState(), []), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(getInitialState(), null), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(getInitialState(), `string`), /Parameters shouldn't be undefined or incorrect parameter type/);
    assert.throws(() => setTime(getInitialState(), undefined), /Parameters shouldn't be undefined or incorrect parameter type/);
  });
  it(`should throw range error`, () => {
    assert.throws(() => setTime(getInitialState(), -1), /Time must be between 0...30/);
    assert.throws(() => setTime(getInitialState(), 31), /Time must be between 0...30/);
    assert.throws(() => setTime(getInitialState(), NaN), /Time must be between 0...30/);
  });
  it(`should set time`, () => {
    assert.equal(setTime(getInitialState(), 0).time, 0);
    assert.equal(setTime(getInitialState(), 15).time, 15);
    assert.equal(setTime(getInitialState(), 30).time, 30);
  });
});
