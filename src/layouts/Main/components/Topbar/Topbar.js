import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Badge,
  Hidden,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  render() {
    const { classes, className, onSidebarOpen, ...rest } = this.props;
    const { notifications } = this.state;
    return (
      <AppBar {...rest} className={clsx(classes.root, className)}>
        <Toolbar>
          <RouterLink to="/">
            <img alt="Logo" src="/images/logos/logo--white.svg" />
          </RouterLink>
          <div className={classes.flexGrow} />
          <Hidden mdDown>
            <IconButton color="inherit">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button className={classes.signOutButton} color="inherit">
              <InputIcon />
              <Typography variant="h5" color="inherit">
                &nbsp;SIGN OUT
              </Typography>
            </Button>
          </Hidden>
          <Hidden lgUp>
            <IconButton color="inherit" onClick={onSidebarOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Topbar);
