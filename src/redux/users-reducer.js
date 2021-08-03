const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
    users: [

    ]

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
                users: [...state.users, ...action.users]}

        default: return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SETUSERS, users})

export default usersReducer;