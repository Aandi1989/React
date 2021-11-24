import s from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogueItem from './DialogueItem/DialogueItem'
import { Redirect } from 'react-router-dom';






const Dialogues = (props) => {
    
    let onSendMessageClick=()=>{
        props.onSendMessageClick();
    }
    let onNewMessageChange=(event)=>{
        let body=event.target.value;
        props.updateNewMessageBody(body)
    }

    
    let dialoguesElements=props.dialogues.map( d=> <DialogueItem name={d.name} id={d.id} /> );
     let messagesElements=props.messages.map( m=> <Message  message={m.message}/> );

     if(!props.isAuth){
         return <Redirect to={'/login'}/>
     }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
               {dialoguesElements}
               
            </div>
            <div className={s.messages}>
              <div> {messagesElements}</div>
               <div><textarea value={props.newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
                
            </div>
        </div>
    )
}

export default Dialogues