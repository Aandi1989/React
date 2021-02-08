import s from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message'
import DialogueItem from './DialogueItem/DialogueItem'






const Dialogues = (props) => {
    
    
    let dialoguesElements=props.state.dialogues.map( d=> <DialogueItem name={d.name} id={d.id} /> );
    
    

    let messagesElements= props.state.messages.map( m=> <Message  message={m.message}/> )

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
               {dialoguesElements}
                
            </div>
            <div className={s.messages}>
               {messagesElements}
                
            </div>
        </div>
    )
}

export default Dialogues