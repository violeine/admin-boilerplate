import freeze from "deep-freeze";
import * as actions from "./actions";
import { handleActions } from "redux-actions";

const initialState = freeze({
  //init state go here
  open: false,
  time: 1000,
  variant: "",
  message: ""
});

export const name = "SnackBar";
export default handleActions(
  {
    [actions.popupSnackBar]: (state, action) => {
      return freeze({
        ...state,
        open: true,
        ...action.payload
      });
    },
    [actions.closeSnackBar]: (state, action) => {
      return freeze({
        ...state,
        open: false
      });
    }
  },
  initialState
);
