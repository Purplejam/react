const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

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
    				]
}

export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {


    switch(action.type) {
        case ADD_NEW_MESSAGE : 
        let message = {message: action.message, id: state.messages.length + 1};
            return {
                ...state,
                messages: [...state.messages, message]
            }
        default : return state;
    }
    return state;
}

//end of reducer


export let messageActionCreator = (message: string) => {
  return {
    type: ADD_NEW_MESSAGE,
    message
  }
}


export default dialogsReducer;