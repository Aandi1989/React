import { NavLink } from 'react-router-dom';
import {sendMessageCreator,updateNewMessageBodyCreator} from './../Redux/dialogues-reducer';
import Dialogues from './Dialogues';
import {connect} from "react-redux"



let mapStateToProps=(state)=>{
    return{
        newMessageBody:state.dialoguesPage.newMessageBody,
        dialogues:state.dialoguesPage.dialogues,
        messages:state.dialoguesPage.messages,
        isAuth:state.auth.isAuth
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