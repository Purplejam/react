import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts.jsx';
import Profile from './Profile.jsx';
import {connect} from 'react-redux';
import {setUserProfile, getProfileUser} from '../../redux/profile-reducer.js';
import {withRouter} from 'react-router-dom';
import userApi from './../../api/api.js';





class ProfileContainer extends React.Component {


	componentDidMount() {



		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getProfileUser(userId);

	}


	render() { 
	  return (
	    <Profile {...this.props} profile={this.props.profile}/>
	  )
	}}

	let mapStateToProps = (state) => ({
		profile: state.profilePage.profile
	});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getProfileUser})(withUrlDataContainerComponent);