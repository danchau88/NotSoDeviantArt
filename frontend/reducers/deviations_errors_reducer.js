import { RECEIVE_DEVIATION, RECEIVE_DEVIATION_ERRORS } from '../actions/deviations_actions';
import { CLEAR_ERRORS } from '../actions/errors_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_DEVIATION:
            return [];
        case RECEIVE_DEVIATION_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};