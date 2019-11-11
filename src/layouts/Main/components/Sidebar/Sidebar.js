import React, { Component } from "react";
import clsx from "clsx";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import UserIcon from "@material-ui/icons/People";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { SidebarNav, Profile, SignOut } from "./components";

const pages = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />
  },
  {
    title: "Users",
    href: "/Users-list",
    icon: <UserIcon />
  }
];

class Sidebar extends Component {
  render() {
    const { classes, open, variant, onClose, className, ...rest } = this.props;
    return (
      <div>
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawer }}
          onClose={onClose}
          open={open}
          variant={variant}
        >
          <div {...rest} className={clsx(classes.root, className)}>
            <Profile />
            <Divider className={classes.divider} />
            <SidebarNav className={classes.nav} pages={pages} />
            <SignOut />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
