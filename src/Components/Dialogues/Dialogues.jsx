import s from './Dialogues.module.css';
import Message from './Message/Message';
import DialogueItem from './DialogueItem/DialogueItem';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { required,maxLengthCreator } from '../utils/validators/validators';

const maxLenth20=maxLengthCreator(20);

const Dialogues = (props) => {

    let addNewMessage=(values)=>{
        props.onSendMessageClick(values.newMessageBody)
    }

    let dialoguesElements = props.dialogues.map(d => <DialogueItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}

            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const addMessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required,maxLenth20]}
             name="newMessageBody" placeholder='Enter your message'></Field>
        </div>
        <div><button>Send</button></div>
    </form>
    )
};

const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(addMessageForm);

export default Dialogues