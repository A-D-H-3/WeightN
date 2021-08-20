import { UPDATE_LOG, RESET_FLAG } from "../actionTypes";

const initialState = {
  logWeight: 0,
  logHeightFt: 0,
  logHeightIn: 0,
  weighNflag: null,
};

export default function updateLogReducer(state = initialState, action) {
  if (action.type === UPDATE_LOG) {
    return {
      logWeight: action.payload.logWeight,
      logHeightFt: action.payload.logHeightFt,
      logHeightIn: action.payload.logHeightIn,
      weighNflag: false,
    };
  }
  if (action.type === RESET_FLAG) {
    return {
      ...state,
      weighNflag: null,
    };
  }
  return state;
}
