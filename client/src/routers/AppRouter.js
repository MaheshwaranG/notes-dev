import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import * as actions from "../actions/auth/authActions";
import PublicRouter from "./PublicRoute";
import PrivateRouter from "./PrivateRoute";
import Header from "../components/headers/Header";
import DefaultPage from "../components/contents/DefaultPage";
import Dashboard from "../components/contents/Dashboard";
import SurveyNew from "../components/contents/SurveyNew";

export const history = createHistory();

class AppRouter extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRouter exact={true} path="/" component={DefaultPage} />
            <PrivateRouter
              exact={true}
              path="/Dashboard"
              component={Dashboard}
            />
            <PrivateRouter
              exact={true}
              path="/surveys/new"
              component={SurveyNew}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(actions.fetchUser())
});

export default connect(
  null,
  mapDispatchToProps
)(AppRouter);
