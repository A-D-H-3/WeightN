// we need this method because whether it's a single reducer or multiple ones, they must all be exported using it
import { combineReducers } from "redux";
import username from './username';

export default combineReducers({ username });