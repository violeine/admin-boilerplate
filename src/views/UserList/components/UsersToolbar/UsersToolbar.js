import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const handleClick = () => {
    props.actions.toggleForm();
    props.actions.login();
  };
  const handleFetchData = () => {
    props.actions.fetchUsersList();
  };
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <Typography variant="h3">Manage User</Typography>
      </div>
      <div className={classes.row}>
        <Button color="primary" variant="contained" onClick={handleClick}>
          Add user
        </Button>
        <Button color="primary" variant="contained" onClick={handleFetchData}>
          Fetch Data
        </Button>
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
