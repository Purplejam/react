const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {message: "Hi, how are you?", id: 1, likeCount: 24},
        {message: "My cat, yoo", id: 2, likeCount: 13},
        {message: "lalala", id: 1, likeCount: 64},
    ],
    newPostText: 'enter message',
    profile: null
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
    default : return state;
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

export default profileReducer;