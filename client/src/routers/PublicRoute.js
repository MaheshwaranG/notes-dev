import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

export const PublicRoute = ({ isUserLogin, component: Component, ...rest }) => {
  // console.log("Public Route === " + JSON.stringify({ ...rest }));
  // console.log("Public Route Is user Login " + isUserLogin);
  return (
    <Route
      {...rest}
      component={props =>
        isUserLogin ? <Redirect to="/Dashboard" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state, props) => ({
  isUserLogin: state.auth.isUserLogin
});

export default connect(mapStateToProps)(connect);
