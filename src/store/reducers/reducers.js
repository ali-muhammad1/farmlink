import * as Constants from "../constants/constants";

const inititalState = {
  isAuthenticated: false,
};

export default function loginReducer(state = inititalState, action) {
  switch (action.type) {
    case Constants.GET_LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: true,
      });

    default:
      return state;
  }
}
