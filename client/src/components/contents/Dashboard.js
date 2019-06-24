import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth/authActions";

class Dashboard extends Component {
  componentDidMount() {
    console.log(JSON.stringify(this.props.user));
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>User Home Page</h1>
        <h3>welcome User!!!</h3>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
