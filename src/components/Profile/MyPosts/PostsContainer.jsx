import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts.jsx';
import StoreContext from './../../../storeContext.js'
import {connect} from 'react-redux';
import {postActionCreator, updateTextActionCreator} from './../../../redux/profile-reducer.js';


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