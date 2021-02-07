import s from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message'
import DialogueItem from './DialogueItem/DialogueItem'




// const DialogueItem = (props) => {
    
//    let path ='/dialogues/' + props.id;
    
//     return (
//         <div className={s.dialogue}>
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>
//     )
// }

// const Message = (props) =>{
//     return(
//         <div className={s.message}>{props.message}</div> 
//     )
// }

const Dialogues = () => {
    
    let dialogues=[
        {id:1,  name:'Alex'},
        {id:2, name:'Andry'},
        {id:3, name:'John'},
        {id:4,  name:'Alexey'},
        {id:5,  name:'Victor'}
    ]

    let dialoguesElements=dialogues.map( d=> <DialogueItem name={d.name} id={d.id} /> );
    
    let messages=[
        {id:1, message:'Hi,man!'},
        {id:2, message:'How is it going'},
        {id:3, message:'What is up?'}
        
    ]

    let messagesElements= messages.map( m=> <Message  message={m.message}/> )

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
               {dialoguesElements}
                {/* <DialogueItem name={dialoguesData[0].name} id={dialoguesData[0].id} />
                <DialogueItem name={dialoguesData[1].name} id={dialoguesData[1].id} />
                <DialogueItem name={dialoguesData[2].name} id={dialoguesData[2].id} />
                <DialogueItem name={dialoguesData[3].name} id={dialoguesData[3].id} />
                <DialogueItem name={dialoguesData[4].name} id={dialoguesData[4].id} /> */}
            </div>
            <div className={s.messages}>
               {messagesElements}
                {/* <Message  message={messagesData[0].message}/>
                <Message  message={messagesData[1].message}/>
                <Message  message={messagesData[2].message}/> */}
            </div>
        </div>
    )
}

export default Dialogues