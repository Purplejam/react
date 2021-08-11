import React from 'react';
import classes from './ProfileInfo.module.css';





class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    editModeOn = () => {
        this.setState({editMode: true });   
    }

    editModeOff = () => {
        this.setState({editMode: false });
    }


    statusChange = (e) => {
        let value = e.target.value;
        this.setState({status: value});
        this.props.updateProfileStatus(value);
    }


    render() {
        return (<div>
                    {!this.state.editMode 
                        ? <div onDoubleClick={this.editModeOn}><span>{this.props.status || 'Enter status'}</span></div>
                        : <div onBlur={this.editModeOff}><input onChange={this.statusChange} autoFocus value={this.state.status}/></div>}

                </div>)
    }

}

export default ProfileStatus