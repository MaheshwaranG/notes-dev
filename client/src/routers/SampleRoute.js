import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import * as actions from "../actions/auth/authActions";
import Header from "../components/headers/Header";
import DefaultPage from "../components/contents/DefaultPage";
import Dashboard from "../components/contents/Dashboard";
import SurveyNew from "../components/contents/SurveyNew";
import Loaders from "../components/Loading/GifLoading";
import PrivateRoute from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const history = createHistory();

class SampleRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      isUserLogin: false
    };
  }
  componentWillMount() {
    this.props.fetchUser().then(data => {
      this.setState({ isValidated: true });
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isUserLogin !== nextProps.isUserLogin) {
      this.setState({ isUserLogin: nextProps.isUserLogin });
    }
  }
  render() {
    return (
      <Router history={history}>
        {this.state.isValidated ? (
          <div>
            <Header />
            <Switch>
              {/* <Route exact={true} path="/" component={DefaultPage} /> */}
              {/* <Route exact={true} path="/Dashboard" component={Dashboard} />
            <Route exact={true} path="/surveys/new" component={SurveyNew} /> */}
              <PublicRoute
                exact={true}
                isUserLogin={this.state.isUserLogin}
                path="/"
                component={DefaultPage}
              />
              <PrivateRoute
                exact={true}
                path="/Dashboard"
                component={Dashboard}
              />
              <PrivateRoute
                exact={true}
                path="/surveys/new"
                component={SurveyNew}
              />
            </Switch>
          </div>
        ) : (
          <div>
            <Route exact={true} path="/" component={Loaders} />
          </div>
        )}
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
