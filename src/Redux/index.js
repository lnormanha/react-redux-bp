import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "../Sagas/";

export const reducers = combineReducers({
  counter: require("./CounterRedux").reducer
});

export default () => {
  let { store, sagaMiddleware } = configureStore(reducers, rootSaga);
  return store;
};
