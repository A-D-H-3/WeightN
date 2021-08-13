import { UPDATE_LOG } from "../actionTypes";

const initialState = {
  logWeight: 0,
  logHeight: "",
};

export default function (state = initialState, action) {
  if (action.type === UPDATE_LOG) {
    return {
      logWeight: action.payload.logWeight,
      logHeight: action.payload.logHeight,
    };
  }
  return state;
}
