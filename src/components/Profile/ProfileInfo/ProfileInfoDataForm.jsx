import React from 'react';
import classes from './ProfileInfo.module.css';
import preloader from './../../common/Preloader.js';
import ProfileStatus from './ProfileStatus.jsx';
import styles from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';
import imageUser from './../../../assets/images/user.png';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';



const ProfileInfoDataForm = ({profile, setProfilePage, onSubmitForm}) => {



    return   <Formik
    initialValues={{fullName: profile.fullName,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        aboutMe: profile.aboutMe,
        facebook: profile.contacts.facebook,
        website: profile.contacts.website,
        vk: profile.contacts.vk,
        twitter: profile.contacts.twitter,
        instagram: profile.contacts.instagram,
        youtube: profile.contacts.youtube,
        githab: profile.contacts.githab,
        mainLink: profile.contacts.mainLink}}

        validate={values => {
           const errors = {};
           return errors;
         }}

        onSubmit={(values, {setSubmitting, setStatus}) => {
            onSubmitForm(values, setStatus);
            setSubmitting(false);
            }}
        >
            {({isSubmitting, status}) => (
                <Form>
                    {status !== '' ? <div className={styles.statusBox}>{status}</div> : null}

                    <div>
                        <b>Full name: </b> <Field name="fullName" placeholder="Your full name"/>
                    </div>

                    <div>
                        <b>lookong for a job: </b> <Field type="checkbox" name="lookingForAJob"/>
                    </div>
           

                    <div>
                        <b>My professional skills: </b> <Field name="lookingForAJobDescription" placeholder="You professional skills"/>
                    </div>


                    <div>
                        <b>About me: </b> <Field name="aboutMe" placeholder="Tell about yourself"/>
                    </div>

                    <div><b>Contacts: </b></div>

                    <div>
                        <b>facebook: </b> <Field name="facebook" placeholder="Facebook"/>
                    </div>

                    <div>
                        <b>website: </b> <Field name="website" placeholder="website"/>
                    </div>

                    <div>
                        <b>vk: </b> <Field name="vk" placeholder="vk"/>
                    </div>

                    <div>
                        <b>twitter: </b> <Field name="twitter" placeholder="twitter"/>
                    </div>

                    <div>
                        <b>instagram: </b> <Field name="instagram" placeholder="instagram"/>
                    </div>

                    <div>
                        <b>youtube: </b> <Field name="youtube" placeholder="youtube"/>
                    </div>

                    <div>
                        <b>githab: </b> <Field name="githab" placeholder="githab"/>
                    </div>

                    <div>
                        <b>mainLink: </b> <Field name="mainLink" placeholder="mainLink"/>
                    </div>

                    <div>
                        <button type="submit" disabled={isSubmitting}>
                           Submit
                        </button>
                    </div>
                </Form>
                )}
    </Formik>

}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfoDataForm