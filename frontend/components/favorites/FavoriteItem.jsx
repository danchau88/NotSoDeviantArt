import React from 'react';
import { Link } from 'react-router-dom';

export default class FavoriteItem extends React.Component {
  render() {
    const { favorite, destroyFavorite, deviations, currentUser } = this.props
    const favorite_deviation = deviations[favorite.deviation_id]
    return (
      <li className="fav-item">
        <div>
          <h4 className='fav-item-title'>{favorite_deviation.title}</h4>
          <Link to={`/deviations/${favorite_deviation.id}`} >
            <img src={favorite_deviation.artworkUrl} />
          </Link>
        </div>
        <button onClick={() => {
            destroyFavorite({deviation_id: favorite_deviation.id, user_id: currentUser.id}) //params naming from backend
          }
        } className="delete-fav" > REMOVE </button>
      </li>
    )
  }
}