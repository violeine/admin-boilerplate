import React, { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Avatar, Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core';
import styles from './styles'

const user = {
  name: 'Admin Name ',
  avatar: 'A',
  bio: 'administrator'
};

class Profile extends Component {
  render() {
  const { classes, className, ...rest } = this.props;
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        // src={user.avatar}
        to="/settings"
      >
        {user.avatar}
      </Avatar>
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
  }
}


export default withStyles(styles)(Profile);
