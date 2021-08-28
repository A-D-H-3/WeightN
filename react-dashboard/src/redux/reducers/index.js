// we need this method because whether it's a single reducer or multiple ones, they must all be exported using it
import { combineReducers } from "redux";
import username from "./username";
import updateLog from "./updateLog";
import graphLog from "./graphLog";

export default combineReducers({ username, updateLog, graphLog });
