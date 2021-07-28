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
import './App.css';
import {addPost} from './redux/state.js';



function App(props) {

  return (
  	
    <div className="app-wrapper">
        <Header />
        <Nav state={props.state.sideBar}/>
        
        <div className="app-wrapper-content">
        	<Route path="/dialogs" render={ () => <Dialogs state={props.state.messagesPage} 
                updateNewMessage={props.updateNewMessage}
                addNewMessage={props.addNewMessage}
            />}/>
        	<Route path="/profile" render={ () => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
            <Route path="/friends" render={ () => <Friends state={props.state.sideBar.friends}/>}/>
        	<Route path="/news" component={News}/>
        	<Route path="/music" component={Music}/>
        	<Route path="/settings" component={Settings}/>
        </div>
        
    </div>
  

    );
}




export default App;
