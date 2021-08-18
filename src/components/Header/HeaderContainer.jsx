import React from 'react';
import classes from './Header.module.css';
import Header from './Header.jsx';
import {connect} from 'react-redux';
import {getAuth, logout} from './../../redux/auth-reducer.js';
import userApi from './../../api/api.js';

class HeaderContainer extends React.Component  {


	render() {
		return <Header {...this.props}/>
	}

}

let mapStateToProps = (state) => ({
	auth: state.auth
})


export default connect(mapStateToProps, {getAuth, logout})(HeaderContainer)