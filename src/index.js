import React from "react";
import ReactDOM from "react-dom";
import HAPPY_BIRTHDAY_GINKO from "HAPPY_BIRTHDAY_GINKO";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HAPPY_BIRTHDAY_GINKO />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
