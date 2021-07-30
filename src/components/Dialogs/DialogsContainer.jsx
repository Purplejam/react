import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import Dialogs from './Dialogs.jsx';
import {messageActionCreator, updateMessageActionCreator} from './../../redux/dialogs-reducer copy.js';


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;


    let textArea = React.createRef();

    const addUserMessage = () => { 
        props.store.dispatch(messageActionCreator());
    }

    const textUpdate = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    }
	return (<Dialogs textUpdate={textUpdate} 
        addUserMessage={addUserMessage}
        messages={state.messages}
        dialogs={state.dialogs}
        newPostText={state.newPostText}/>);
}

export default DialogsContainer