import {connect} from 'react-redux';
import DeviationShow from './DeviationShow';
import { getDeviation } from '../../../actions/deviations_actions';
import { getUser } from '../../../actions/users.actions';
import { createComment, destroyComment, clearAllComments } from '../../../actions/comments_actions';
import { createFavorite, destroyFavorite, clearAllFavorites } from '../../../actions/favorites_actions';


const mSTP = (state, ownProps) => {
    const deviation = state.entities.deviations[ownProps.match.params.id];
    let favorited = false
    let favoriteId = null
    const favArr = Object.values(state.entities.favorites)
    //this is to see if current user is inside
    for (let i=0; i < favArr.length; i++) {
      if ( favArr[i].deviation_id.toString() === ownProps.match.params.id ) {
        favorited = true
        favoriteId = favArr[i].id
      }
    }
    return {
        deviation: deviation,
        artist: deviation && state.entities.users[deviation.artist_id],
        comments: Object.values(state.entities.comments),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        favorites: state.entities.favorites,
        favorited: favorited,
        favoriteId: favoriteId,
    }
};

const mDTP = dispatch => ({
    getDeviation: (deviationId) => dispatch(getDeviation(deviationId)),
    getUser: (userId) => dispatch(getUser(userId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(destroyComment(commentId)),
    clearAllComments: () => dispatch(clearAllComments()),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favorite_params) => dispatch(destroyFavorite(favorite_params)),
    clearAllFavorites: () => dispatch(clearAllFavorites()),
});

export default connect(mSTP, mDTP)(DeviationShow);