import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts.jsx';
import StoreContext from './../../../storeContext.js'
import {connect} from 'react-redux';
import {postActionCreator, updateTextActionCreator} from './../../../redux/profile-reducer.js';


/* const TestPostsContainer = (props) => {

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
} */
const mapStateToProps = (state) => {
   return {
    profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    onPostChange: (text) => {
        dispatch(updateTextActionCreator(text));
    },
    addPostItem: () => {
        dispatch(postActionCreator());
    }
    }
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);







export default PostsContainer