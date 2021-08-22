import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer copy.js';
import sideBarReducer from './sidebar-reducer copy.js';
import usersReducer from './../redux/users-reducer.js';
import authReducer from './../redux/auth-reducer.js';
import appReducer from './../redux/app-reducer.js';
import thunkMiddleWare from 'redux-thunk';



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;




export default store