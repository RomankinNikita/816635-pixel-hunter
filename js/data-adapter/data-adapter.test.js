import {
  assert
} from 'chai';
import {
  GameType
} from '../data/data.js';
import adaptServerData from './data-adapter.js';

const localData = {
  '1': {
    type: GameType.SINGLE,
    task: `Угадай, фото или рисунок?`,
    answers: [{
      content: `https://k31.kn3.net/4BF6BBF0E.jpg`,
      answer: `paint`,
      size: {
        width: 705,
        height: 455
      }
    }]
  },
  '2': {
    type: GameType.DOUBLE,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [{
      content: `http://imgur.com/18zh0az.jpg`,
      answer: `photo`,
      size: {
        width: 468,
        height: 458
      }
    }, {
      content: `https://k32.kn3.net/5C7060EC5.jpg`,
      answer: `paint`,
      size: {
        width: 468,
        height: 458
      }
    }]
  },
  '3': {
    type: GameType.TRIPLE,
    task: `Найдите фото среди изображений`,
    answers: [{
      content: `https://k37.kn3.net/695A61B3C.jpg`,
      answer: `photo`,
      size: {
        width: 304,
        height: 455
      }
    }, {
      content: `https://k34.kn3.net/4244FE50B.jpg`,
      answer: `paint`,
      size: {
        width: 304,
        height: 455
      }
    }, {
      content: `http://i.imgur.com/ncXRs5Y.jpg`,
      answer: `paint`,
      size: {
        width: 304,
        height: 455
      }
    }]
  }
};

const serverData = [{
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `https://k31.kn3.net/4BF6BBF0E.jpg`,
      width: 705,
      height: 455
    },
    type: `painting`
  }]
},
{
  type: `two-of-two`,
  question: `Угадайте для каждого изображения фото или рисунок?`,
  answers: [{
    image: {
      url: `http://imgur.com/18zh0az.jpg`,
      width: 468,
      height: 458
    },
    type: `photo`
  }, {
    image: {
      url: `https://k32.kn3.net/5C7060EC5.jpg`,
      width: 468,
      height: 458
    },
    type: `painting`
  }]
},
{
  type: `one-of-three`,
  question: `Найдите фото среди изображений`,
  answers: [{
    image: {
      url: `https://k37.kn3.net/695A61B3C.jpg`,
      width: 304,
      height: 455
    },
    type: `photo`
  }, {
    image: {
      url: `https://k34.kn3.net/4244FE50B.jpg`,
      width: 304,
      height: 455
    },
    type: `painting`
  }, {
    image: {
      url: `http://i.imgur.com/ncXRs5Y.jpg`,
      width: 304,
      height: 455
    },
    type: `painting`
  }]
}];

describe(`Adapt server data`, () => {
  it(`should have several format remote and local data`, () => {
    assert.deepEqual(localData, adaptServerData(serverData));
  });
});
