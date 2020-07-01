import {connect} from 'react-redux';
import DeviationShow from './DeviationShow';
import { getDeviation } from '../../../actions/deviations_actions';
import { getUser } from '../../../actions/users.actions';
import { createComment, getAllComments, destroyComment, clearAllComments } from '../../../actions/comments_actions';


const mSTP = (state, ownProps) => {
    const deviation = state.entities.deviations[ownProps.match.params.id];
    return {
        deviation: deviation,
        artist: deviation && state.entities.users[deviation.artist_id],
        comments: Object.values(state.entities.comments),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
    }
};

const mDTP = dispatch => ({
    getDeviation: (deviationId) => dispatch(getDeviation(deviationId)),
    getUser: (userId) => dispatch(getUser(userId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(destroyComment(commentId)),
    clearAllComments: () => dispatch(clearAllComments()),
});

export default connect(mSTP, mDTP)(DeviationShow);