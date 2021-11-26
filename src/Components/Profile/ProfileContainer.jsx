import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk} from './../Redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=2
        }
        this.props.setUserProfileThunk(userId)
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={'/login'}/>;

        return (
           <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps=(state) =>({
    profile:state.profilePage.profile,
});

let WithUrlDataContainerComponent=withRouter(AuthRedirectComponent);

export default connect(mapStateToProps,{setUserProfileThunk})(WithUrlDataContainerComponent)

