import s from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message'
import DialogueItem from './DialogueItem/DialogueItem'
import {sendMessageCreator,updateNewMessageBodyCreator} from './../Redux/dialogues-reducer'






const Dialogues = (props) => {
    
    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange=(event)=>{
        let body=event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let state=props.store.getState().dialoguesPage;
    
    let dialoguesElements=state.dialogues.map( d=> <DialogueItem name={d.name} id={d.id} /> );
     let messagesElements=state.messages.map( m=> <Message  message={m.message}/> );
     let newMessageBody=state.newMessageBody;

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
               {dialoguesElements}
               
            </div>
            <div className={s.messages}>
              <div> {messagesElements}</div>
               <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
                
            </div>
        </div>
    )
}

export default Dialogues