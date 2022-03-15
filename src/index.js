import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./index.scss";

import { store } from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
