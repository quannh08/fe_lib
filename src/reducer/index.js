import {combineReducers} from "redux";
import bookReducer from "./books";

const allReducer = combineReducers({
    bookReducer
})

export default allReducer