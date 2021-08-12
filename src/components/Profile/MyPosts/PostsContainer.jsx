import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts.jsx';
import StoreContext from './../../../storeContext.js'
import {connect} from 'react-redux';
import {postActionCreator} from './../../../redux/profile-reducer.js';


const mapStateToProps = (state) => {
   return {
    profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    addPostItem: (text) => {
        dispatch(postActionCreator(text));
    }
    }
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);







export default PostsContainer