import userApi from './../api/api.js';
import {UserType, ProfileType, contactsType, photosProfileType} from './typesAll/types';
import {profileApi} from './../api/api.js';


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const UPLOAD_USER_PHOTO = 'UPLOAD_USER_PHOTO';
const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';


type PostType = {
    message: string,
    id: number,
    likeCount: number
}


let initialState = {
    posts: [
        {message: "Hi, how are you?", id: 1, likeCount: 24},
        {message: "My cat, yoo", id: 2, likeCount: 13},
        {message: "lalala", id: 1, likeCount: 64},
    ] as Array<PostType>,
    newPostText: 'enter message',
    profile: null as ProfileType | null,
    status: ''
}

export type initialStateType = typeof initialState;


const profileReducer = (state = initialState, action: any): initialStateType => {

    function addPost(text: any) {
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
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        case (UPDATE_PROFILE_SUCCESS) : {
            return {...state, profile: {...state.profile, ...action.values}}
        }
        default : return state;
    }

}

//end of reducer

export const getProfileUser = (userId: any) => async (dispatch: any) => {
        let response = await userApi.getProfile(userId);
        let json = await response.json();
        dispatch(setUserProfile(json));
    }


export const getProfileStatus = (userId: any) => async (dispatch: any) => {
        let response = await profileApi.getStatus(userId);
        let json = await response.json();
        dispatch(getStatus(json));

    }


export const updateProfileStatus = (status: any) => async (dispatch: any) => {
        let response = await profileApi.updateStatus(status);
        let json = await response.json();
        if (json.resultCode === 0) {
            dispatch(getStatus(status));
        }
    }

export const uploadUserPhoto = (file: any) => async (dispatch: any) => {
    if (file.length == 0 ) return;
    let response = await profileApi.uploadPhoto(file);
    let json = await response.json();

    if (json.resultCode == 0) {
        dispatch(uploadPhotoSuccess(json.data.photos));
        console.log(json);
    }
}

export const setProfilePage = (userId: any, values: any, setStatus: any) => async (dispatch: any) => {
    let response = await profileApi.setProfilePageApi(userId, values);
    let json = await response.json();

    if (json.resultCode === 0) {
        dispatch(getProfileUser(userId));
    } else if (json.resultCode === 1) {
        let result: any = [];
        json.messages.forEach((message: any) => result.push(message + '! '));
        setStatus(result);
        return Promise.reject(result);
    }
}

//actioncreators

type updateProfileSuccessType = {
    type: typeof UPDATE_PROFILE_SUCCESS,
    profile: ProfileType
}

type uploadPhotoSuccessType = {
    type: typeof UPLOAD_USER_PHOTO,
    photos: photosProfileType
}

type postActionCreatorType = {
    type: typeof ADD_POST,
    text: string
}

type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

type getStatusType = {
    type: typeof GET_STATUS,
    status: string
}

export let updateProfileSuccess = (profile: ProfileType): updateProfileSuccessType => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        profile
    }
}

export let uploadPhotoSuccess = (photos: photosProfileType): uploadPhotoSuccessType => {
    return {
        type: UPLOAD_USER_PHOTO,
        photos
    }
}


export let postActionCreator = (text: string): postActionCreatorType => {
  return {
    type: ADD_POST,
    text
  }
}


export let setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export let getStatus = (status: string): getStatusType => {
    return {
        type: GET_STATUS,
        status
    }
}


export default profileReducer;