import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk, getStatus, updateStatus} from './../Redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=18977
        }
        this.props.setUserProfileThunk(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
           <Profile {...this.props} profile={this.props.profile} status={this.props.status}  
           updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps=(state) =>({
    profile:state.profilePage.profile,
    status:state.profilePage.status
});

export default compose(
    connect(mapStateToProps,{setUserProfileThunk,getStatus,updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);



