import axios from "axios";
import { GET_MYAPPS, DELETE_MYAPP, ADD_MYAPP, GET_ERRORS } from "./types";
import { createMessage } from "./messages";

// Get MyApps
export const getMyApps = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/my_apps/")
    .then(res => {
      dispatch({
        type: GET_MYAPPS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Delete MyApp
export const deleteMyApp = id => dispatch => {
  axios
    .delete(`http://127.0.0.1:8000/api/my_apps/${id}/`)
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
export const addMyApp = myApp => dispatch => {
  axios
    .post("http://127.0.0.1:8000/api/my_apps/", myApp)
    .then(res => {
      dispatch(createMessage({ addMyApp: "MyApp Added!" }));
      dispatch({
        type: ADD_MYAPP,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
