import React from 'react';
import classes from './ProfileInfo.module.css';
import preloader from './../../common/Preloader.js';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';
import imageUser from './../../../assets/images/user.png';



const ProfileInfo = ({profile, updateProfileStatus, status, isOwner, uploadUserPhoto}) => {

	if (!profile) {
		return <img src={preloader} />
	}

    const uploadFileThunk = (file) => {
        if (file.length) {
            uploadUserPhoto(file);
        }
    }

	return (
        <div>
            <div><img className={classes.banner}src="https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg" alt=""></img>
            </div>
            <div className={classes.largeImg}><img src={profile.photos.large || imageUser} /></div>
            {isOwner && <input type="file" onChange={(e) => uploadFileThunk(e.target.files)}/>}
            <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus}/>
            <ProfileData profile={profile}/>

        </div>
		);
}

const ProfileData = ({profile}) => {

    return             <div>
                <div>
                    <b>Full name: </b> {profile.fullName}
                </div>

                <div>
                    <b>lookong for a job: </b> {profile.lookingForAJob ? "Yes" : "No"}
                </div>
       
                {profile.lookingForAJob && 

                <div>
                    <b>My professional skills: </b> {profile.lookingForAJobDescription}
                </div>
                }

                <div>
                    <b>About me: </b> {profile.aboutMe}
                </div>

                <div>
                    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                        return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
                        })}
                </div>
                
            </div>

}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo