import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../actions/users.actions';
import {RECEIVE_ALL_COMMENTS} from '../actions/comments_actions';
import {RECEIVE_DEVIATION} from '../actions/deviations_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_DEVIATION:
            return {...action.users, ...state} //...state prevents overiding
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
};