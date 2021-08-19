import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';





const ProfileStatusWithHooks = (props) => {

const [editMode, editModeSet] = useState(false);
const [status, setStatus] = useState(props.status);

const editModeOn = () => {
    editModeSet(true);
}

const editModeOff = () => {
    editModeSet(false);
}

const statusChange = (e) => {
    let value = e.target.value;
    setStatus(value);
    props.updateProfileStatus(value);  
}

    return (<div>
                {!editMode 
                    ? <div onDoubleClick={editModeOn}><span>{props.status || 'Enter status'}</span></div>
                    : <div onBlur={editModeOff}><input onChange={statusChange} autoFocus value={status}/></div>}

            </div>)


}

export default ProfileStatusWithHooks