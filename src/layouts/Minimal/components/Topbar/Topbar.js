import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { AppBar, Toolbar } from '@material-ui/core';
import styles from "./styles";
import { withStyles } from "@material-ui/core";



class Topbar extends Component {
  render() {
    const {classes, className, ...rest } = this.props;
    return (
      <AppBar
        {...rest}
        className={clsx(classes.root, className)}
        color="primary"
        position="fixed"
      >
        <Toolbar>
          <RouterLink to="/">
            <img
              alt="Logo"
              src="/images/logos/logo--white.svg"
            />        
          </RouterLink>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Topbar);
