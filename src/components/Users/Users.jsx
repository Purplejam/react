import React from 'react';
import css from './Users.module.css';
import userApi from './../../api/api.js';
import Paginator from './Paginator.jsx';
import User from './User.jsx';


const Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, ...props}) => {

	return (
	<div className={css.userContainer}>
		<Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}
		 currentPage={currentPage}/>
				{
					props.users.map(u => <User key={u.id} 
						user={u}
						followInPropgress={props.followInPropgress}
						unfollow={props.unfollow}
						follow={props.follow}/>)
					}
			</div>)
}

export default Users