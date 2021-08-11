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

function addPost(state) {
    let newPost = {message: state.newPostText, id: 0, likeCount: 2};

    return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
    };
};

function updateNewPostText(newText) {
    return {
        ...state,
        newPostText: newText
    };
};



switch(action.type) {
    case(ADD_POST) : {
            return addPost(state);
        }
    case(UPDATE_NEW_POST_TEXT) : {
            return updateNewPostText(action.text);
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



export let postActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export let updateTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text 
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