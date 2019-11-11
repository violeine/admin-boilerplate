import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import {
  Dashboard as DashboardView,
  NotFound as NotFoundView,
  SignIn as SignInView,
  UsersList as UsersListView
} from "./views";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <RouteWithLayout component={DashboardView} exact layout={MainLayout} path="/dashboard" />
        <RouteWithLayout component={UsersListView} exact layout={MainLayout} path="/users-list" />
        <Route path="/login" exact component={SignInView} />
        <RouteWithLayout component={NotFoundView} exact layout={MinimalLayout} path="/not-found" />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default Routes;
