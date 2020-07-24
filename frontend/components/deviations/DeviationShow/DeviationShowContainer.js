import {connect} from 'react-redux';
import DeviationShow from './DeviationShow';
import { getDeviation } from '../../../actions/deviations_actions';
import { getUser } from '../../../actions/users.actions';
import { createComment, getAllComments, destroyComment, clearAllComments } from '../../../actions/comments_actions';
import { createFavorite, destroyFavorite, clearAllFavorites } from '../../../actions/favorites_actions';


const mSTP = (state, ownProps) => {
    const deviation = state.entities.deviations[ownProps.match.params.id];
    let favorited = false
      //this is to see if current user is inside
      for (let i=0; i < state.entities.favorites.length; i++) {
        if (state.session.id === state.entities.favorites[i].user_id) {favorited = true};
      }
    return {
        deviation: deviation,
        artist: deviation && state.entities.users[deviation.artist_id],
        comments: Object.values(state.entities.comments),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        favorites: state.entities.favorites,
        favorited: favorited
    }
};

const mDTP = dispatch => ({
    getDeviation: (deviationId) => dispatch(getDeviation(deviationId)),
    getUser: (userId) => dispatch(getUser(userId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(destroyComment(commentId)),
    clearAllComments: () => dispatch(clearAllComments()),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(destroyFavorite(favoriteId)),
    clearAllFavorites: () => dispatch(clearAllFavorites()),
});

export default connect(mSTP, mDTP)(DeviationShow);