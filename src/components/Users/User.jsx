import React from 'react';
import css from './Users.module.css';
import {NavLink} from 'react-router-dom';



const User = ({user, followInPropgress, unfollow, follow}) => {

	return (
					<div>
							<span>
								<div>
									<NavLink to={"/profile/" + user.id}>	
										<img src={user.photos.small != null ? user.photos.small : "https://i.pravatar.cc/50"}/>
									</NavLink>
								
								</div>
							</span>
				
							<div>
								{user.followed 
									? <button  disabled={followInPropgress.some(id => id == user.id)} onClick={ () => {unfollow(user.id)}}>Unfollow</button> 
									: <button  disabled={followInPropgress.some(id => id == user.id)} onClick={ () => {follow(user.id)}}>Follow</button>}
							</div>
							<span>
								<span>
									<div>{user.name}</div>
									<div>{user.status}</div>
								</span>
								<span>
									<div>{"user.location.country"}</div>
									<div>{"user.location.city"}</div>
								</span>
							</span>
						</div>)
}

export default User