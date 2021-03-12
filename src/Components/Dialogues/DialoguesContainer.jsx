import { NavLink } from 'react-router-dom';
import {sendMessageCreator,updateNewMessageBodyCreator} from './../Redux/dialogues-reducer';
import Dialogues from './Dialogues';
import {connect} from "react-redux"






// const DialoguesContainer = (props) => {
    
//     let state=props.store.getState();
    
//     let onSendMessageClick=()=>{
//         props.store.dispatch(sendMessageCreator());
//     }
//     let updateNewMessageBody=(body)=>{
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }


//     return (
//         <Dialogues onSendMessageClick={onSendMessageClick} updateNewMessageBody={updateNewMessageBody}
//         dialogues={state.dialoguesPage.dialogues} messages={state.dialoguesPage.messages} 
//         newMessageBody={state.dialoguesPage.newMessageBody}/>
//     )
// }

let mapStateToProps=(state)=>{
    return{
        newMessageBody:state.dialoguesPage.newMessageBody,
        dialogues:state.dialoguesPage.dialogues,
        messages:state.dialoguesPage.messages
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        onSendMessageClick:()=>{
            dispatch(sendMessageCreator());
        }
    }
}

const DialoguesContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogues);

export default DialoguesContainer;