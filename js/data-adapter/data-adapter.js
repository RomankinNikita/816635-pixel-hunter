const GameType = {
  SINGLE: `single`,
  DOUBLE: `double`,
  TRIPLE: `triple`
};

const ServerTypes = {
  'tinder-like': GameType.SINGLE,
  'two-of-two': GameType.DOUBLE,
  'one-of-three': GameType.TRIPLE
};

const answerTypes = {
  'painting': `paint`,
  'photo': `photo`
};

const answersAdapter = ({image, type}) => ({content: image[`url`], answer: answerTypes[type], size: {width: image[`width`], height: image[`height`]}});

const getNewData = ({type, question, answers}) => ({type: ServerTypes[type], task: question, answers: answers.map(answersAdapter)});

const adaptServerData = (data) => {
  const newData = {};

  data.forEach((it, index) => {
    newData[index + 1] = getNewData(it);
  });

  return newData;
};

export default adaptServerData;
