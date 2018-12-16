const GameType = {
  SINGLE: `single`,
  DOUBLE: `double`,
  TRIPLE: `triple`
};

const QuestionType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`
};

const ServerTypes = {
  [QuestionType.TINDER_LIKE]: GameType.SINGLE,
  [QuestionType.TWO_OF_TWO]: GameType.DOUBLE,
  [QuestionType.ONE_OF_THREE]: GameType.TRIPLE
};

const serverAnswerType = {
  PAINTING: `painting`,
  PHOTO: `photo`
};

const gameAnswerType = {
  PAINT: `paint`,
  PHOTO: `photo`
};


const answerTypes = {
  [serverAnswerType.PAINTING]: gameAnswerType.PAINT,
  [serverAnswerType.PHOTO]: gameAnswerType.PHOTO
};

const answersAdapter = ({
  image,
  type
}) => ({
  content: image[`url`],
  answer: answerTypes[type],
  size: {
    width: image[`width`],
    height: image[`height`]
  }
});

const getNewData = ({
  type,
  question,
  answers
}) => ({
  type: ServerTypes[type],
  task: question,
  answers: answers.map(answersAdapter)
});

const adaptServerData = (data) => {
  return Object.assign({}, ...data.map((it, index) => ({[index + 1]: getNewData(it)})));
};

export default adaptServerData;
