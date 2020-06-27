import {RECEIVE_ALL_DEVIATIONS, RECEIVE_DEVIATION, REMOVE_DEVIATION} from '../actions/deviations_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_DEVIATIONS:
            return action.deviations;
        case RECEIVE_DEVIATION:
            nextState[action.deviation.id] = action.deviation;
            return nextState;
        case REMOVE_DEVIATION:
            delete nextState[action.deviationId];
            return nextState;
        default:
            return state;
    }
};