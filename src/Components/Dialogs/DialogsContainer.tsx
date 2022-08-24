import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps = (state:any)=> {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps  = (dispatch:any)=> {
    return {
        sendMessage: (newMessageBody:any) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;