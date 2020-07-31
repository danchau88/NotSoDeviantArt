import {RECEIVE_FAVORITE, REMOVE_FAVORITE, CLEAR_ALL_FAVORITES, RECEIVE_FAVORITE_DEVIATIONS} from '../actions/favorites_actions';
import {RECEIVE_DEVIATION} from '../actions/deviations_actions';
import { RECEIVE_USER } from '../actions/users.actions';

export default (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
      // case RECEIVE_DEVIATION:
      //     return {...state, ...action.favorites} //merges new state with currentState (for devShow)
      case RECEIVE_FAVORITE:
          nextState[action.favorite.id] = action.favorite
          return nextState;
      case RECEIVE_USER:
          return {...state, ...action.favorites}
      case REMOVE_FAVORITE:
          delete nextState[action.favoriteId]
          return nextState;
      case CLEAR_ALL_FAVORITES:
          return {};
      default:
          return state;
  }
}