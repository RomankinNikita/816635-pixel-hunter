import {
  Settings,
  statsClass
} from '../data/data.js';

export default (state) => `
<ul class="stats">
${new Array(Settings.NUMBER_OF_ANSWERS).fill(`<li class="stats__result ${state.answers.map((it) => `${statsClass[it]}`)}"></li>`).join(``)}
</ul>`;
