import axios from "axios";
import Constants from "../../constants/Constants";

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`/api/currentUser`);
  dispatch({
    type: Constants.actions.FETCH_USER,
    payload: res.data
  });
};
