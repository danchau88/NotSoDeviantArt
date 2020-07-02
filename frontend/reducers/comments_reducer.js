import {RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_ALL_COMMENTS, CLEAR_ALL_COMMENTS} from '../actions/comments_actions';
import {RECEIVE_DEVIATION} from '../actions/deviations_actions';


export default (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_DEVIATION:
            return action.comments
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            nextState[action.commentId]
            return nextState;
        case CLEAR_ALL_COMMENTS:
            return {};
        default:
            return state;
    }
}