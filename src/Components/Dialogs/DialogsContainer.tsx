import React from 'react';
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
        sendMessage: () => {dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body:any) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;