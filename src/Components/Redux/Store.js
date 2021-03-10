import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";


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
            ],
            newMessageBody:''
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
      this._state.profilePage=profileReducer(this._state.profilePage,action);  
      this._state.dialoguesPage=dialoguesReducer(this._state.dialoguesPage,action); 
      
      this._callSubscriber(this._state)
    
    }

}





export default store