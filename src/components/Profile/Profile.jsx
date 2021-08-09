import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Post from './MyPosts/Post/Post.jsx';
import PostsContainer from './MyPosts/PostsContainer.jsx';





const Profile = (props) => {
	

	return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/> 
        </div>
		);
}

export default Profile