import axios from "axios";
import Constants from "../../constants/Constants";

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`/api/currentUser`);
  Promise.resolve(
    dispatch({
      type: Constants.actions.FETCH_USER,
      payload: res.data
    })
  );
  // return Promise.resolve();
};

export const userLogout = () => {
  return function(dispatch) {
    axios.get("/api/logout").then(res => {
      console.log(JSON.stringify(res));
      if (res.data.status && res.data.status === "logout") {
        dispatch({ type: Constants.actions.USER_LOGOUT });
      }
    });
  };
};
