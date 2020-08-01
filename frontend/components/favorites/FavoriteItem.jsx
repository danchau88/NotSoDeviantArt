import React from 'react';

export default class FavoriteItem extends React.Component {
  render() {
    const { favorite, destroyFavorite, deviations, currentUser } = this.props
    const favorite_deviation = deviations[favorite.deviation_id]
    return (
      <li className="fav-item">
        <h4>{favorite_deviation.title}</h4>
        <img src={favorite_deviation.artworkUrl} />
        <button onClick={() => {
            destroyFavorite({deviation_id: favorite_deviation.id, user_id: currentUser.id}) //params naming from backend
          }
        } className="delete-fav" > REMOVE </button>
      </li>
    )
  }
}