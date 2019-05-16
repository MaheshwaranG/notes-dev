import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Constants from "../../constants/Constants";
import * as actions from "../../actions/auth/authActions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogin: false
    };
  }

  userLogout = () => {
    this.props.logout();
    console.log("Test Props :  " + JSON.stringify(this.props));
    // this.props.history.push("/");
  };

  static getDerivedStateFromProps(nextProps, previous) {
    console.log(
      " willRecisiver " +
        JSON.stringify(nextProps) +
        "\n -------------" +
        JSON.stringify(previous)
    );
    console.log(
      "Example " + nextProps.auth.isUserLogin + " ++ " + previous.isUserLogin
    );
    let isUserLogin = nextProps.auth.isUserLogin;
    return { isUserLogin: nextProps.auth.isUserLogin };
  }

  renderContent() {
    switch (this.state.isUserLogin) {
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
            <span onClick={this.userLogout}>Log out </span>
          </li>
        );
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="left brand-logo mg-padding-left">
            {" "}
            <Link to="/">Emaily</Link>
          </div>
          <ul className="right">{this.renderContent()}</ul>
        </div>
        (this.state.isUserLogin ? {console.log("**************")} : null)
      </nav>
    );
    // return this.state.isUserLogin ? (
    //   <nav>
    //     <div className="nav-wrapper">
    //       <div className="left brand-logo mg-padding-left">
    //         {" "}
    //         <Link to="/">Emaily</Link>
    //       </div>
    //       <ul className="right">{this.renderContent()}</ul>
    //     </div>
    //   </nav>
    // ) : (
    //   <GifLoadingPage />
    // );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actions.userLogout())
});

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
