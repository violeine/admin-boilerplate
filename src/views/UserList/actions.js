import { createAction } from "redux-actions";
import * as CONST from "./constants";

export const toggleForm = createAction(CONST.TOGGLE_FORM);
export const login = createAction(CONST.LOGIN);
export const fetchUsersList = createAction(CONST.FETCH_USERS_LIST);
export const fetchUserListSuccess = createAction(CONST.FETCH_USERS_LIST_SUCCESS);
export const fetchUserListFail = createAction(CONST.FETCH_USERS_LIST_FAIL);
/////////////////////////////////////
export const createUser = createAction(CONST.CREATE_USER);
export const createUserSuccess = createAction(CONST.CREATE_USER_SUCCESS);
export const createUserFail = createAction(CONST.CREATE_USER_FAIL);
//////////////////////////////////////////////////////
export const updateUser = createAction(CONST.CREATE_USER);
export const updateUserSuccess = createAction(CONST.CREATE_USER_SUCCESS);
export const updateUserFail = createAction(CONST.CREATE_USER_FAIL);
////////////////////////////////////////////////////////
export const deleleUser = createAction(CONST.CREATE_USER);
export const deleteUserSuccess = createAction(CONST.CREATE_USER_SUCCESS);
export const deleteUserFail = createAction(CONST.CREATE_USER_FAIL);
