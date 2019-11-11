import React, { Component } from 'react'
import clsx from 'clsx';
import { Typography, Link } from '@material-ui/core';
import {withStyles} from '@material-ui/core';
import styles from './styles';

class Footer extends Component {
  render() {
    const {classes, className, ...rest} = this.props;
    return (
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Typography variant="body1">
          &copy;{' '}
          <Link
            component="a"
            href="http://uit.edu.vn/"
            target="_blank"
          >
            University of Information technology
          </Link>
          . 2019
        </Typography>
        <Typography variant="caption">
          Created with love for UIT. 
        </Typography>
      </div>
    );
  }
}





export default withStyles(styles)(Footer);
