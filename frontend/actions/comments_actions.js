import { postComment, patchComment, deleteComment, fetchAllComments, fetchComment } from '../util/comments_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_ALL_COMMENTS = "CLEAR_ALL_COMMENTS";

const receiveAllComments = ({comments, users}) => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments: comments || {},
        users: users || {}
    }
}

const receiveComment = ({comment}) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

const receiveCommentErrors = errors => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors
    }
}

export const clearAllComments = () => ({
    type: CLEAR_ALL_COMMENTS
})

export const getAllComments = (deviationId) => dispatch => fetchAllComments(deviationId)
    .then(comments => dispatch(receiveAllComments(comments)));

export const getComment = (commentId) => dispatch => fetchComment(commentId)
    .then(comment => dispatch(receiveComment(comment)));

export const createComment = (comment) => dispatch => postComment(comment)
    .then(newComment => dispatch(receiveComment(newComment)))
    .fail(errors => dispatch(receiveCommentErrors(errors.responseJSON)));

export const updateComment = (comment) => dispatch => patchComment(comment)
    .then(updatedComment => dispatch(receiveComment(updatedComment)))
    .fail(errors => dispatch(receiveCommentErrors(errors.responseJSON)));

export const destroyComment = (commentId) => dispatch => deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)));
