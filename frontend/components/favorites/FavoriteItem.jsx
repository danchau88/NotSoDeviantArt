import React from 'react';

export default class FavoriteItem extends React.Component {
  render() {
    const { favorite, destroyFavorite, currentUser } = this.props;
    return (
      <li className="fav-item">
        <h4>{favorite.title}</h4>
        <img src={favorite.artworkUrl} />
        <button onClick={() => destroyFavorite({deviationId: favorite.id, userId: currentUser.id})} className="delete-fav" > REMOVE </button>
      </li>
    )
  }
}