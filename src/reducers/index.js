import itemReducer from "./itemReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ itemReducer });

export default rootReducer;