import React from 'react';
import Users from './Users.jsx';
import {connect} from 'react-redux';
import {followSucces, unfollowSucces, setusers, setpage, isfetchingToggle, followInPropgressToggle, getUsers, follow, unfollow} from './../../redux/users-reducer.js';
import preloader from './../../assets/images/preloader.gif';
import userApi from './../../api/api.js';
import {Redirect} from 'react-router-dom';

class UserClassContainer extends React.Component {


	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (page) => {
		this.props.getUsers(page, this.props.pageSize);
		this.props.setpage(page);
	}


render() {

	if (this.props.isAuth === false) {
		return <Redirect to="/login"/>
	}

	return <>
	{this.props.isFetching ? <img src={preloader} /> : null}
	<Users totalUsersCount={this.props.totalUsersCount}
															pageSize={this.props.pageSize} 
															onPageChanged={this.onPageChanged}
															currentPage={this.props.currentPage}
															users={this.props.users}
															unfollowSucces={this.props.unfollowSucces}
															followSucces={this.props.followSucces}
															isFetching={this.props.isFetching}
															followInPropgress={this.props.followInPropgress}
															followInPropgressToggle={this.props.followInPropgressToggle}
															follow={this.props.follow}
															unfollow={this.props.unfollow}
														/>
															</>
	}
} //end of component

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followInPropgress: state.usersPage.followInPropgress,
		isAuth: state.auth.isAuth
	}
}



export default connect(mapStateToProps, {followSucces, unfollowSucces, setusers, 
	setpage, isfetchingToggle, followInPropgressToggle, getUsers, follow, unfollow})(UserClassContainer);