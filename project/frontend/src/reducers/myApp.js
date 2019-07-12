import { GET_MYAPPS } from "../actions/types.js";

const initialState = {
  myApps: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MYAPPS:
      return {
        ...state,
        myApps: action.payload
      };
    default:
      return state;
  }
}
