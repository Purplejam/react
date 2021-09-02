import userApi from './../api/api.js';
import {profileApi} from './../api/api.js';


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const UPLOAD_USER_PHOTO = 'UPLOAD_USER_PHOTO';
const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';

type InitialStateType = {
    posts: any,
    newPostText: string,
    profile: null | any,
    status: string
}


let initialState: InitialStateType = {
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
        case (ADD_POST) : {
                return addPost(action.text);
            }
        case (SET_USER_PROFILE) : {
            return {...state, profile: action.profile}
        }
        case (GET_STATUS) : {
            return {...state, status: action.status}
        }
        case (UPLOAD_USER_PHOTO) : {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case (UPDATE_PROFILE_SUCCESS) : {
            return {...state, profile: {...state.profile, ...action.values}}
        }
        default : return state;
    }

}

//end of reducer

export const getProfileUser = (userId) => async (dispatch) => {
        let response = await userApi.getProfile(userId);
        let json = await response.json();
        dispatch(setUserProfile(json));
    }


export const getProfileStatus = (userId) => async (dispatch) => {
        let response = await profileApi.getStatus(userId);
        let json = await response.json();
        dispatch(getStatus(json));

    }


export const updateProfileStatus = (status) => async (dispatch) => {
        let response = await profileApi.updateStatus(status);
        let json = await response.json();
        if (json.resultCode === 0) {
            dispatch(getStatus(status));
        }
    }

export const uploadUserPhoto = (file) => async (dispatch) => {
    if (file.length == 0 ) return;
    let response = await profileApi.uploadPhoto(file);
    let json = await response.json();

    if (json.resultCode == 0) {
        dispatch(uploadPhotoSuccess(json.data.photos));
        console.log(json);
    }
}

export const setProfilePage = (userId, values, setStatus) => async (dispatch) => {
    let response = await profileApi.setProfilePageApi(userId, values);
    let json = await response.json();

    if (json.resultCode === 0) {
        dispatch(getProfileUser(userId));
    } else if (json.resultCode === 1) {
        let result = [];
        json.messages.forEach(message => result.push(message + '! '));
        setStatus(result);
        return Promise.reject(result);
    }
}

export let updateProfileSuccess = (profile) => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        profile
    }
}

export let uploadPhotoSuccess = (photos) => {
    return {
        type: UPLOAD_USER_PHOTO,
        photos
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