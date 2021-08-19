import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts.jsx';
import Profile from './Profile.jsx';
import {connect} from 'react-redux';
import {setUserProfile, getProfileUser, getProfileStatus, updateProfileStatus} from '../../redux/profile-reducer.js';
import {withRouter} from 'react-router-dom';
import userApi from './../../api/api.js';
import {Redirect} from 'react-router-dom';
import {WithAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {compose} from 'redux';





class ProfileContainer extends React.Component {


	componentDidMount() {



		let userId = this.props.match.params.userId;
			if (!userId) {
				userId = this.props.authUserId
			}
			this.props.getProfileUser(userId);
			this.props.getProfileStatus(userId);
	}


	render() {

	  return (
	    <Profile {...this.props} />
	  )
	}}


	let mapStateToProps = (state) => ({
		profile: state.profilePage.profile,
		status: 	state.profilePage.status,
		authUserId: state.auth.id,
		isAuth: state.auth.isAuth
	});


export default 	compose(
		connect(mapStateToProps, {setUserProfile, getProfileUser, getProfileStatus, updateProfileStatus}),
		withRouter
		)(ProfileContainer);