import { NavLink } from 'react-router-dom';
import {sendMessageCreator,updateNewMessageBodyCreator} from './../Redux/dialogues-reducer';
import Dialogues from './Dialogues';
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect';



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

let AuthRedirectComponent = withAuthRedirect(Dialogues);

const DialoguesContainer=connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialoguesContainer;