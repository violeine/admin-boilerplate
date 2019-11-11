import React, { Component } from "react";
import { Topbar } from "./components";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

class Minimal extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <Topbar />
        <main className={classes.content}>{children}</main>
      </div>
    );
  }
}

export default withStyles(styles)(Minimal);
