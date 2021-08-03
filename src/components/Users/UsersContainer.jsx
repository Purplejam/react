import React from 'react';
import Users from './Users.jsx';
import {connect} from 'react-redux';
import {followAC, unFollowAC, setUsersAC} from './../../redux/users-reducer.js';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unFollowAC(userId))
		},
		setusers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);