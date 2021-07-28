import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';



const DialogItem = (props) => {
	return (
		<NavLink to={`/dialogs/${props.id}`} className={classes.dialog}>{props.name}</NavLink>
		);
}


export default DialogItem