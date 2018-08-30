import { combineReducers } from "redux";

export default combineReducers({
    buttonClicked: require("./buttonClicked").reducer
});
