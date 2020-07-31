export const postFavorite = favorite => $.ajax({
  url: `/api/deviations/${favorite.deviation_id}/favorites`,
  method: "POST",
  data: {favorite}
});

export const deleteFavorite = (favorite) => $.ajax({
  url: `/api/favorites/`,
  method: "DELETE",
  data: {favorite}
});
 