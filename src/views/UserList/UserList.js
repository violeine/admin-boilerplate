import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

////////////////////
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { name } from "./reducers";
import * as action from "./actions";
//////////////////////////////////////////
import { UsersToolbar, UsersTable, UsersForm } from "./components";
import mockData from "./data";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = props => {
  const classes = useStyles();

  const [users] = useState(mockData);
  const { formOpen } = props;
  return (
    <div className={classes.root}>
      <UsersToolbar {...props} />
      <div className={classes.content}>
        {formOpen ? <UsersForm {...props} /> : null}
        <UsersTable users={users} {...props} />
      </div>
    </div>
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
)(UserList);
