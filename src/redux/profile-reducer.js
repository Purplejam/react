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

function addPost() {
    let newPost = {message: state.newPostText, id: 0, likeCount: 2};
    state.posts.push(newPost);
    updateNewPostText('');
}

function updateNewPostText(newText) {
    state.newPostText = newText;
}

switch(action.type) {
    case(ADD_POST) : 
        addPost();
        return state;
    case(UPDATE_NEW_POST_TEXT) : 
        updateNewPostText(action.text);
        return state;
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