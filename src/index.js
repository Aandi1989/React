import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Components/Redux/State'

// let posts=[
//   {id:1, message:'Hi man! How are you doing?', like:2},
//   {id:2, message:'I am realy sick and tired of this shit!', like:15}
  
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



ReactDOM.render(
  <React.StrictMode>
    <App state={state}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
