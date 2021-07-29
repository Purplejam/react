import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {messageActionCreator, updateMessageActionCreator} from './../../redux/dialogs-reducer copy.js';


const Dialogs = (props) => {

    let dialogsArray = props.state.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>);
    let messagesArray = props.state.messages.map(message => <Message message={message.message} />);

    let textArea = React.createRef();

    const addUserMessage = () => { 
        props.dispatch(messageActionCreator());
    }

    const textUpdate = () => {
        let text = textArea.current.value;
        props.dispatch(updateMessageActionCreator(text));
        debugger;
    }
	return (
    	<div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsArray}         	
         </div>
         <div className={classes.messages}>
            {messagesArray}
         </div>
         <button onClick={addUserMessage}>Add MSG</button> 
         <textarea ref={textArea} onChange={textUpdate} value={props.state.newPostText}></textarea> 

     </div>
		);
}

export default Dialogs