import React from 'react';
import classes from './Friends.module.css';
import {NavLink} from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem.jsx';


const Friends = (props) => {
let friendsElements = props.state.map(user => <FriendItem name={user.name} id={user.id}/>);

	return (
        <div className={classes.friendsList}>
            <h3>Your Friends ({friendsElements.length})</h3>
            {friendsElements}
        </div>
		);
}

export default Friends