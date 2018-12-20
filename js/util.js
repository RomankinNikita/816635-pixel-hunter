const mainElement = document.querySelector(`#main`);

export const renderTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template.trim();
  return container;
};

export const changeScreen = (sample) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(sample.view.element);
};

export const showElement = (sample) => {
  mainElement.appendChild(sample.view.element);
};

export const crossfadeSwitch = (screenElement) => {
  screenElement.view.onClick = () => {};
  showElement(screenElement);
  screenElement.view.element.querySelector(`.crossfade`).classList.add(`crossfade-no-opacity`);
};
