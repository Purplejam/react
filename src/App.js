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
import './App.css';
/* import {addPost} from './redux/state.js'; */



function App(props) {

  return (
  	
    <div className="app-wrapper">
        <Header />
        {/* <Nav state={props.state.sideBar} dispatch={props.dispatch}/> */}
        <Nav/>
        
        <div className="app-wrapper-content">
        	<Route path="/dialogs" render={ () => <DialogsContainer/>}/>
        	<Route path="/profile" render={ () => <Profile />}/>
            {/* <Route path="/dialogs" render={ () => <DialogsContainer store={props.store} state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
            <Route path="/profile" render={ () => <Profile store={props.store} dispatch={props.dispatch}/>}/>
            <Route path="/friends" render={ () => <Friends state={props.state.sideBar.friends}/>}/> */}
        	<Route path="/news" component={News}/>
        	<Route path="/music" component={Music}/>
        	<Route path="/settings" component={Settings}/>
        </div>
        
    </div>
  

    );
}




export default App;
