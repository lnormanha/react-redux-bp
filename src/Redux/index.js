import { combineReducers } from "redux";
import configureStore from "./CreateStore";

export const reducers = combineReducers({
  counter: require("./CounterRedux").reducer
});

export default () => {
  let store = configureStore(reducers);
  return store;
};
