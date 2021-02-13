const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

let store={
    _state:{
        profilePage:{
            posts: [
                { id: 1, message: 'Hi man! How are you doing?', like: 2 },
                { id: 2, message: 'I am realy sick and tired of this shit!', like: 15 }
            ],
            newPostText:''
        },
        dialoguesPage:{
            dialogues: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Andry' },
                { id: 3, name: 'John' },
                { id: 4, name: 'Alexey' },
                { id: 5, name: 'Victor' }
            ],
            messages: [
                { id: 1, message: 'Hi,man!' },
                { id: 2, message: 'How is it going' },
                { id: 3, message: 'What is up?' }
            ]
        }
        },
        getState(){
            return this._state;
        },
        _callSubscriber(){
            console.log('!')
        },
        
        subscribe(observer){
            this._callSubscriber=observer;
        },
        
        dispatch(action){
        if(action.type === ADD_POST){
            let newPost={
                id:3, message:this._state.profilePage.newPostText, like:0
            } 
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state)   
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state); 
        }
        }

}

export const addPostActionCreator=()=>({type:ADD_POST});
export const updateNewPostTextActionCreator=(text)=>({type:UPDATE_NEW_POST_TEXT, newText:text})



export default store