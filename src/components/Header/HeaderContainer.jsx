import React from 'react';
import classes from './Header.module.css';
import Header from './Header.jsx';
import {connect} from 'react-redux';
import {setAuthUserData} from './../../redux/auth-reducer.js';

class HeaderContainer extends React.Component  {

	componentDidMount() {
			fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {credentials: 'include'})
			.then(response => {
				return response.json()})
			.then(json => {
				if (json.resultCode == 0) {
					console.log(json.data);
					let {id, login, email} = json.data;
					this.props.setAuthUserData(id, login, email);
				}
			});

	}

	render() {
		return <Header {...this.props}/>
	}

}

let mapStateToProps = (state) => ({
	auth: state.auth
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)