import s from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message'
import DialogueItem from './DialogueItem/DialogueItem'






const Dialogues = (props) => {
    
    // let dialogues=[
    //     {id:1,  name:'Alex'},
    //     {id:2, name:'Andry'},
    //     {id:3, name:'John'},
    //     {id:4,  name:'Alexey'},
    //     {id:5,  name:'Victor'}
    // ]

    let dialoguesElements=props.dialogues.map( d=> <DialogueItem name={d.name} id={d.id} /> );
    
    // let messages=[
    //     {id:1, message:'Hi,man!'},
    //     {id:2, message:'How is it going'},
    //     {id:3, message:'What is up?'}
        
    // ]

    let messagesElements= props.messages.map( m=> <Message  message={m.message}/> )

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