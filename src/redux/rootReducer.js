import { combineReducers } from "redux";
import authReducer from "./authReducer";
import commonReducer from "./commonReducer";
import authorsReducer from "./authorsReducer";

const rootReducer = combineReducers({
  commonApp: commonReducer,
  authApp: authReducer,
  authorsApp: authorsReducer,
});

export default rootReducer;
