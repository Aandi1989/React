import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState={
    posts: [
        { id: 1, message: 'Hi man! How are you doing?', like: 2 },
        { id: 2, message: 'I am realy sick and tired of this shit!', like: 15 }
    ],
    profile:null,
    status:''
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = { id: 3, message:action.newPostBody, like: 0 };
            return{
                ...state,
                posts:[...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE:{
            return {...state,profile:action.profile}
        }
        case SET_STATUS:{
            return {...state,status:action.status}
        }
        default:
            return state;

    }
}

export const addPostActionCreator=(newPostBody)=>({type:ADD_POST, newPostBody});
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile});
export const setStatus=(status)=>({type:SET_STATUS,status});

export const setUserProfileThunk=(userId)=>{
    return (dispatch)=>{
        usersAPI.setUserProfile(userId)
        .then(data=>{
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus=(userId)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userId)
        .then(response=>{
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus=(status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status)
        .then(response=>{
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;