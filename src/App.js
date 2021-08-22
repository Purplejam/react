import React from 'react';
import logo from './logo.svg';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Nav from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import Friends from './components/Navbar/Friends/Friends.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import Users from './components/Users/Users.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import Login from './components/Login/Login.jsx';
import {initializeApp} from './redux/app-reducer.js';
import {connect} from 'react-redux';
import './App.css';
import preloader from './assets/images/preloader.gif';
import store from './redux/redux-store.js';



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() { 
        if (!this.props.initialized) {
            return <img src={preloader} />
        }
      return (
          
        <div className="app-wrapper">
            <HeaderContainer />
            <Nav/>
            
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={ () => <ProfileContainer />}/>
                <Route path="/users" render={ () => <UsersContainer />}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/login" component={Login}/>
            </div>
            
        </div>);
        }
    }
 const mapStateToProps = (state) => ({
    initialized: state.app.initialized
 })


export default connect(mapStateToProps, {initializeApp})(App)
