export const fetchAllComments = (deviationId) => $.ajax({
    url: `/api/deviations/${deviationId}/comments`,
    method: "GET"
});

export const fetchComment = commentId => $.ajax({
    url: `/api/comments/${commentId}`,
    method: "GET"
});

export const postComment = comment => $.ajax({
    url: "/api/comments",
    method: "POST",
    data: {comment}
});

export const patchComment = comment => $.ajax({
    url: `/api/comments/${comment.id}`,
    method: "PATCH",
    data: {comment}
});

export const deleteComment = commentId => $.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE"
});