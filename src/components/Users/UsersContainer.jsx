import React from 'react';
import Users from './Users.jsx';
import {connect} from 'react-redux';
import {follow, unfollow, setusers, setpage, isfetchingToggle, followInPropgressToggle} from './../../redux/users-reducer.js';
import preloader from './../../assets/images/preloader.gif';
import userApi from './../../api/api.js';

class UserClassContainer extends React.Component {


	componentDidMount() {
		this.props.isfetchingToggle(true);
		userApi.getAllUsers(this.props.currentPage, this.props.pageSize)
			.then(response => {
				return response.json()})
			.then(json => {
				this.props.isfetchingToggle(false);
				return this.props.setusers(json.items);
			});
	}

	onPageChanged = (page) => {
		this.props.setpage(page);
		this.props.isfetchingToggle(true);
			userApi.getAllUsers(page, this.props.pageSize)
			.then(response => response.json())
			.then(json => {
				this.props.isfetchingToggle(false);
				return this.props.setusers(json.items)});
	}


render() {
	return <>
	{this.props.isFetching ? <img src={preloader} /> : null}
	<Users totalUsersCount={this.props.totalUsersCount}
															pageSize={this.props.pageSize} 
															onPageChanged={this.onPageChanged}
															currentPage={this.props.currentPage}
															users={this.props.users}
															unfollow={this.props.unfollow}
															follow={this.props.follow}
															isFetching={this.props.isFetching}
															followInPropgress={this.props.followInPropgress}
															followInPropgressToggle={this.props.followInPropgressToggle}
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
		followInPropgress: state.usersPage.followInPropgress
	}
}



export default connect(mapStateToProps, {follow, unfollow, setusers, 
	setpage, isfetchingToggle, followInPropgressToggle})(UserClassContainer);