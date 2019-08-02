import { CREATE_MESSAGE, GET_ERRORS } from "./types";

// Create Message
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

// Return errors
export const errorMessage = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  }
}
