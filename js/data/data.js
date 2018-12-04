export const Settings = {
  MAX_LIVES: 3,
  MIN_LIVES: 0,
  NUMBER_OF_ANSWERS: 10,
  LEFT_LIVES_POINT: 50,
  FAST_BONUS: 50,
  SLOW_PENALTY: -50,
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
  question: 1,
  time: Settings.TIME_FOR_QUESTION
});

export const GameType = {
  SINGLE: `single`,
  DOUBLE: `double`,
  TRIPLE: `triple`
};

const pictures = {
  paintings: [
    {
      img: `https://k42.kn3.net/CF42609C8.jpg`,
      width: 600,
      height: 831
    },
    {
      img: `https://k42.kn3.net/D2F0370D6.jpg`,
      width: 468,
      height: 354
    },
    {
      img: `https://k32.kn3.net/5C7060EC5.jpg`,
      width: 1200,
      height: 900
    },
  ],
  photos: [
    {
      img: `http://i.imgur.com/1KegWPz.jpg`,
      width: 1080,
      height: 720
    },
    {
      img: `https://i.imgur.com/DiHM5Zb.jpg`,
      width: 1264,
      height: 1864
    },
    {
      img: `http://i.imgur.com/DKR1HtB.jpg`,
      width: 1120,
      height: 2965
    },
  ]
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

export const testGame = {
  '1': {
    type: GameType.DOUBLE,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [{
      content: pictures.paintings[0].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[0].width,
        height: pictures.paintings[0].height
      }
    }, {
      content: pictures.photos[0].img,
      answer: `photo`,
      size: {
        width: pictures.photos[0].width,
        height: pictures.photos[0].height
      }
    }]
  },
  '2': {
    type: GameType.SINGLE,
    task: `Угадай, фото или рисунок?`,
    answers: [{
      content: pictures.paintings[1].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[1].width,
        height: pictures.paintings[1].height
      }
    }]
  },
  '3': {
    type: GameType.TRIPLE,
    task: `Найдите единственный рисунок или фото среди изображений`,
    answers: [{
      content: pictures.paintings[2].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[2].width,
        height: pictures.paintings[2].height
      }
    }, {
      content: pictures.photos[1].img,
      answer: `photo`,
      size: {
        width: pictures.photos[1].width,
        height: pictures.photos[1].height
      }
    }, {
      content: pictures.photos[2].img,
      answer: `photo`,
      size: {
        width: pictures.photos[2].width,
        height: pictures.photos[2].height
      }
    }]
  },
  '4': {
    type: GameType.DOUBLE,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [{
      content: pictures.paintings[0].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[0].width,
        height: pictures.paintings[0].height
      }
    }, {
      content: pictures.photos[0].img,
      answer: `photo`,
      size: {
        width: pictures.photos[0].width,
        height: pictures.photos[0].height
      }
    }]
  },
  '5': {
    type: GameType.DOUBLE,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [{
      content: pictures.paintings[0].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[0].width,
        height: pictures.paintings[0].height
      }
    }, {
      content: pictures.photos[0].img,
      answer: `photo`,
      size: {
        width: pictures.photos[0].width,
        height: pictures.photos[0].height
      }
    }]
  },
  '6': {
    type: GameType.SINGLE,
    task: `Угадай, фото или рисунок?`,
    answers: [{
      content: pictures.paintings[1].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[1].width,
        height: pictures.paintings[1].height
      }
    }]
  },
  '7': {
    type: GameType.TRIPLE,
    task: `Найдите единственный рисунок или фото среди изображений`,
    answers: [{
      content: pictures.paintings[2].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[2].width,
        height: pictures.paintings[2].height
      }
    }, {
      content: pictures.photos[1].img,
      answer: `photo`,
      size: {
        width: pictures.photos[1].width,
        height: pictures.photos[1].height
      }
    }, {
      content: pictures.photos[2].img,
      answer: `photo`,
      size: {
        width: pictures.photos[2].width,
        height: pictures.photos[2].height
      }
    }]
  },
  '8': {
    type: GameType.DOUBLE,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [{
      content: pictures.paintings[0].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[0].width,
        height: pictures.paintings[0].height
      }
    }, {
      content: pictures.photos[0].img,
      answer: `photo`,
      size: {
        width: pictures.photos[0].width,
        height: pictures.photos[0].height
      }
    }]
  },
  '9': {
    type: GameType.TRIPLE,
    task: `Найдите единственный рисунок или фото среди изображений`,
    answers: [{
      content: pictures.paintings[2].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[2].width,
        height: pictures.paintings[2].height
      }
    }, {
      content: pictures.photos[1].img,
      answer: `photo`,
      size: {
        width: pictures.photos[1].width,
        height: pictures.photos[1].height
      }
    }, {
      content: pictures.photos[2].img,
      answer: `photo`,
      size: {
        width: pictures.photos[2].width,
        height: pictures.photos[2].height
      }
    }]
  },
  '10': {
    type: GameType.DOUBLE,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [{
      content: pictures.paintings[0].img,
      answer: `paint`,
      size: {
        width: pictures.paintings[0].width,
        height: pictures.paintings[0].height
      }
    }, {
      content: pictures.photos[0].img,
      answer: `photo`,
      size: {
        width: pictures.photos[0].width,
        height: pictures.photos[0].height
      }
    }]
  }
};
