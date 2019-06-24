import "materialize-css/dist/css/materialize.min.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import Constants from "./constants/Constants";
import configureStore from "./configuration/store";
// import AppRouter, { history } from "./routers/AppRouter";
import SampleRoute, { history } from "./routers/SampleRoute";
import GifLoadingPage from "./components/Loading/GifLoading";
import * as actions from "./actions/auth/authActions";
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
    {/* <AppRouter /> */}
    <SampleRoute />
  </Provider>
);

let hasrender = false;
const renderApp = () => {
  if (!hasrender) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasrender = true;
  }
};

// store.dispatch(actions.fetchUser);

renderApp();

// ReactDOM.render(
//   <GifLoadingPage component={jsx} />,
//   document.getElementById("root")
// );

// store.dispatch(actions.fetchUser).then(() => {
//   console.log();
// });

// let promise = new Promise(function(resolve, reject) {
//   resolve(store.dispatch(actions.fetchUser));
// });

// promise.then(value => {
//   console.log("SAVED Called" + value);
// });

if (store.auth && store.auth.isUserLogin) {
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
