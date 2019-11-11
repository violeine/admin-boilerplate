import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import { save } from "../../../service/localStorage";
import { popupSnackBar } from "../../../theme/SnackBar";
import * as api from "../../../api/UserList";
import axios from "axios";
function* handleLogIn() {
  try {
    const res = yield call(axios.post, "http://mirror.hsvuit.org/apis/users/login", {
      username: "webdev",
      password: "studio"
    });
    const { token, refreshtoken } = res.data;
    save("accessToken", token);
    save("refreshToken", refreshtoken);
    alert("login success");
  } catch (err) {
    console.log(err);
  }
}

function* handleFetchUsersList(action) {
  try {
    const res = yield call(api.fetchAllUser);
    yield put(actions.fetchUserListSuccess(res.data.user));
    yield put(popupSnackBar({ time: 3000, variant: "error", message: "Can't fetch UsersList" }));
  } catch (err) {
    yield put(popupSnackBar({ time: 3000, variant: "error", message: "Can't fetch UsersList" }));
  }
}
function* handleCreateUser(action) {
  try {
    const { data } = action;
    const res = yield call(api.createUser, { data });
    yield put(actions.createUserSuccess(res.data));
    yield put(popupSnackBar({ time: 3000, variant: "success", message: "Create User Success" }));
    yield put(actions.fetchUsersList());
  } catch (err) {
    yield put(popupSnackBar({ time: 3000, variant: "error", message: "Can't create User" }));
  }
}
//////////////////////////////////////////////////////
// attach to Watcher
function* logIn() {
  yield takeEvery(actions.login, handleLogIn);
}
function* fetchUsersList() {
  yield takeEvery(actions.fetchUsersList, handleFetchUsersList);
}
export default [logIn, fetchUsersList];
