import React from 'react';
import classes from './ProfileInfo.module.css';



const ProfileInfo = () => {
	return (
        <div>
            <div><img className={classes.banner}src="https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg" alt=""></img>
            </div>
            <div className={classes.decriptionBlock}>
                Ava + descr
            </div>
        </div>
		);
}

export default ProfileInfo