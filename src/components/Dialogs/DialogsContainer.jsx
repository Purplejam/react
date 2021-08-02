import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import Dialogs from './Dialogs.jsx';
import StoreContext from './../../storeContext.js';
import {connect} from 'react-redux';
import {messageActionCreator, updateMessageActionCreator} from './../../redux/dialogs-reducer copy.js';



const mapStateToProps = (state) => {
   return {
    messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    textUpdate: (text) => {
        dispatch(updateMessageActionCreator(text));
    },
    addUserMessage: () => {
        dispatch(messageActionCreator());
    }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

 

export default DialogsContainer