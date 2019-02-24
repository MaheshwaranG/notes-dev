import Constants from "../constants/Constants";
let initialState = {};
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case Constants.actions.FETCH_USER:
      return {
        isUserLogin: !!(action.payload && action.payload.googleId) || false,
        ...action.payload
      };
    default:
      return state;
  }
};
