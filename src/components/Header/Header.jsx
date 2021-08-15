import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	function logout() {
        props.logout();
    }

	return (
    	<header className={classes.header}>
    		<a href="#">LOGO</a>
    		<div className={classes.loginBlock}>
                {props.auth.isAuth &&
                    <div>
                        {props.auth.login}
                        <button onClick={logout}>logout</button>
                    </div>
                    }
                {!props.auth.isAuth &&
                    <NavLink to="/login">Login</NavLink>
                }
                     
                 
    			
  
    		</div>
    	</header>
		);
}

export default Header