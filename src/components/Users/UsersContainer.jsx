import React from 'react';
import Users from './Users.jsx';
import {connect} from 'react-redux';
import {followAc} from './../../redux/users-reducer.js';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAc(userId))
		},
		unfollow: (userId) => {
			dispatch(unFollowAc(userId))
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);