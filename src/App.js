import React, {
    Component
  } from 'react';
  import './App.css';
  import Navbar from './Components/Navbar/Navbar';
  import DialoguesContainer from './Components/Dialogues/DialoguesContainer';
  import News from './Components/News/News';
  import Setting from './Components/Setting/Setting';
  import Music from './Components/Music/Music';
  import UsersContainer from './Components/Users/UsersContainer';
  
  import { Route } from 'react-router-dom';
  import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './Components/Redux/app-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Preloader from './Components/Common/Preloader/Preloader'
  
  class App  extends React.Component {
    componentDidMount(){
      this.props.initializeApp()
    }

   render(){
     if(!this.props.initialized){
       return <Preloader/>
     }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Dialogues" render={()=> <DialoguesContainer/>} />
          <Route path='/profile/:userId?' render={()=> <ProfileContainer/>} />
          <Route path="/Users" render={()=> <UsersContainer/>} />
          <Route path="/login" render={()=> <Login/>} />
          <Route path="/News" render={()=> <News/>} />
          <Route path="/Setting" render={()=> <Setting/>} />
          <Route path="/Music" render={()=> <Music/>} />
        </div>
      </div>
    )
   }
}

let mapStateToProps=(state)=>({
  initialized:state.app.initialized
})
   
  export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})) (App);

  

