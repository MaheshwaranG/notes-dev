import Constants from "../constants/Constants";
let initialState = {
  isUserLogin: null,
  user: null
};
export default (state = initialState, action) => {
  console.log("Start Point \n" + action);
  switch (action.type) {
    case Constants.actions.FETCH_USER:
      return {
        isUserLogin: !!(action.payload && action.payload.googleId) || false,
        user: action.payload
      };
    case Constants.actions.USER_LOGOUT:
      console.log(action);
      return {
        isUserLogin: false,
        user: {}
      };
    default:
      return state;
  }
};
