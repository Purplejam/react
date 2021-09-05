import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Nav from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import Login from './components/Login/Login.jsx';
import {initializeApp} from './redux/app-reducer.tsx';
import {connect} from 'react-redux';
import './App.css';
import preloader from './assets/images/preloader.gif';
import {WithSuspense} from './hoc/WithSuspense.js';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.jsx'));


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
                


                <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>

                <Route path="/profile/:userId?" render={ () => <ProfileContainer />}/>

                <Route path="/users" render={WithSuspense(UsersContainer)}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/login" component={Login}/>
                <Route path="/news" component={News}/>
            </div>
            
        </div>);
        }
    }
 const mapStateToProps = (state) => ({
    initialized: state.app.initialized
 })


export default connect(mapStateToProps, {initializeApp})(App)
