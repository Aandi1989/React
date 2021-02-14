import React, {
  Component
} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogues from './Components/Dialogues/Dialogues';
import News from './Components/News/News';
import Setting from './Components/Setting/Setting';
import Music from './Components/Music/Music';

import { Route } from 'react-router-dom'


const App = (props) => {
 

 
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Dialogues" render={()=> <Dialogues store={props.store}/>} />
          <Route path="/Profile" render={()=> <Profile state={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route path="/News" render={()=> <News/>} />
          <Route path="/Setting" render={()=> <Setting/>} />
          <Route path="/Music" render={()=> <Music/>} />

          
        </div>
      </div>
  );
}

export default App;
