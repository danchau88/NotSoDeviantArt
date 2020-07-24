export const postFavorite = favorite => $.ajax({
  url: `/api/deviations/${favorite.deviation_id}/favorites`,
  method: "POST",
  data: {favorite}
});

export const deleteFavorite = favoriteId => $.ajax({
  url: `/api/favorites/${favoriteId}`,
  method: "DELETE"
});
 