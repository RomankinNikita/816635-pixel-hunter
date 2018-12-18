import answerIndicator from './answer-indicator.js';
import {
  calculatePoints
} from '../data/game.js';
import {
  Settings,
  AnswerValue,
  AnswerPoint
} from '../data/data.js';


const fastBonus = (state) => {
  const fastLength = state.answers.filter((it) => it === AnswerValue.FAST).length;
  if (fastLength > 0) {
    return `<tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
  <td class="result__extra">${fastLength }<span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">× 50</td>
    <td class="result__total">${fastLength * Settings.FAST_BONUS}</td>
    </tr>`;
  }
  return ``;
};
const slowPenalty = (state) => {
  const slowLength = state.answers.filter((it) => it === AnswerValue.SLOW).length;
  if (slowLength > 0) {
    return `<tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${slowLength }<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">× 50</td>
    <td class="result__total">${slowLength * Settings.SLOW_PENALTY}</td>
  </tr>`;
  }
  return ``;
};
const livesBonus = (state) => {
  if (state.lives > 0) {
    return `<tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
  <td class="result__extra">${state.lives }<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">× 50</td>
    <td class="result__total">${state.lives * Settings.LEFT_LIVES_POINT}</td>
  </tr>`;
  }
  return ``;
};

const getStatsScreen = (data) => {
  const header = `<header class="header">
  <button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>
  </header>`;

  const getPlayerName = (name) => `<h1 class="result__title">Результаты игрока <u>${name}</u>:</h1>`;

  const getWinTemplate = (state, index) => `<section class="result">
<h2 class="result__title">Победа!</h2>
<table class="result__table">
  <tr>
    <td class="result__number">${index + 1}.</td>
    <td colspan="2">
    ${answerIndicator(state)}
    </td>
    <td class="result__points">× 100</td>
    <td class="result__total">${(state.answers.length - state.answers.filter((it) => it === AnswerValue.WRONG).length) * AnswerPoint[AnswerValue.CORRECT]}</td>
  </tr>
  ${fastBonus(state)}
  ${livesBonus(state)}
  ${slowPenalty(state)}
  <tr>
    <td colspan="5" class="result__total  result__total--final">Сумма баллов: ${calculatePoints(state.answers, state.lives)}</td>
  </tr>
</table>
</section>`;

  const getLoseTemplate = (state, index) => `<section class="result">
  <h2 class="result__title">Поражение!</h2>
  <table class="result__table">
    <tr>
      <td class="result__number">${index + 1}.</td>
      <td colspan="2">
      ${answerIndicator(state)}
      </td>
      <td class="result__total result__total--final">FAIL!</td>
    </tr>
  </table>
  </section>`;

  const getTemplateType = (state, ind) => {
    const type = (state.answers.length < Settings.NUMBER_OF_ANSWERS || state.lives < Settings.MIN_LIVES) ? getLoseTemplate(state, ind) : getWinTemplate(state, ind);
    return type;
  };

  const statsTemplate = data.map((it, i) => getTemplateType(it, i)).join(``);

  const resTemplate = header.concat(getPlayerName(data[0].name), statsTemplate);

  return resTemplate;
};

export default getStatsScreen;
