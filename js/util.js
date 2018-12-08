const mainElement = document.querySelector(`#main`);

export const renderTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template.trim();
  return container;
};

export const changeScreen = ({element}) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};
