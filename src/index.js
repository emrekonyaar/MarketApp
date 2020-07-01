import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/root/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./Redux/reducers/configureStore";
import "alertifyjs/build/css/alertify.min.css";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
