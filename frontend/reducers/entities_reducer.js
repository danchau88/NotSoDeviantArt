import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import deviationsReducer from './deviations_reducer';
import commentsReducer from './comments_reducer';
import favoritesReducer from './favorites_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    deviations: deviationsReducer,
    comments:  commentsReducer,
    favorites: favoritesReducer,
});

export default entitiesReducer;