import { NavLink } from 'react-router-dom';
import {sendMessageCreator,updateNewMessageBodyCreator} from './../Redux/dialogues-reducer';
import Dialogues from './Dialogues'






const DialoguesContainer = (props) => {
    
    let state=props.store.getState();
    
    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator());
    }
    let updateNewMessageBody=(body)=>{
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <Dialogues onSendMessageClick={onSendMessageClick} updateNewMessageBody={updateNewMessageBody}
        dialogues={state.dialoguesPage.dialogues} messages={state.dialoguesPage.messages} 
        newMessageBody={state.dialoguesPage.newMessageBody}/>
    )
}

export default DialoguesContainer