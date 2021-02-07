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

import {BrowserRouter, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/Dialogues" component={Dialogues} /> */}
          <Route path="/Dialogues" render={()=> <Dialogues/>} />
          {/* <Route path="/Profile" component={Profile} /> */}
          <Route path="/Profile" component={()=> <Profile/>} />
          <Route path="/News" component={()=> <News/>} />
          {/* <Route path="/News" component={News} /> */}
          <Route path="/Setting" component={()=> <Setting/>} />
          {/* <Route path="/Setting" component={Setting} /> */}
          <Route path="/Music" component={()=> <Music/>} />
          {/* <Route path="/Music" component={Music} /> */}

          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
