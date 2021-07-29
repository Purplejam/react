import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Post from './MyPosts/Post/Post.jsx';





const Profile = (props) => {
    
	return (
        <div>
            <ProfileInfo />
            <Posts state={props.state.posts} dispatch={props.dispatch} newPostText={props.newPostText}/> 
        </div>
		);
}

export default Profile