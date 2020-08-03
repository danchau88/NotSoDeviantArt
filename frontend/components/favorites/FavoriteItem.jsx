import React from 'react';

export default class FavoriteItem extends React.Component {
  render() {
    const { favorite, destroyFavorite, deviations, currentUser } = this.props
    const favorite_deviation = deviations[favorite.deviation_id]
    return (
      <li className="fav-item">
        <div>
          <h4 className='fav-item-title'>{favorite_deviation.title}</h4>
          <img src={favorite_deviation.artworkUrl} />
        </div>
        <button onClick={() => {
            destroyFavorite({deviation_id: favorite_deviation.id, user_id: currentUser.id}) //params naming from backend
          }
        } className="delete-fav" > REMOVE </button>
      </li>
    )
  }
}