import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import * as actions from "../actions/auth/authActions";
import Header from "../components/headers/Header";
import DefaultPage from "../components/contents/DefaultPage";
import Dashboard from "../components/contents/Dashboard";
import SurveyNew from "../components/contents/SurveyNew";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

class SampleRoute extends Component {
  constructor(props) {
    super(props);
  }
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
            {/* <Route exact={true} path="/Dashboard" component={Dashboard} />
            <Route exact={true} path="/surveys/new" component={SurveyNew} /> */}
            <PrivateRoute
              exact={true}
              path="/Dashboard"
              component={Dashboard}
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

const mapStateToProps = state => ({
  isUserLogin: state.auth.isUserLogin
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleRoute);
