import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import theme from "./theme";
import Routes from "./Routes";
import configureStore from "./stores";
import "./assets/scss/index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

const browserHistory = createBrowserHistory();
export const { store, history } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
              <Routes />
            </Router>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
