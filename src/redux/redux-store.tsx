import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './profile-reducer.tsx';
import dialogsReducer from './dialogs-reducer copy.js';
import sideBarReducer from './sidebar-reducer copy.js';
import usersReducer from './users-reducer.tsx';
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

//chrome app initialize
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create store with thunk middleware
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

//for developing
window.store = store;




export default store