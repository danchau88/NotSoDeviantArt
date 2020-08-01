import { connect } from 'react-redux';
import FavoritesPage from './FavoritesPage';
import { getUser } from '../../actions/users.actions';
import { destroyFavorite, receiveFavoriteDeviations } from '../../actions/favorites_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  favorites: Object.values(state.entities.favorites),
  // favoriteDeviations: Object.values(state.entities.favorite_deviations),
  deviations: state.entities.deviations,
});

const mDTP = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId)),
  receiveFavoriteDeviations: deviations => dispatch(receiveFavoriteDeviations(deviations)) ,
  destroyFavorite: (favorite_params) => dispatch(destroyFavorite(favorite_params)), 
});

export default connect(mSTP, mDTP)(FavoritesPage);