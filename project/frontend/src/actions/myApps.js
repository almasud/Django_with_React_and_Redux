import axios from "axios";
import { GET_MYAPPS, DELETE_MYAPP, ADD_MYAPP } from "./types";
import { createMessage, errorMessage } from "./messages";
import { tokenConfig } from "./auth";

// Get MyApps
export const getMyApps = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/my_apps/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_MYAPPS,
        payload: res.data
      });
    })
    .catch(err => dispatch(errorMessage(err.response.data, err.response.status)));
};

// Delete MyApp
export const deleteMyApp = id => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/my_apps/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteMyApp: "MyApp Deleted!" }));
      dispatch({
        type: DELETE_MYAPP,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Add MyApps
export const addMyApp = myApp => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/my_apps/", myApp, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addMyApp: "MyApp Added!" }));
      dispatch({
        type: ADD_MYAPP,
        payload: res.data
      });
    })
    .catch(err => dispatch(errorMessage(err.response.data, err.response.status)));
};
