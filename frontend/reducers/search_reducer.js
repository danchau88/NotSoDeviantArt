import {SEARCH_DEVIATIONS} from '../actions/search_actions';

const initialState = {
    title: '',
    deviations: [],
    loading: false,
    deviation: []
};

export default (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case SEARCH_DEVIATIONS:
            return {
                ...state,
                title: action.title,
                loading: false
            };
        default:
            return state;
    }
}