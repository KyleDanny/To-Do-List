import { 
  ADD_LIST_ITEM, 
  UPDATE_LIST_ITEM,
  TOGGLE_LIST_ITEM,
  DELETE_LIST_ITEM,
  HIDE_LIST_ITEM,
  SHOW_LIST_ITEM,
} from '../types/index.js'

const itemReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_LIST_ITEM:
      return [...state, action.payload]
    case UPDATE_LIST_ITEM:
      return state.map((item)=> { 
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
            description: action.payload.description,
          }
        }
        return item;
      })
    case TOGGLE_LIST_ITEM:
      const referenceList = state.map(item => {
        const idToggled = action.payload.id;
        return item.id === idToggled ? { ...item, done: !item.done } : { ...item };
      });
      return referenceList;
    case DELETE_LIST_ITEM:
      const toDelete = state.find(item => item.id === action.payload.id);
      return state.filter((item, index) => index !== state.indexOf(toDelete));
    case HIDE_LIST_ITEM:
      const hideList = state.map(item => {
        if (item.done && !item.hidden) {
          item.hidden = true;
        }
        return item;
      });
      return hideList;
    case SHOW_LIST_ITEM: 
    const showList = state.map(item => {
      if (item.done && item.hidden) {
        item.hidden = false;
      } 
      return item;
    });
    return showList;
    default: 
      return state;
    }
};

export default itemReducer;