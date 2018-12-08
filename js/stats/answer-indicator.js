import {
  statsClass
} from '../data/data.js';

export default (state) => `<ul class="stats">
  ${state.answers.map((it) => `<li class="stats__result ${statsClass[it]}"></li>`).join(``)}
  ${new Array(10 - state.answers.length).fill(`<li class="stats__result ${statsClass[`unknown`]}"></li>`).join(``)}
  </ul>`;
