import React from 'react';
import classes from './ProfileInfo.module.css';





const ProfileStatusWithHooks = (props) => {


    return (<div>
                {true 
                    ? <div onDoubleClick={this.editModeOn}><span>{this.props.status || 'Enter status'}</span></div>
                    : <div onBlur={this.editModeOff}><input onChange={this.statusChange} autoFocus value={this.state.status}/></div>}

            </div>)


}

export default ProfileStatusWithHooks