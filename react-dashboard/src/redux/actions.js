import { GET_USERNAME, UPDATE_LOG, RESET_FLAG, UPDATE_GRAPH_LOG } from "./actionTypes";

export const updateUsername = (username) => {
  return {
    // every action creator must return an action type
    type: GET_USERNAME,
    // it's common pracice to return values on a `payload` object but this is not a strict requirement
    payload: {
      username,
    },
  };
};

export const updateLog = (logWeight, logHeightFt, logHeightIn, bmi) => {
  return {
    type: UPDATE_LOG,
    payload: {
      logWeight,
      logHeightFt,
      logHeightIn,
      bmi,
    },
  };
};

export const updateFlag = () => {
  return { type: RESET_FLAG };
};

export const updateGraphLog = (userData) => {
  return {
    type: UPDATE_GRAPH_LOG,
    payload: {
      userData,
    },
  };
};
// an action creator is somewhat of a misnomer because its purpose is to initiate or fire an action that already exists, not create a new one from scratch
// the action that it initiates is the reducer function we configured in step 3
// action creators usually return a value, on the `payload` object, but don't have to
// you can think of an action creator as the link between react and redux
// action creators are necessary to write to the store (we do not need them to read from the store)
