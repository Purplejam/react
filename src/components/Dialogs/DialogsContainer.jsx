import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import Dialogs from './Dialogs.jsx';
import StoreContext from './../../storeContext.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {messageActionCreator} from './../../redux/dialogs-reducer copy.js';
import {WithAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {compose} from 'redux';




const mapStateToProps = (state) => {
   return {
    messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    addUserMessage: (text) => {
        dispatch(messageActionCreator(text));
    }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps))(Dialogs);