import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import deviationsErrorsReducer from './deviations_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  deviations: deviationsErrorsReducer
});

export default errorsReducer;