import Constants from "../constants/Constants";
let initialState = {
  isUserLogin: null,
  user: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.actions.FETCH_USER:
      return {
        isUserLogin: !!(action.payload && action.payload.googleId) || false,
        user: action.payload
      };
    case Constants.actions.USER_LOGOUT:
      return {
        isUserLogin: false,
        user: {}
      };
    default:
      return state;
  }
};
