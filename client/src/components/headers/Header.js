import React, { Component } from "react";
import { connect } from "react-redux";
import Constants from "../../constants/Constants";

class Header extends Component {
  renderContent() {
    switch (this.props.auth.isUserLogin) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={`${Constants.server_api}/auth/google`}>Log in </a>
          </li>
        );
      default:
        return (
          <li>
            <a href={`${Constants.server_api}/api/logout`}>Log out </a>
          </li>
        );
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo mg-padding-left">Emaily</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
