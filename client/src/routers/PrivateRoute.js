import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

/* function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isUserLogin
          ? // <Component {...props} />

            //     <Redirect to="/dashboard" />
            null
          : //     <Redirect
            //     to={{
            //       pathname: "/login",
            //       state: { from: props.location }
            //     }}
            //   />
            // <Redirect to="/" />
            null
      }
    />
  );
}
*/

export const PrivateRoute = ({
  isUserLogin,
  component: Component,
  ...rest
}) => {
  // console.log("Private Route === " + JSON.stringify({ ...rest }));
  // console.log("Private Route Is user Login " + isUserLogin);
  return (
    <Route
      {...rest}
      component={props =>
        isUserLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = (state, props) => ({
  isUserLogin: state.auth.isUserLogin
});

export default connect(mapStateToProps)(PrivateRoute);
