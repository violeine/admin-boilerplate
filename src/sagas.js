import { flatten } from "lodash/array";
import { values } from "lodash/object";
import { fork, all } from "redux-saga/effects";
//////////////////////////////////////////////
import { sagas as UserList } from "./views/UserList";
// Place for sagas' app

const sagasList = [UserList()];

export default function*() {
  //yield flatten(sagasList.map(sagas => values(sagas))).map(saga => fork(saga));
  yield all(sagasList);
}
