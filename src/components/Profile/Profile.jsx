import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Post from './MyPosts/Post/Post.jsx';
import PostsContainer from './MyPosts/PostsContainer.jsx';
import {Redirect} from 'react-router-dom';





const Profile = (props) => {

 if (props.isAuth === false) {
     return <Redirect to="/login"/>
 } 

	return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <PostsContainer/> 
        </div>
		);
}

export default Profile