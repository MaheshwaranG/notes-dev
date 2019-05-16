import React, { Component } from "react";
import { Link } from "react-router-dom";

class DefaultPage extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Default Page</h1>
        <Link to="/Dashboard"> DashBoard </Link>
        <h3>Colllect your user information</h3>
      </div>
    );
  }
}

export default DefaultPage;
