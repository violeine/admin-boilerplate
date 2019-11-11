import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware, connectRouter } from "connected-react-router";
import makeRootReducer from "./reducers";
import sagas from "./sagas";
import { createBrowserHistory, createMemoryHistory } from "history";

// A nice helper to tell us if we're on the server
export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const history = isServer
  ? createMemoryHistory({
      initialEntries: ["/"],
    })
  : createBrowserHistory();

export default () => {
  // Create a history depending on the environment

  const sagaMiddleware = createSagaMiddleware();
  const middleware = routerMiddleware(history);
  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === "development",
  });

  // Do we have preloaded state available? Great, save it.
  const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, middleware, loggerMiddleware),
);

  const store = createStore(
    connectRouter(history)(makeRootReducer(history)),
    initialState,
    enhancer,
    // compose(applyMiddleware(sagaMiddleware, middleware, loggerMiddleware))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers");
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(sagas);

  return {
    store,
    history,
  };
};
