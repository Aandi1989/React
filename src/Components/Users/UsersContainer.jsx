import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow,toggleFollowingProgress,
    requestUsers, getUsersOnPageChanged, setFollow, setUnfollow} from '../Redux/users-reducer';
import Users from './Users';
import Preloader from './../Common/Preloader/Preloader';
import {getPageSize,getUsers,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress} from '../Redux/users-selectors';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage,this.props.pageSize)
        
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersOnPageChanged(pageNumber,this.props.pageSize)
    }

    render() {

       
        return <> 
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props}
                    // totalUsersCount={this.props.totalUsersCount}
                    // pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                    // onPageChanged={this.onPageChanged} users={this.props.users}
                    // followingInProgress={this.props.followingInProgress}
                    // setFollow={this.props.setFollow} setUnfollow={this.props.setUnfollow}
                    />
               </>
    }
}

let mapStateToProps = (state) =>{
    return{
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        isFollowingProgress:getFollowingInProgress(state)     
    }
}

export default connect(mapStateToProps,{follow,unfollow,toggleFollowingProgress,
    requestUsers, getUsersOnPageChanged, setFollow, setUnfollow})(UsersContainer);
