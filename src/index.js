import React from 'react';
import ReactDOM from 'react-dom';
import state, {startDom} from './redux/state.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import {addPost, updateNewPostText, updateNewMessage, addNewMessage} from './redux/state.js';

let renderEntireTree = (props) => {
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

renderEntireTree(state);

startDom(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
