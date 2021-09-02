import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts.jsx';
import Profile from './Profile.jsx';
import {connect} from 'react-redux';
import {setUserProfile, getProfileUser, getProfileStatus, 
	updateProfileStatus, uploadUserPhoto, setProfilePage} from '../../redux/profile-reducer.tsx';
import {withRouter} from 'react-router-dom';
import userApi from './../../api/api.js';
import {Redirect} from 'react-router-dom';
import {WithAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {compose} from 'redux';





class ProfileContainer extends React.Component {

	refreshProfile() {
			let userId = this.props.match.params.userId;
			if (!userId) {
				userId = this.props.authUserId
				if (!userId) {
					this.props.history.push('/login');
				}
			}

			this.props.getProfileUser(userId);
			this.props.getProfileStatus(userId);

	}


	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
				this.refreshProfile();
			}
	}


	render() {

	  return (
	    <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
	  )
	}}


	let mapStateToProps = (state) => ({
		profile: state.profilePage.profile,
		status: 	state.profilePage.status,
		authUserId: state.auth.id,
		isAuth: state.auth.isAuth
	});


export default 	compose(
		connect(mapStateToProps, {setUserProfile, getProfileUser, getProfileStatus, 
			updateProfileStatus, uploadUserPhoto, setProfilePage}),
		withRouter
		)(ProfileContainer);