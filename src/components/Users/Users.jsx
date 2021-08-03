import React from 'react';
import css from './Users.module.css';


const Users = (props) => {
debugger;
if (props.users.length === 0) {
	props.setusers( [
        {id: 1, fotoUrl: "https://i.pravatar.cc/50", followed: true, fullName: 'Dmitry', status: 'Boss', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, fotoUrl: "https://i.pravatar.cc/50", followed: true, fullName: 'Dmitry', status: 'Boss', location: {city: 'Moscow', country: 'Russia'} },
        {id: 3, fotoUrl: "https://i.pravatar.cc/50", followed: false, fullName: 'Dmitry', status: 'Boss', location: {city: 'Kiev', country: 'Ukraine'} },
        {id: 4, fotoUrl: "https://i.pravatar.cc/50", followed: true, fullName: 'Dmitry', status: 'Boss', location: {city: 'Minsk', country: 'Belarus'} }
    ])
}


	return (
		props.users.map(u => <div key={u.id}>
			<span>
				<div>
					<img src={u.fotoUrl}/>
				</div>
			</span>

			<div>
				{u.followed 
					? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
					: <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
			</div>
			<span>
				<span>
					<div>{u.fullName}</div>
					<div>{u.status}</div>
				</span>
				<span>
					<div>{u.location.country}</div>
					<div>{u.location.city}</div>
				</span>
			</span>

		</div>)
		);
}

export default Users