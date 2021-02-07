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


const App = (props) => {
 
//   let posts=[
//     {id:1, message:'Hi man! How are you doing?', like:2},
//     {id:2, message:'I am realy sick and tired of this shit!', like:15}
    
// ]

// let dialogues=[
//   {id:1,  name:'Alex'},
//   {id:2, name:'Andry'},
//   {id:3, name:'John'},
//   {id:4,  name:'Alexey'},
//   {id:5,  name:'Victor'}
// ]

// let messages=[
//   {id:1, message:'Hi,man!'},
//   {id:2, message:'How is it going'},
//   {id:3, message:'What is up?'}
  
// ]
 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/Dialogues" component={Dialogues} /> */}
          <Route path="/Dialogues" render={()=> <Dialogues dialogues={props.dialogues}  messages={props.messages}/>} />
          {/* <Route path="/Profile" component={Profile} /> */}
          <Route path="/Profile" render={()=> <Profile posts={props.posts}/>} />
          <Route path="/News" render={()=> <News/>} />
          {/* <Route path="/News" component={News} /> */}
          <Route path="/Setting" render={()=> <Setting/>} />
          {/* <Route path="/Setting" component={Setting} /> */}
          <Route path="/Music" render={()=> <Music/>} />
          {/* <Route path="/Music" component={Music} /> */}

          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
