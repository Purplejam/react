import React from 'react';
import classes from './ProfileInfo.module.css';





class ProfileStatus extends React.Component {


    state = {
        editMode: false 
    }

    editModeOn = () => {
        this.setState({editMode: true });   
    }

    editModeOff = () => {
        this.setState({editMode: false });
    }

    statusChange = () => {
        
    }


    render() {
        return (<div>
                    {!this.state.editMode 
                        ? <div onDoubleClick={this.editModeOn}><span>{this.props.status}</span></div>
                        : <div onBlur={this.editModeOff}><input onChange={this.statusChange} autoFocus value={this.props.status}/></div>}
                    
                    
        
                </div>)
    }

}

export default ProfileStatus