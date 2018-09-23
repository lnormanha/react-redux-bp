import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

export default (rootReducer, rootSaga) => {
  const middlewares = [];
  const enhancers = [];

  const sagaMonitor = null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middlewares.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, compose(...enhancers));

  let sagasManager = sagaMiddleware.run(rootSaga);

  return { store, sagasManager, sagaMiddleware };
};
