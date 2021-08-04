import React from 'react';
import css from './Users.module.css';


const Users = (props) => {

	let getUsers = () => {
		if (props.users.length === 0) {
			let result =	fetch('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					return response.json();
				})
				.then(json => {
					console.log(json.items);
					return props.setusers(json.items);
				});
		}
	}

	return (
	<div>
		<button onClick={getUsers}>getUsers</button>
				{
					props.users.map(u => <div key={u.id}>
							<span>
				
								<div>
									<img src={u.photos.small != null ? u.photos.small : "https://i.pravatar.cc/50"}/>
								</div>
							</span>
				
							<div>
								{u.followed 
									? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
									: <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
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