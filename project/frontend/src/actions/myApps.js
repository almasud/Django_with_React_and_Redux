import axios from "axios";
import { GET_MYAPPS, DELETE_MYAPP, ADD_MYAPP } from "./types";

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

// Get MyApp
export const deleteMyApp = id => dispatch => {
  axios
    .delete(`http://127.0.0.1:8000/api/my_apps/${id}/`)
    .then(res => {
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
      dispatch({
        type: ADD_MYAPP,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
