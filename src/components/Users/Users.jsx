import React from 'react';
import css from './Users.module.css';


const Users = (props) => {


	return (
		props.users.map(u => <div key={u.id}>
			<span>
				<div>
					<img src={u.fotoUrl}/>
				</div>
			</span>

			<div>
				{u.followed ? <button>Unfollow</button> : <button>Follow</button>}
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