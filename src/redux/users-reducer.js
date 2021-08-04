const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETPAGE = 'SETPAGE';

let initialState = {
    users: [

    ],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 2

}

const usersReducer = (state = initialState, action) => {

    function addPost(state) {

    };

    function updateNewPostText(newText) {

    };



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
        default: return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SETUSERS, users})

export const setPageAC = (page) => ({type: SETPAGE, page})

export default usersReducer;