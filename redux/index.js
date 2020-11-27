import { combineReducers } from "redux";
import { appReducer } from "./AppReducer";

const reducer = combineReducers({
  appReducer,
});

const rootReducer = (state, action) => reducer(state, action);

export default rootReducer;
