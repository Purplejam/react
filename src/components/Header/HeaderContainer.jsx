import React from 'react';
import classes from './Header.module.css';
import Header from './Header.jsx';
import {connect} from 'react-redux';
import {setAuthUserData, getAuth} from './../../redux/auth-reducer.js';
import userApi from './../../api/api.js';

class HeaderContainer extends React.Component  {

	componentDidMount() {
		this.props.getAuth();
	}

	render() {
		return <Header {...this.props}/>
	}

}

let mapStateToProps = (state) => ({
	auth: state.auth
})


export default connect(mapStateToProps, {setAuthUserData, getAuth})(HeaderContainer)