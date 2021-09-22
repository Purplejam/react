import userApi from './../api/api.js';
import {UserType, ProfileType, contactsType, photosProfileType} from './typesAll/types';
import {updateObjectInArray} from './../utilits/object-helpers.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETPAGE = 'SETPAGE';
const TOGGLEFETCHING = 'TOGGLEFETCHING';
const FOLLOW_IN_PROPGRESS = 'FOLLOW_IN_PROPGRESS';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followInPropgress: [] as Array<number>
}

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {

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

//end of reducer

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(isfetchingToggle(true));
    let response = await userApi.getAllUsers(currentPage, pageSize);
    let json = await response.json();

    dispatch(isfetchingToggle(false));
    dispatch(setusers(json.items, json.totalCount));
}

export const followUndollowMethod = async (dispatch: any, userId: number, rqMethod: any, action: any) => {
    dispatch(followInPropgressToggle(userId, true));
    let response = await userApi.followUser(userId, rqMethod);
    let json = await response.json();

    if (json.resultCode === 0) {
        dispatch(action);
    }
    dispatch(followInPropgressToggle(userId, false));
}


export const follow = (userId: number) => async (dispatch: any) => {

    followUndollowMethod(dispatch, userId, 'POST', followSucces(userId));
}


export const unfollow = (userId: number) => async (dispatch: any) => {

    followUndollowMethod(dispatch, userId, 'DELETE', unfollowSucces(userId));
}

//end of thunks

type followSuccesType = {
   type: typeof FOLLOW,
   userId: number
}

export const followSucces = (userId: number): followSuccesType => ({type: FOLLOW, userId})

type unfollowSuccesType = {
   type: typeof UNFOLLOW,
   userId: number
}

export const unfollowSucces = (userId: number): unfollowSuccesType => ({type: UNFOLLOW, userId})

type setusersType = {
   type: typeof SETUSERS,
   users: Array<UserType>,
   totalUsersCount: number
}

export const setusers = (users: Array<UserType>, totalUsersCount: number): setusersType => ({type: SETUSERS, users, totalUsersCount})

type setpageType = {
   type: typeof SETPAGE,
   page: number
}

export const setpage = (page: number): setpageType => ({type: SETPAGE, page})

type isfetchingToggleType = {
   type: typeof TOGGLEFETCHING,
   isFetching: boolean
}

export const isfetchingToggle = (isFetching: boolean): isfetchingToggleType => ({type: TOGGLEFETCHING, isFetching})

type followInPropgressToggleType = {
   type: typeof FOLLOW_IN_PROPGRESS,
   userId: number,
   isFetching: boolean
}

export const followInPropgressToggle = (userId: number, isFetching: boolean): followInPropgressToggleType => ({type: FOLLOW_IN_PROPGRESS, userId, isFetching})

export default usersReducer;