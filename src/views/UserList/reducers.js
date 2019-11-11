import freeze from "deep-freeze";
import * as actions from "./actions";
import { handleActions } from "redux-actions";

const initialState = freeze({
  //init state go here
  formOpen: false,
  usersList: []
});
export const name = "UserList";
export default handleActions(
  {
    [actions.toggleForm]: (state, actions) => {
      return freeze({
        ...state,
        formOpen: !state.formOpen
      });
    },
    [actions.fetchUserListSuccess]: (state, actions) => {
      return {
        ...state,
        usersList: actions.payload
      };
    }
    //rest of reducer go here
  },
  initialState
);
