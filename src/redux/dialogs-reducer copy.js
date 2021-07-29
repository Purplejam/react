const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialState = {
       messages: [
        {message: 'How are You', id: 1},
        {message: 'Im Fine Boi', id: 2},
        {message: 'Wanna some react?', id: 3},
        {message: 'Yes, I do!', id: 4},
        {message: 'Check this link', id: 5},
        ],
       dialogs: [
        {name: 'Sasha', id: 1},
        {name: 'Dimon', id: 2},
        {name: 'Pokemon', id: 3},
        {name: 'Vitalik', id: 4},
        {name: 'Anton', id: 5},
    				],
       newPostText: 'enter text'
}

const dialogsReducer = (state = initialState, action) => {

function addNewMessage() {
    let message = {message: state.newPostText, id: state.messages + 1};
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