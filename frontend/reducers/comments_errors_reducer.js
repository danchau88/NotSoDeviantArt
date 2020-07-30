import { RECEIVE_COMMENT, RECEIVE_COMMENT_ERRORS } from '../actions/deviations_actions';
import { CLEAR_ERRORS } from '../actions/errors_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_COMMENT:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};