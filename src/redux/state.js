import DialogItem from './../components/Dialogs/DialogItem/DialogItem.jsx';
import Message from './../components/Dialogs/Message/Message.jsx';
import Post from './../components/Profile/MyPosts/Post/Post.jsx';
import FriendItem from './../components/Navbar/Friends/FriendItem/FriendItem.jsx';
/* import {renderEntireTree} from './../render.js'; */

let renderEntireTree = () => {
    console.log('State changed');
}

export const startDom = (observer) => {
    renderEntireTree = observer;
}

    class User {
        name;
        id;
        constructor(name, id) {
            this.name = name;
            this.id = id;
        }
    }

    class MessageItem {
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
   

class PostItem {
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

let state = {
    profilePage: {
        posts: postData,
        newPostText: 'lalalala'
    },
    messagesPage: {
       messages: messageData,
       dialogs: dialogsData,
       newPostText: 'enter text'
    },
    sideBar: {
        friends: friendsArray
    }
}


export let addPost = () => {
    let newPost = new PostItem(state.profilePage.newPostText, 0, 2);
    postData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export let updateNewMessage = (text) => {
    state.messagesPage.newPostText = text;
    renderEntireTree(state);
}

export let addNewMessage = () => {
    let message = new MessageItem(state.messagesPage.newPostText, messageData.length + 1);
    messageData.push(message);
    state.messagesPage.newPostText = '';
    renderEntireTree(state);
}

export default state