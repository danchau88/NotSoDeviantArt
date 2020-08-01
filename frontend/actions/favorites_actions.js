import {postFavorite, deleteFavorite} from '../util/favorites_api_util';
import { RECEIVE_ALL_DEVIATIONS } from './deviations_actions';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const RECEIVE_FAVORITE_DEVIATIONS = "RECEIVE_FAVORITE_DEVIATIONS"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const CLEAR_ALL_FAVORITES = "CLEAR_ALL_FAVORITES";

//keying in for arguments depends on the view and is partial is top level or not
const receiveFavorite = (favorite) => {
  return {
      type: RECEIVE_FAVORITE,
      favorite
  }
}

// dont need  thunk action
export const receiveFavoriteDeviations = (deviations) => {
  return {
    type: RECEIVE_FAVORITE_DEVIATIONS,
    deviations
  }
}

const removeFavorite = favoriteId => {
  return {
      type: REMOVE_FAVORITE,
      favoriteId
  }
}

export const clearAllFavorites = () => ({
  type: CLEAR_ALL_FAVORITES
})

export const createFavorite = (favorite) => dispatch => postFavorite(favorite)
    .then(newFavorite => dispatch(receiveFavorite(newFavorite)))

export const destroyFavorite = (favorite_params) => dispatch => {
    return deleteFavorite(favorite_params)
    .then((favoriteId) => dispatch(removeFavorite(favoriteId.id)));
}
