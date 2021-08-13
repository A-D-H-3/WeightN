import { UPDATE_LOG, RESET_FLAG } from "../actionTypes";

const initialState = {
  logWeight: 0,
  logHeight: "",
  weighNflag: null,
};

export default function (state = initialState, action) {
  if (action.type === UPDATE_LOG) {
    return {
      logWeight: action.payload.logWeight,
      logHeight: action.payload.logHeight,
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
