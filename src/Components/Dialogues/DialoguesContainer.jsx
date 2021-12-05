import {sendMessageCreator} from './../Redux/dialogues-reducer';
import Dialogues from './Dialogues';
import {connect} from "react-redux";
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';
 
let mapStateToProps=(state)=>{
    return{
        newMessageBody:state.dialoguesPage.newMessageBody,
        dialogues:state.dialoguesPage.dialogues,
        messages:state.dialoguesPage.messages
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        onSendMessageClick:(newMessageBody)=>{
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogues);
