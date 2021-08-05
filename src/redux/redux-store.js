import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer copy.js';
import sideBarReducer from './sidebar-reducer copy.js';
import usersReducer from './../redux/users-reducer.js';



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store;




export default store