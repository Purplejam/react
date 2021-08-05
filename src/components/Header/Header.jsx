import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	console.log(props)

	return (
    	<header className={classes.header}>
    		<a href="#">LOGO</a>
    		<div className={classes.loginBlock}>
    			{props.auth.isAuth ? props.auth.login : <NavLink to="/login">Login</NavLink>}
    			
  
    		</div>
    	</header>
		);
}

export default Header