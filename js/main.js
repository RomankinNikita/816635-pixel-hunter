'use strict';

const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const mainElement = document.querySelector(`#main`);

const introScreen = document.querySelector(`#intro`);
const greetingScreen = document.querySelector(`#greeting`);
const rulesScreen = document.querySelector(`#rules`);
const twoImgGameScreen = document.querySelector(`#game-1`);
const oneImgGameScreen = document.querySelector(`#game-2`);
const threeImgGameScreen = document.querySelector(`#game-3`);
const statScreen = document.querySelector(`#stats`);

const wrap = (it) => {
  const shadow = document.createElement(`div`);
  const content = it.content.cloneNode(true);
  shadow.appendChild(content);
  return shadow.cloneNode(true);
};

const screens = [wrap(introScreen), wrap(greetingScreen), wrap(rulesScreen), wrap(twoImgGameScreen), wrap(oneImgGameScreen), wrap(threeImgGameScreen), wrap(statScreen)];

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

document.body.insertAdjacentHTML(`beforeend`, `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>
</div>`);

const arrowsBtns = document.body.querySelectorAll(`.arrows__btn`);
arrowsBtns[0].onclick = () => {
  select(current - 1);
};
arrowsBtns[1].onclick = () => {
  select(current + 1);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

select(1);
