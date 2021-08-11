const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState={
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
};


const dialoguesReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return{
                ...state,
                newMessageBody:action.body
            }
        case SEND_MESSAGE:{
            let body ={id:6, message:state.newMessageBody};
            return{
                ...state,
                messages:[...state.messages, body],
                newMessageBody:''
            }
        } 
        default:
            return state;
    }
}

export const sendMessageCreator=()=>({type:SEND_MESSAGE});
export const updateNewMessageBodyCreator=(body)=>({type:UPDATE_NEW_MESSAGE_BODY, body:body});
export default dialoguesReducer;