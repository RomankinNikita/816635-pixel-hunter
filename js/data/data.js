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
  answers: [],
  lives: Settings.MAX_LIVES,
  question: `1`,
  time: Settings.TIME_FOR_QUESTION
});

const GameType = {
  SINGLE: `single`,
  DOUBLE: `double`,
  TRIPLE: `triple`
};

const pictures = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

export const testGame = {
  '1': {
    type: GameType.DOUBLE,
    answers: [{
      content: pictures.paintings[0],
      answer: `paint`
    }, {
      content: pictures.photos[0],
      answer: `photo`
    }]
  },
  '2': {
    type: GameType.SINGLE,
    answers: [{
      content: pictures.paintings[1],
      answer: `paint`
    }]
  },
  '3': {
    type: GameType.TRIPLE,
    answers: [{
      content: pictures.paintings[2],
      answer: `paint`
    }, {
      content: pictures.photos[1],
      answer: `photo`
    }, {
      content: pictures.photos[2],
      answer: `photo`
    }]
  }
};
