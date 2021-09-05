import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import store from './redux/redux-store.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route} from 'react-router-dom';
import {StoreContext} from './storeContext.js';
import {Provider} from 'react-redux';

let renderEntireTree = (state) => {
  	ReactDOM.render(
    <React.StrictMode>
    	<HashRouter>
      	<Provider store={store}>
        	<App />
        </Provider>
      </HashRouter>
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
