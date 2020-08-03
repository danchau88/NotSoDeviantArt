import React from 'react';
import FavoriteItem from './FavoriteItem';

export default class FavoritesPage extends React.Component {

  componentDidMount(){
    this.props.getUser(this.props.currentUser.id)
  }
  
  render() {
    const { currentUser, favorites, deviations, destroyFavorite } = this.props;
    if (!currentUser || !favorites || !deviations) return (
      <div className='loader'>
        <div className="loadingio-spinner-bean-eater-916qsk75w7e"><div className="ldio-c4ah9yqoipt">
        <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
        </div></div>
      </div>
    )

    let favoriteItems = favorites.map((favorite) => (
      <FavoriteItem key={favorite.id} 
        favorite={favorite} 
        deviations={deviations}
        currentUser={currentUser} 
        destroyFavorite={destroyFavorite} 
      /> 
    ));
    if (favoriteItems.length === 0) {return favoriteItems = <h2 className='no-fav'>No Favorites Yet...</h2>}
    return(
      <div className="favorites-pg">
        <h1 id="favorite-title">MY FAVORITES</h1>
        <div className="fav-content">
          <ul>
            {favoriteItems}
          </ul>
        </div>
      </div>
    )
  }
}

