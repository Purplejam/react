const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
    users: {
        {id: 1, folowed: true, fullName: 'Dmitry', status: 'Boss', loction: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, folowed: true, fullName: 'Dmitry', status: 'Boss', loction: {city: 'Moskow', country: 'Russia'} },
        {id: 3, folowed: false, fullName: 'Dmitry', status: 'Boss', loction: {city: 'Kiev', country: 'Ukraine'} },
        {id: 4, folowed: true, fullName: 'Dmitry', status: 'Boss', loction: {city: 'Minsk', country: 'Belarus'} }
    }

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

        case FOLLOW:
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
            return {...users, users: [...state.users, ...action.users]}

        default: return state;
    }

}

export const followAc = (userId) => ({type: FOLLOW, userId})

export const unFollowAc = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAc = (users) => ({type: SETUSERS, users})

export default usersReducer;