import React from 'react';
import css from './Users.module.css';
import {NavLink} from 'react-router-dom';
import userApi from './../../api/api.js';


const Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++ ) {
		pages.push(i);
	}

	return (
	<div>
		<div className={css.pagination}>
			{pages.map(p => {
				return <span onClick={(e) => {props.onPageChanged(p)}} className={ props.currentPage === p && css.selectedPage }>{p}</span>
				})}

		</div>
				{
					props.users.map(u => <div key={u.id}>
							<span>
				
								<div>
									<NavLink to={"/profile/" + u.id}>	
										<img src={u.photos.small != null ? u.photos.small : "https://i.pravatar.cc/50"}/>
									</NavLink>
								
								</div>
							</span>
				
							<div>
								{u.followed 
									? <button disabled={props.followInPropgress.some(id => id == u.id)} onClick={ () => {
										props.followInPropgressToggle(u.id, true);
											userApi.followUser(u.id, 'DELETE')
												.then(response => response.json())
												.then(json => {
													if (json.resultCode == 0) {
														props.unfollow(u.id)
													}
													props.followInPropgressToggle(u.id, false);
												})

										
									}}>Unfollow</button> 
									: <button disabled={props.followInPropgress.some(id => id == u.id)} onClick={ () => {
										props.followInPropgressToggle(u.id, true);
										console.log(props);
											userApi.followUser(u.id, 'POST')
												.then(response => response.json())
												.then(json => {
													if (json.resultCode == 0) {
														props.follow(u.id);
														}
														props.followInPropgressToggle(u.id, false);
													})
												
										

										}}>Follow</button>}
							</div>
							<span>
								<span>
									<div>{u.name}</div>
									<div>{u.status}</div>
								</span>
								<span>
									<div>{"u.location.country"}</div>
									<div>{"u.location.city"}</div>
								</span>
							</span>
						</div>)
					}
			</div>)
}

export default Users