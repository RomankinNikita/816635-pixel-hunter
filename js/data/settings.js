const hash = window.location.hash.replace(`#`, ``);

export const DEBUG_STYLE = `border: 3px solid red;`;

export const getDebugState = () => hash.toLowerCase() === `debug`;
