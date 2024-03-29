import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOOLOWING_PROGRESS = 'TOOGLE_IS_FOOLOWING_PROGRESS';



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOOGLE_IS_FOOLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.isFollowingProgress, action.userId] :
                    state.isFollowingProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;

    }
}

export const follow = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({
    type: TOOGLE_IS_FETCHING,
    isFetching
});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOOGLE_IS_FOOLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage, pageSize) =>{
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
    
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const getUsersOnPageChanged = (pageNumber,pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));
        
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
            });
    }
}

export const setFollow=(userId)=>{
    return(dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId));

        usersAPI.setFollow(userId)
        .then(data=>{
            if(data.resultCode == 0){
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })

    }
}

export const setUnfollow=(userId)=>{
    return(dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId));

        usersAPI.setUnfollow(userId)
        .then(data=>{
            if(data.resultCode == 0){
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })

    }
}

export default usersReducer;