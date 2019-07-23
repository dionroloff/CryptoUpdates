//Platform is a module that detects the platform in which the app is running.
import { Platform } from "react-native";

//createStore needed to create initial store, which is passed to Provider
//applyMiddleware will allow thunk actions, promise, and logger
//compose() composes functions from right to left
import { createStore, applyMiddleware, compose } from "redux";


import devTools from "remote-redux-devtools";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";

import RootReducer from "./Reducers";

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      name: Platform.OS,
      hostname: "localhost",
      port: 5678
    })
  )
);

export default Store;
