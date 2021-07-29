import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer copy.js';

class User {
        name;
        id;
        constructor(name, id) {
            this.name = name;
            this.id = id;
        }
}

export class MessageItem {
        message;
        id;
        constructor(text, id) {
            this.message = text;
            this.id = id;
        }
}

let dialogsData = [
        new User('Sasha', 1),
        new User('Dima', 2),
        new User('Stepan', 3),
        new User('Valera', 4),
        new User('Nikolay', 5)
]
   

let messageData = [
        new MessageItem('How are You', 1),
        new MessageItem('London is a capital', 2),
        new MessageItem('Babushka', 3),
        new MessageItem('Hello World', 4),
        new MessageItem('Hello', 5)
]
   

export class PostItem {
    message; 
    id; 
    likesCount;
    constructor(message, id, likeCount) {
        this.message = message;
        this.id = id;
        this.likeCount = likeCount;
    }
}

let postData = [
    new PostItem("Hi, how are you?", 1, 14),
    new PostItem("Fine, it is my first post", 2, 43),
    new PostItem("My dogs foto, yee", 3, 43),
]


class FriendItems {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

let friendsArray = [
    new FriendItems('Stepan', 1),
    new FriendItems('Vova', 2),
    new FriendItems('Valeria', 3),
    new FriendItems('Yulia', 4),
    new FriendItems('Sasha', 5)
]



let store = {
state: {
    profilePage: {
        posts: postData,
        newPostText: 'enter message'
    },
    messagesPage: {
       messages: messageData,
       dialogs: dialogsData,
       newPostText: 'enter text'
    },
    sideBar: {
        friends: friendsArray
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
    this._callSubscriber(this.state);

    }
}


export default store