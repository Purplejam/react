import userApi from './../api/api.js';
import {profileApi} from './../api/api.js';


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';


let initialState = {
    posts: [
        {message: "Hi, how are you?", id: 1, likeCount: 24},
        {message: "My cat, yoo", id: 2, likeCount: 13},
        {message: "lalala", id: 1, likeCount: 64},
    ],
    newPostText: 'enter message',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

function addPost(text) {
    let newPost = {message: text, id: 0, likeCount: 2};

    return {
        ...state,
        posts: [...state.posts, newPost]
    };
};


switch(action.type) {
    case(ADD_POST) : {
            return addPost(action.text);
        }
    case(SET_USER_PROFILE) : {
        return {...state, profile: action.profile}
    }
    case(GET_STATUS) : {
        return {...state, status: action.status}
    }
    default : return state;
}

}

export const getProfileUser = (userId) => {
    return (dispatch) => {
        userApi.getProfile(userId)
            .then(response => {
                return response.json()})
            .then(json => {
                dispatch(setUserProfile(json));
                return json;
            });

    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                return response.json()
            })
            .then(text => {
                return dispatch(getStatus(text));
            })
    }
}

export const updateProfileStatus = (status) => {
    return(dispatch) => {
        profileApi.updateStatus(status)
        .then(response => {
            
            return response.json();
        })
        .then(json => {
            return json.resultCode === 0 
            ? dispatch(getStatus(status))
            : json.message
        })
    }
}



export let postActionCreator = (text) => {
  return {
    type: ADD_POST,
    text
  }
}


export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export let getStatus = (status) => {
    return {
        type: GET_STATUS,
        status
    }
}

export default profileReducer;