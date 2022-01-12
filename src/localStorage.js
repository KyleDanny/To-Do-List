const saveState = (state) => {
  const localRef = JSON.stringify(state);
  localStorage.setItem('state', localRef);
}

const loadState = () => {
  const localRef = localStorage.getItem('state');
  if (localRef === null) {
    return undefined;
  } 
  return JSON.parse(localRef);
}

export {
  saveState, 
  loadState
}