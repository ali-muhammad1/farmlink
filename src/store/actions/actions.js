import * as Constants from "../constants/constants";

export const loginUser = (cred) => (dispatch) =>
  new Promise(function(resolve, reject) {
    if (cred.email === "test@gmail.com" && cred.password === "test") {
      dispatch({
        type: Constants.GET_LOGIN,
      });
      resolve("true");
    } else {
      reject("false");
    }
  });
