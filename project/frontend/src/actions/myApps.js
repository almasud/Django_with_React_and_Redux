import axios from "axios";
import { GET_MYAPPS } from "./types";

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
