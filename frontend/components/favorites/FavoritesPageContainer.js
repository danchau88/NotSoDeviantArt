import { connect } from 'react-redux';
import FavoritesPage from './FavoritesPage';
import { getUser } from '../../actions/users.actions';
import { destroyFavorite } from '../../actions/favorites_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  favorites: Object.values(state.entities.favorites),
  deviations: Object.values(state.entities.deviations),
});

const mDTP = (dispatch) => ({
  getUser: (userId) => dispatch(getUser(userId)),
  destroyFavorite: (favorite_params) => dispatch(destroyFavorite(favorite_params)), 
});

export default connect(mSTP, mDTP)(FavoritesPage);