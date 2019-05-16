import React from "react";
import { connect } from "react-redux";

const GifLoadingPage = () => {
  return (
    <div className="loader">
      <img className="loader__image" src="/images/loader.gif" />
    </div>
  );
};

// const mapStateToprops = state => ({
//   isUserLogin: state.auth.isUserLogin
// });

// export default connect(mapStateToprops)(GifLoadingPage);

export default GifLoadingPage;
