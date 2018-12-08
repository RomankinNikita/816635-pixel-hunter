const mainElement = document.querySelector(`#main`);

export const renderTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template.trim();
  return container;
};

export const changeScreen = (view) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(view.element);
};
