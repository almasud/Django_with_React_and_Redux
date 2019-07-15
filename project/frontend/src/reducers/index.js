import { combineReducers } from "redux";
import myApps from "./myApps";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  myApps,
  errors,
  messages
});
