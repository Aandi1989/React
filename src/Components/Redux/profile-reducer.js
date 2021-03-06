const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState={
    posts: [
        { id: 1, message: 'Hi man! How are you doing?', like: 2 },
        { id: 2, message: 'I am realy sick and tired of this shit!', like: 15 }
    ],
    newPostText:''
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
        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText:action.newText
            }
        default:
            return state;

    }
}

export const addPostActionCreator=()=>({type:ADD_POST});
export const updateNewPostTextActionCreator=(text)=>({type:UPDATE_NEW_POST_TEXT, newText:text});
export default profileReducer;