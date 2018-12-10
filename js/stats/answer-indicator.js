import {
  Settings,
  AnswerValue,
  statsClass
} from '../data/data.js';

export default (state) => `<ul class="stats">
  ${state.answers.map((it) => `<li class="stats__result ${statsClass[it]}"></li>`).join(``)}
  ${new Array(Settings.NUMBER_OF_ANSWERS - state.answers.length).fill(`<li class="stats__result ${statsClass[AnswerValue.UNKNOWN]}"></li>`).join(``)}
  </ul>`;
