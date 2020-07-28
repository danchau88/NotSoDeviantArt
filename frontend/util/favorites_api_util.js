export const postFavorite = favorite => $.ajax({
  url: `/api/deviations/${favorite.deviation_id}/favorites`,
  method: "POST",
  data: {favorite}
});

export const deleteFavorite = ({deviationId, userId}) => $.ajax({
  url: `/api/favorites/`,
  method: "DELETE",
  data: {
    deviation_id: deviationId,
    user_id: userId
  }
});
 