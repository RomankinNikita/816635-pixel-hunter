/* eslint-disable max-nested-callbacks */
import {
  assert
} from 'chai';
import {
  calculatePoints,
  ANSWER_VALUES
} from './game.js';

const testNineAnswers = new Array(9).fill(ANSWER_VALUES.CORRECT);
const testTenAnswers = new Array(10).fill(ANSWER_VALUES.CORRECT);
const testMinAnswers = [...new Array(7).fill(ANSWER_VALUES.SLOW), ...new Array(3).fill(ANSWER_VALUES.WRONG)];
const testMaxAnswers = new Array(10).fill(ANSWER_VALUES.FAST);
const threeMistakesAnswers = [...testMinAnswers];
const twoMistakesAnswers = [...new Array(8).fill(ANSWER_VALUES.CORRECT), ...new Array(2).fill(ANSWER_VALUES.WRONG)];
const oneMistakesAnswers = [...new Array(9).fill(ANSWER_VALUES.CORRECT), ...new Array(1).fill(ANSWER_VALUES.WRONG)];
const noMistakesAnswers = [...testTenAnswers];
const fourMistakesAnswers = [...new Array(6).fill(ANSWER_VALUES.CORRECT), ...new Array(4).fill(ANSWER_VALUES.WRONG)];
const nineAnswersTwoMistakes = [...new Array(7).fill(ANSWER_VALUES.CORRECT), ...new Array(2).fill(ANSWER_VALUES.WRONG)];

describe(`Game`, () => {
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
    it(`correct answers more then lives allow`, () => {
      assert.throws(() => calculatePoints(fourMistakesAnswers, 0), /correct answers more then lives allow/);
    });
  });
  describe(`should calculate points`, () => {
    it(`should answer not less than 10 questions`, () => {
      assert.equal(calculatePoints(testNineAnswers, 3), -1);
      assert.notEqual(calculatePoints(testTenAnswers, 3), -1);
    });

    it(`if all answers are slow and no lives left should return 350 points`, () => {
      assert.equal(calculatePoints(testMinAnswers, 0), 350);
    });
    it(`if all answers are usual and all three lives are left should return 1150 points`, () => {
      assert.equal(calculatePoints(testTenAnswers, 1), 1050);
    });
    it(`if all answers are fast and all three lives are left should return 1650 points`, () => {
      assert.equal(calculatePoints(testMaxAnswers, 3), 1650);
    });
  });
});
