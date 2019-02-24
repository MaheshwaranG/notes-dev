import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import * as actions from "../actions/auth/authActions";
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
          <Header />
          <Switch>
            <Route exact={true} path="/" component={DefaultPage} />
            <Route exact={true} path="/Dashboard" component={Dashboard} />
            <Route exact={true} path="/surveys/new" component={SurveyNew} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(AppRouter);
