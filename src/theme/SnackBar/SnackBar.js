import React, { useEffect } from "react";
import { Snackbar } from "@material-ui/core";
import SnackbarContent from "./Components/SnackbarContentWrapper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "./actions.js";
import { name } from "./reducers";

const SnackBar = props => {
  const { open, time, variant, message } = props;
  const { closeSnackBar } = props.actions;
  const handleClose = () => {
    closeSnackBar();
  };
  useEffect(() => {
    console.log(open, time, variant, message);
  });
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      onClose={handleClose}
      open={open}
      autoHideDuration={time}
    >
      <SnackbarContent variant={variant} message={message} onClose={handleClose} />
    </Snackbar>
  );
};

const mapStateToProps = state => {
  return {
    ...state[name]
  };
};
const mapDispatchToProps = dispatch => {
  const actions = {
    ...action
  };
  return { actions: bindActionCreators(actions, dispatch) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackBar);
