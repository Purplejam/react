import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './components/Profile/MyPosts/Post/Post.jsx';
import DialogItem from './components/Dialogs/DialogItem/DialogItem.jsx';
import Message from './components/Dialogs/Message/Message.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import {addPost, updateNewPostText, updateNewMessage, addNewMessage} from './redux/state.js';





export let renderEntireTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
    <App state={state} 
    	addPost={addPost} 
    	updateNewPostText={updateNewPostText} 
    	updateNewMessage={updateNewMessage}
    	addNewMessage={addNewMessage}
    />
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default renderEntireTree