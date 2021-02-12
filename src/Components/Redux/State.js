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
        // addPost(){
        //     let newPost={
        //         id:3, message:this._state.profilePage.newPostText, like:0
        //     } 
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText='';
        //     this._callSubscriber(this._state);
        //  },
        //  updateNewPostText(newText){
        //     this._state.profilePage.newPostText=newText;
        //     this._callSubscriber(this._state);
        // },
        subscribe(observer){
            this._callSubscriber=observer;
        },
        
        dispatch(action){
        if(action.type ==='ADD-POST'){
            let newPost={
                id:3, message:this._state.profilePage.newPostText, like:0
            } 
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state)   
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state); 
        }
        }

}

export default store