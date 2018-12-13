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

export const showModal = (sample) => {
  mainElement.appendChild(sample.view.element);
};
