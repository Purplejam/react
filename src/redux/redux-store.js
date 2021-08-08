import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer copy.js';
import sideBarReducer from './sidebar-reducer copy.js';
import usersReducer from './../redux/users-reducer.js';
import authReducer from './../redux/auth-reducer.js';
import thunkMiddleWare from 'redux-thunk';



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;




export default store