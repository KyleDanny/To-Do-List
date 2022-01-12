import rootReducer from '../reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveState, loadState } from '../localStorage';

const localState = loadState();

const store = createStore(rootReducer, localState, composeWithDevTools());

store.subscribe(() => {
  saveState(store.getState());
})

export default store;
