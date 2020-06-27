import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import deviationsReducer from './deviations_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    deviations: deviationsReducer 
});

export default entitiesReducer;