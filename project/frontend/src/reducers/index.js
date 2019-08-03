import { combineReducers } from "redux";
import myApps from "./myApps";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  myApps,
  errors,
  messages,
  auth
});
