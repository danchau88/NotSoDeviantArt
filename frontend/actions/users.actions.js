import {fetchAllUsers, fetchUser} from '../util/users_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveAllUsers = ({users}) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }; 
};

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }; 
};

export const getAllUsers = () => dispatch => fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)));

export const getUser = (userId) => dispatch => fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));