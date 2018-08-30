import { combineReducers } from "redux";

export default combineReducers({
    viewAccount: require("./viewAccount").reducer
});
