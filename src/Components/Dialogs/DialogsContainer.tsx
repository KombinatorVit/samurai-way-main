import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';



let mapStateToProps = (state:any)=> {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);