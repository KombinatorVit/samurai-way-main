import React, {ChangeEvent} from 'react';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';



let mapStateToProps = (state:any)=> {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps  = (dispatch:any)=> {
    return {
        updateNewMessageBody: () => {dispatch(sendMessageCreator());
        },
        sendMessage: (body:any) => {                        dispatch(updateNewMessageBodyCreator(body));
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;