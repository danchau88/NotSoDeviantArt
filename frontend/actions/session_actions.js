import {postUser, postSession, deleteSession} from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"


export const receiveCurrentUser = (user) =>{
    return {
        type: RECEIVE_CURRENT_USER ,
        user
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const login = (user) => (dispatch) => postSession(user)
    .then(res => dispatch(receiveCurrentUser(res)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON))); 


export const signup = (user) => (dispatch) => postUser(user)
    .then(res => dispatch(receiveCurrentUser(res)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON))); 

export const logout = () => (dispatch) => deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));

export const demoUser = () => dispatch => {
    let guest = {username: 'Guest', password: 'password'};
    return postSession(guest)
    .then( res => dispatch(receiveCurrentUser(res)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
};
    