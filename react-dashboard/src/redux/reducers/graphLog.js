import { UPDATE_GRAPH_LOG } from "../actionTypes";

const initialState = {
  userData: [],
  x: [],
  y: [],
};

export default function updateLogReducer(state = initialState, action) {
  if (action.type === UPDATE_GRAPH_LOG) {
    return {
      userData: action.payload.userData,
      x: action.payload.x,
      y: action.payload.y,
    };
  }
  return state;
}