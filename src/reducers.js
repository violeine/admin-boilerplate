/**
 * @file reducers
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as UserList, name as nameOfUserList } from "./views/UserList";
import { reducer as SnackBar, name as nameOfSnackBar } from "./theme/SnackBar";

// Place for reducers' app

const reducers = {
  [nameOfUserList]: UserList,
  [nameOfSnackBar]: SnackBar
};

export default history =>
  combineReducers({
    ...reducers,
    router: connectRouter(history)
  });
