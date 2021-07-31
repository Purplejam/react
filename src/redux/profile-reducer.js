const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


let initialState = {
    posts: [
        {message: "Hi, how are you?", id: 1, likeCount: 24},
        {message: "My cat, yoo", id: 2, likeCount: 13},
        {message: "lalala", id: 1, likeCount: 64},
    ],
    newPostText: 'enter message'
}

const profileReducer = (state = initialState, action) => {

function addPost(state) {
    let newPost = {message: state.newPostText, id: 0, likeCount: 2};
    
    let stateCopy = {...state};
    stateCopy.posts = [...state.posts];
    stateCopy.posts.push(newPost);
    stateCopy.newPostText = '';
    return stateCopy;
}

function updateNewPostText(newText) {
    let stateCopy = {...state};
    stateCopy.newPostText = newText;
    return stateCopy;
}



switch(action.type) {
    case(ADD_POST) : {
            return addPost(state);
        }
    case(UPDATE_NEW_POST_TEXT) : {
            return updateNewPostText(action.text);
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

export default profileReducer;