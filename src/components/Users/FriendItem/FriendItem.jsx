import React from 'react';
import classes from './FriendItem.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './../Friends.jsx';

const FriendItem = (props) => {
	return (
      <div className={classes.friendItem}>
          <img src="https://i.pravatar.cc/50" />
          <p>{props.name}</p>
      </div>
		);
}

export default FriendItem