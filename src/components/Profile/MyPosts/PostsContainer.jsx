import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts.jsx';
import StoreContext from './../../../storeContext.js'
import {postActionCreator, updateTextActionCreator} from './../../../redux/profile-reducer.js';


const PostsContainer = (props) => {
  //let state = props.store.getState();

  /* let addPostItem = () => {
    props.store.dispatch(postActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateTextActionCreator(text));
  } */

	return (<StoreContext.Consumer> 
    { 
    (store) => {
    let state = store.getState();

    let addPostItem = () => {
      store.dispatch(postActionCreator());
    }

    let onPostChange = (text) => {
      store.dispatch(updateTextActionCreator(text));
    }

   return <Posts addPostItem={addPostItem} 
      onPostChange={onPostChange} 
      newPostText={state.profilePage.newPostText}
      posts={state.profilePage.posts}/>} 
      }
    </StoreContext.Consumer>);
}







export default PostsContainer