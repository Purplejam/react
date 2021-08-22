import userApi from './../api/api.js';
import {updateObjectInArray} from './../utilits/object-helpers.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETPAGE = 'SETPAGE';
const TOGGLEFETCHING = 'TOGGLEFETCHING';
const FOLLOW_IN_PROPGRESS = 'FOLLOW_IN_PROPGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followInPropgress: []

}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, ['id'], {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, ['id'], {followed: false})
            }
        case SETUSERS: 
            return {...state, 
                users: action.users,
                totalUsersCount: action.totalUsersCount}
        case SETPAGE: 
            return {...state, 
                currentPage: action.page}
        case TOGGLEFETCHING:
            return {...state,
                isFetching: action.isFetching} 
        case FOLLOW_IN_PROPGRESS:
            return {...state,
                followInPropgress: action.isFetching
                ? [state.followInPropgress, action.userId]
                : state.followInPropgress.filter(id => id !== action.userId)}                 
        default: return state;
    }

}

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(isfetchingToggle(true));
    let response = await userApi.getAllUsers(currentPage, pageSize);
    let json = await response.json();
    console.log(json);
    dispatch(isfetchingToggle(false));
    dispatch(setusers(json.items, json.totalCount));
}

export const followUndollowMethod = async (dispatch, userId, rqMethod, action) => {
    dispatch(followInPropgressToggle(userId, true));
    let response = await userApi.followUser(userId, rqMethod);
    let json = await response.json();

    if (json.resultCode === 0) {
        dispatch(action);
    }
    dispatch(followInPropgressToggle(userId, false));
}


export const follow = (userId) => async (dispatch) => {

    followUndollowMethod(dispatch, userId, 'POST', followSucces(userId));
}


export const unfollow = (userId) => async (dispatch) => {

    followUndollowMethod(dispatch, userId, 'DELETE', unfollowSucces(userId));
}


export const followSucces = (userId) => ({type: FOLLOW, userId})

export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId})

export const setusers = (users, totalUsersCount) => ({type: SETUSERS, users, totalUsersCount})

export const setpage = (page) => ({type: SETPAGE, page})

export const isfetchingToggle = (isFetching) => ({type: TOGGLEFETCHING, isFetching})

export const followInPropgressToggle = (userId, isFetching) => ({type: FOLLOW_IN_PROPGRESS, userId, isFetching})

export default usersReducer;