import { GET_MYAPPS, DELETE_MYAPP, ADD_MYAPP } from "../actions/types.js";

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
    case DELETE_MYAPP:
      return {
        ...state,
        myApps: state.myApps.filter(myApp => myApp.id != action.payload)
      };
    case ADD_MYAPP:
      return {
        ...state,
        myApps: [...state.myApps, action.payload]
      };
    default:
      return state;
  }
}
