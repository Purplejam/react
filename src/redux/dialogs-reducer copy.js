import {MessageItem} from './state.js';
import {messageData, dialogsData} from './store.js';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';


let initialState = {
       messages: messageData,
       dialogs: dialogsData,
       newPostText: 'enter text'
}

const dialogsReducer = (state = initialState, action) => {

function addNewMessage() {
    let message = new MessageItem(state.newPostText, state.messages + 1);
    state.messages.push(message);
    state.newPostText = '';
}

function updateNewMessage(text) {
    state.newPostText = text;
}

switch(action.type) {
    case(ADD_NEW_MESSAGE) : 
        addNewMessage();
        return state;
    case(UPDATE_NEW_MESSAGE) : 
        updateNewMessage(action.text);
        return state;
    default : return state;
}



    return state;
}


export let messageActionCreator = () => {
  return {
    type: ADD_NEW_MESSAGE
  }
}

export let updateMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    text: text 
  }
}

export default dialogsReducer;