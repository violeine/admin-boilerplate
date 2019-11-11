import main from "./main";
import { fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...main.map(saga => fork(saga))]);
}
