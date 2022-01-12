import { 
  ADD_LIST_ITEM, 
  UPDATE_LIST_ITEM,
  TOGGLE_LIST_ITEM,
  DELETE_LIST_ITEM,
  HIDE_LIST_ITEM,
  SHOW_LIST_ITEM,
} from '../types/index.js';

const addItem = (payload) => {
  return { type: ADD_LIST_ITEM, payload };
}

const updateItem = (payload) => {
  return { type: UPDATE_LIST_ITEM, payload };
}

const toggleItem = (payload) => {
  return { type: TOGGLE_LIST_ITEM, payload };
}

const deleteItem = (payload) => { 
return { type: DELETE_LIST_ITEM, payload };
}

const hideItem = () => { 
  return { type: HIDE_LIST_ITEM };
}

const showItem = () => { 
  return { type: SHOW_LIST_ITEM };
}

module.exports = {
  addItem,
  updateItem,
  toggleItem,
  deleteItem,
  hideItem,
  showItem,
}