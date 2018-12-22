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

async function getFetchData(fetchUrl) {
  const response = await fetch(fetchUrl);
  const checkedResponse = await checkStatus(response);
  const serverData = await toJSON(checkedResponse);
  return serverData;
}

let gameData;

export const getGameData = () => gameData;

export default class Loader {
  static async loadData() {
    gameData = adaptServerData(await getFetchData(`${SERVER_URL}/questions`));
    const questions = [].concat(...Object.values(gameData).map((it) => it.answers));
    const answers = questions.map((it) => loadImage(it.content));
    const imagePromises = Promise.all(answers);

    return imagePromises;
  }

  static async loadResults(name = DEFAULT_NAME) {
    return await getFetchData(`${SERVER_URL}/stats/${APP_ID}-${name}`);
  }

  static async saveResults(state, name) {
    const data = Object.assign({
      name
    }, state);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    const response = await fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings).then(checkStatus);
    return response;
  }
}
