import adaptServerData from './data-adapter/data-adapter.js';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;

const DEFAULT_NAME = `noNamePlayer`;
const APP_ID = 22061994;

const toJSON = (res) => res.json();

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}`);
  }
};

const loadImage = (url) => {
  return new Promise((onLoad, onError) => {
    const image = new Image();
    image.onload = () => onLoad(image);
    image.onerror = () => onError(`Не удалось загрузить картинку: ${url}`);
    image.src = url;
  });
};

let gameData;

export const getGameData = () => gameData;

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).
    then(checkStatus).
    then(toJSON).
    then((data) => {
      gameData = adaptServerData(data);
      return gameData;
    }).
    then((questions) => [].concat(...Object.values(questions).map((it) => it.answers))).
    then((answers) => answers.map((it) => loadImage(it.content))).
    then((imagePromises) => Promise.all(imagePromises));
  }

  static loadResults(name = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`).
    then(checkStatus).
    then(toJSON);
  }

  static saveResults(state, name) {
    const data = Object.assign({name}, state);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings).then(checkStatus);
  }
}
