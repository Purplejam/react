import React from 'react';
import classes from './ProfileInfo.module.css';
import preloader from './../../common/Preloader.js';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';



const ProfileInfo = (props) => {
	if (!props.profile) {
		return <img src={preloader} />
	}


	return (
        <div>
            <div><img className={classes.banner}src="https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg" alt=""></img>
            </div>
            {/* <div><img src={props.profile.photos.large}/></div> */}
            <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            {/* <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/> */}
            <div className={classes.decriptionBlock}>
                {props.profile.aboutMe}
            </div>
        </div>
		);
}

export default ProfileInfo