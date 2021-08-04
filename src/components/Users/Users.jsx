import React from 'react';
import css from './Users.module.css';

class Users extends React.Component {


	componentDidMount() {
		fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => response.json())
			.then(json => {
				this.props.setusers(json.items);
			});

	}

	onPageChanged = (page) => {
		this.props.setpage(page);
			fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => response.json())
			.then(json => this.props.setusers(json.items));
	}


render() {
	let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++ ) {
		pages.push(i);
	}


	return (


	<div>
		<div className={css.pagination}>
			{pages.map(p => {
				return <span onClick={(e) => {this.onPageChanged(p)}} className={ this.props.currentPage === p && css.selectedPage }>{p}</span>
				})}

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