import { applyMiddleware, createStore } from "redux";
import { appReducer } from "./AppReducer";
import thunk from "redux-thunk";

export default store = createStore(appReducer, applyMiddleware(thunk));
