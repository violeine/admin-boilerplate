import React, { forwardRef, Component } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { List, ListItem, Button} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from "@material-ui/core";

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

class SidebarNav extends Component {
  render() {
    const { classes, pages, className, ...rest } = this.props;
    return (
      <List
        {...rest}
        className={clsx(classes.root, className)}
      >
        {pages.map(page => (
          <ListItem
            className={classes.item}
            disableGutters
            key={page.title}
          >
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href}
            >
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(SidebarNav);
