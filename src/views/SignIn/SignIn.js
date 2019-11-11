import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import validate from "validate.js";
import { Button, TextField, Link, Typography, Card, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Minimal as MinimalLayout } from "../../layouts";

const schema = {
  user: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128
    }
  }
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      values: {},
      touched: {},
      errors: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.values !== this.state.values) {
      const errors = validate(this.state.values, schema);
      this.setState({
        ...this.state,
        isValid: errors ? false : true,
        errors: errors || {}
      });
    }
  }

  handleChange = event => {
    const { values, touched } = this.state;
    event.persist();
    this.setState({
      ...this.state,
      values: {
        ...values,
        [event.target.name]:
          event.target.type === "checkbox" ? event.target.checked : event.target.value
      },
      touched: {
        ...touched,
        [event.target.name]: true
      }
    });
  };

  handleSignIn = event => {
    const { history } = this.props;
    event.preventDefault();
    history.push("/");
  };

  hasError = field => (this.state.touched[field] && this.state.errors[field] ? true : false);

  render() {
    const { classes } = this.props;
    const { errors, values, isValid } = this.state;
    return (
      <MinimalLayout>
        <div className={classes.root}>
          <form className={classes.form} onSubmit={this.handleSignIn}>
            <Card>
              <CardContent>
                <Typography className={classes.title} variant="h2">
                  Sign in
                </Typography>
                <TextField
                  className={classes.textField}
                  error={this.hasError("user")}
                  fullWidth
                  helperText={this.hasError("user") ? errors.user[0] : null}
                  label="Username"
                  name="user"
                  onChange={this.handleChange}
                  type="text"
                  value={values.user || ""}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={this.hasError("password")}
                  fullWidth
                  helperText={this.hasError("password") ? errors.password[0] : null}
                  label="Password"
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                  value={values.password || ""}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
                <Typography color="textSecondary" variant="body1">
                  Don't have an account?{" "}
                  <Link component={RouterLink} to="/sign-up" variant="h6">
                    Sign up
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </form>
        </div>
      </MinimalLayout>
    );
  }
}

export default withStyles(styles)(SignIn);
