import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState={
    posts: [
        { id: 1, message: 'Hi man! How are you doing?', like: 2 },
        { id: 2, message: 'I am realy sick and tired of this shit!', like: 15 }
    ],
    newPostText:'',
    profile:null
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = { id: 3, message: state.newPostText, like: 0 };
            return{
                ...state,
                posts:[...state.posts, newPost],
                newPostText:''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText:action.newText
            }
        }
        case SET_USER_PROFILE:{
            return {...state,profile:action.profile}
        }
        default:
            return state;

    }
}

export const addPostActionCreator=()=>({type:ADD_POST});
export const updateNewPostTextActionCreator=(text)=>({type:UPDATE_NEW_POST_TEXT, newText:text});
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile});

export const setUserProfileThunk=(userId)=>{
    return (dispatch)=>{
        usersAPI.setUserProfile(userId)
        .then(data=>{
            dispatch(setUserProfile(data))
        })
    }
}

export default profileReducer;