import "materialize-css/dist/css/materialize.min.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import Constants from "./constants/Constants";
import configureStore from "./configuration/store";
import AppRouter, { history } from "./routers/AppRouter";
import "./css/App.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-login-area">
          <div className="app-login-title-area">
            <a href={`${Constants.server_api}/auth/google`}>
              Sign In With Google
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
