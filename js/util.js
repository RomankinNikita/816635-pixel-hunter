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

export const showModal = ({element}) => {
  mainElement.appendChild(element);
};
