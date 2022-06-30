import todoReducer from "./todoReducer";
import listReducer from "./listReducer";

import { combineReducers } from "redux";

const rootReducer= combineReducers({todoReducer,listReducer})
export default rootReducer;