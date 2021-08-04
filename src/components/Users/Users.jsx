import React from 'react';
import css from './Users.module.css';

class Users extends React.Component {


	componentDidMount() {
		fetch('https://social-network.samuraijs.com/api/1.0/users?count=4')
			.then(response => {
				return response.json();
			})
			.then(json => {
				console.log(json.items);
				return this.props.setusers(json.items);
			});

	}


render() {
	return (


	<div>
		<div>
			<span>1</span>
			<span>2</span>
			<span>3</span>
			<span>4</span>
			<span>5</span>

		</div>
				{
					this.props.users.map(u => <div key={u.id}>
							<span>
				
								<div>
									<img src={u.photos.small != null ? u.photos.small : "https://i.pravatar.cc/50"}/>
								</div>
							</span>
				
							<div>
								{u.followed 
									? <button onClick={ () => {this.props.unfollow(u.id)}}>Unfollow</button> 
									: <button onClick={ () => {this.props.follow(u.id)}}>Follow</button>}
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
	}// end of render
}


export default Users