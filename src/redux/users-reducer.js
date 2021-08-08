import userApi from './../api/api.js';

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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }) //end users

            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }) //end users
            }
        case SETUSERS: 
            return {...state, 
                users: action.users}
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

export const getUsers = (currentPage, pageSize) => {

return (dispatch) => {
    dispatch(isfetchingToggle(true));
    userApi.getAllUsers(currentPage, pageSize)
        .then(response => {
            return response.json()})
        .then(json => {
            dispatch(isfetchingToggle(false));
            dispatch(setusers(json.items));
        });

    }
}

export const follow = (userId) => {
    return (dispatch) => {
    dispatch(followInPropgressToggle(userId, true));
        userApi.followUser(userId, 'POST')
            .then(response => response.json())
            .then(json => {
                if (json.resultCode == 0) {
                    dispatch(followSucces(userId));
                    }
                dispatch(followInPropgressToggle(userId, false));
                })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
dispatch(followInPropgressToggle(userId, true));
    userApi.followUser(userId, 'DELETE')
        .then(response => response.json())
        .then(json => {
            if (json.resultCode == 0) {
                dispatch(unfollowSucces(userId))
            }
            dispatch(followInPropgressToggle(userId, false));
        })
    }
}

export const followSucces = (userId) => ({type: FOLLOW, userId})

export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId})

export const setusers = (users) => ({type: SETUSERS, users})

export const setpage = (page) => ({type: SETPAGE, page})

export const isfetchingToggle = (isFetching) => ({type: TOGGLEFETCHING, isFetching})

export const followInPropgressToggle = (userId, isFetching) => ({type: FOLLOW_IN_PROPGRESS, userId, isFetching})

export default usersReducer;