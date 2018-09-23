import { takeLatest, put, call } from "redux-saga";

function* testWatcher() {
  console.log("TestSaga");
}

export default testWatcher;
