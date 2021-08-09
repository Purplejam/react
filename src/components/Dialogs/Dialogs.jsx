import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {messageActionCreator, updateMessageActionCreator} from './../../redux/dialogs-reducer copy.js';
import {Redirect} from 'react-router-dom';


const Dialogs = (props) => {

    let dialogsArray = props.messagesPage.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>);
    let messagesArray = props.messagesPage.messages.map(message => <Message message={message.message} />);

    let textArea = React.createRef();

    const addUserMessage = () => { 
        props.addUserMessage();
    }

    const textUpdate = () => {
        let text = textArea.current.value;
        props.textUpdate(text);
    }

    if (props.isAuth === false) {
        return <Redirect to="/login"/>
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
         <textarea ref={textArea} onChange={textUpdate} value={props.messagesPage.newPostText}></textarea> 

     </div>
		);
}

export default Dialogs