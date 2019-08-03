import axios from "axios";
import { errorMessage } from "./messages";
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR
} from "./types";

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
    // Load user
    dispatch({ type: USER_LOADING });

    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "content-type": "application/json"
        }
    }

    // If token, add to headers config
    if (token) {
        config.headers["authorization"] = `token ${token}`;
    }

    axios.get("/api/auth/user", config)
        .then(res => {
            dispatch({
                action: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(errorMessage(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        });

}