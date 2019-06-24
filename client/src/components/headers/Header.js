import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Constants from "../../constants/Constants";
import * as actions from "../../actions/auth/authActions";
import Popup from "../MgComponents/Popup";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogin: false,
      isHeaderPopupOpen: false
    };
  }

  showPopup = () => {
    this.setState({ isHeaderPopupOpen: true });
  };

  userLogout = () => {
    this.props.logout();
    // this.props.history.push("/");
  };

  static getDerivedStateFromProps(nextProps, previous) {
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
            <span
              // onClick={this.userLogout}
              className="nav-header-right-img"
            >
              <img
                src={this.props.auth.user.photos[0]["value"]}
                style={{ borderRadius: "50%" }}
                height="50"
                width="50"
                onClick={this.showPopup}
                id="nave-user-profile"
              />
              {/* <div
                class="mg-popup"
                id="header-popup-user-Profile"
                style={{ top: 10 }}
              >
                Mahesh
              </div> */}
              <Popup
                id="header-popup-user-Profile"
                targetId="nave-user-profile"
                isOpen={this.state.isHeaderPopupOpen}
              >
                ggfffhhh
              </Popup>
              {/* <a>Log out</a> */}
            </span>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="navbar-fixed">
          <div className="left brand-logo mg-padding-left">
            {" "}
            <Link to="/">Emaily</Link>
          </div>
          <ul className="right">{this.renderContent()}</ul>
        </div>
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
