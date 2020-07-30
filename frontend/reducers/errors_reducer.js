import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import deviationsErrorsReducer from './deviations_errors_reducer';
import commentsErrorsReducer from './comments_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  deviations: deviationsErrorsReducer,
  comments: commentsErrorsReducer,
});

export default errorsReducer;