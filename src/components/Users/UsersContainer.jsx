import React from 'react';
import Users from './Users.jsx';
import {connect} from 'react-redux';
import {followAC, unFollowAC, setUsersAC, setPageAC} from './../../redux/users-reducer.js';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		},
		setpage: (page) => {
			dispatch(setPageAC(page))
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);