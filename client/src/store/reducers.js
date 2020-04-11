import { combineReducers } from "redux";
import { loginReducer as login } from "./login/reducers";
import { userReducer as user } from "./User/reducers";

export default combineReducers({
  login,
  user
});
