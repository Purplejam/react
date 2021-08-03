import logo from './logo.svg';
import Header from './components/Header/Header.jsx';
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
import './App.css';
/* import {addPost} from './redux/state.js'; */



function App(props) {

  return (
  	
    <div className="app-wrapper">
        <Header />
        <Nav/>
        
        <div className="app-wrapper-content">
        	<Route path="/dialogs" render={ () => <DialogsContainer/>}/>
        	<Route path="/profile" render={ () => <Profile />}/>
            <Route path="/users" render={ () => <UsersContainer />}/>
        	<Route path="/music" component={Music}/>
        	<Route path="/settings" component={Settings}/>
        </div>
        
    </div>
  

    );
}




export default App;
