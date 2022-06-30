import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
//if we have many reducers in our project
export default combineReducers({
    counter: counterReducer,
    user: userReducer,
})