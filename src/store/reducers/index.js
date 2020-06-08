import { combineReducers } from "redux";
import loginReducer from "./reducers";

export default combineReducers({
  entities: loginReducer,
});
