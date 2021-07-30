import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts.jsx';
import {postActionCreator, updateTextActionCreator} from './../../../redux/profile-reducer.js';


const PostsContainer = (props) => {
  let state = props.store.getState();

  let addPostItem = () => {
    props.store.dispatch(postActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateTextActionCreator(text));
  }

	return (<Posts addPostItem={addPostItem} 
    onPostChange={onPostChange} 
    newPostText={state.profilePage.newPostText}
    posts={state.profilePage.posts}/>);
}







export default PostsContainer