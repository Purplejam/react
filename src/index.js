import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import store from './redux/redux-store.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import StoreContext from './storeContext.js';
/* import {addPost, updateNewPostText, updateNewMessage, addNewMessage} from './redux/state.js'; */

let renderEntireTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
  		<StoreContext.Provider value={store}>
    	<App state={state} store={store} dispatch={store.dispatch.bind(store)} />
    </StoreContext.Provider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}



renderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
