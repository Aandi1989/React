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
        ]
};


const dialoguesReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case SEND_MESSAGE:{
            let body ={id:4, message:action.newMessageBody}
            return{
                ...state,
                messages:[...state.messages,body]
            }
        } 
        default:
            return state;
    }
}

export const sendMessageCreator=(newMessageBody)=>({type:SEND_MESSAGE, newMessageBody})
export default dialoguesReducer;