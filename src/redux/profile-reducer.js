import {PostItem} from './state.js';
import {postData} from './store.js';
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: postData,
    newPostText: 'enter message'
}

const profileReducer = (state = initialState, action) => {

function addPost() {
    let newPost = new PostItem(state.newPostText, 0, 2);
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