import React from 'react';
import Users from './Users.jsx';
import {connect} from 'react-redux';
import {follow, unfollow, setusers, setpage, isfetchingToggle} from './../../redux/users-reducer.js';
import preloader from './../../assets/images/preloader.gif';

class UserClassContainer extends React.Component {


	componentDidMount() {
		this.props.isfetchingToggle(true);
		fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
			credentials: 'include'
		})
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
			fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
				credentials: 'include'
			})
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
															isFetching={this.props.isFetching}/>
															</>
	}
} //end of component

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}



export default connect(mapStateToProps, {follow, unfollow, setusers, 
	setpage, isfetchingToggle,})(UserClassContainer);