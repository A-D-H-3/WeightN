import { UPDATE_GRAPH_LOG } from "../actionTypes";

const initialState = {
  userData: [],
};

export default function updateLogReducer(state = initialState, action) {
  if (action.type === UPDATE_GRAPH_LOG) {
    return {
      userData: action.payload.userData,
    };
  }
  return state;
}