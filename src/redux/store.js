import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer copy.js';
import sideBarReducer from './sidebar-reducer copy.js';

let store = {
state: {
    profilePage: {
        posts: [
            {message: "Hi, how are you?", id: 1, likeCount: 24},
            {message: "My cat, yoo", id: 2, likeCount: 13},
            {message: "lalala", id: 1, likeCount: 64},
            ],
        newPostText: 'enter message'
    },
    messagesPage: {
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
    },
    sideBar: {
        friends: [
            {name: 'Stepan', id: 1},
            {name: 'Sasha', id: 2},
            {name: 'Stepan', id: 3},
            {name: 'Alyona', id: 4},
            {name: 'Alex', id: 5},
        ]
    }
},
getState() {
    return this.state;
},
_callSubscriber() {
    console.log('state changed');
},
subscribe(observer) {
    this._callSubscriber = observer;
},
dispatch(action) {

    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.messagesPage = dialogsReducer(this.state.messagesPage, action);
    this.state.sideBar = sideBarReducer(this.state.sideBar, action);
    this._callSubscriber(this.state);

    }
}



export default store